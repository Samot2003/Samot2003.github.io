"use client";

import { useEffect, useState } from "react";
import { content, links, type Lang } from "@/content";
import LogPanel from "./LogPanel";

const STORAGE_KEY = "lang";

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>("es");
  const t = content[lang];

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      // The static HTML is Spanish; the saved choice can only be read after hydration.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (saved === "es" || saved === "en") setLang(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = content[lang].pageTitle;
  }, [lang]);

  function toggleLang() {
    const next: Lang = lang === "es" ? "en" : "es";
    setLang(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }

  const cvHref = links.cv[lang];
  const projects = t.projects.items.filter((p) => !p.hidden);

  return (
    <>
      <header className="topbar">
        <a href="#top" className="topbar-name">
          Tomás Aladjem
        </a>
        <nav aria-label={lang === "es" ? "Secciones" : "Sections"}>
          <a href="#experiencia">{t.nav.experience}</a>
          <a href="#proyectos">{t.nav.projects}</a>
          <a href="#formacion">{t.nav.education}</a>
          <a href="#contacto">{t.nav.contact}</a>
        </nav>
        <button type="button" className="lang-toggle" onClick={toggleLang} lang={lang === "es" ? "en" : "es"}>
          {t.nav.switchTo}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="status">
              <span className="status-dot" aria-hidden="true" />
              {t.hero.status}
            </p>
            <h1>{t.hero.name}</h1>
            <p className="hero-role">{t.hero.role}</p>
            <div className="actions">
              <a className="btn btn-primary" href={cvHref} download>
                {t.hero.cv}
              </a>
              <a className="btn" href={`mailto:${links.email}`}>
                {t.hero.write}
              </a>
            </div>
          </div>
          <LogPanel key={lang} label={t.hero.logLabel} lines={t.hero.log} />
        </section>

        <section id="experiencia" className="section">
          <h2 className="section-title">{t.experience.title}</h2>
          <div className="section-body">
            <div className="job-head">
              <h3>{t.experience.company}</h3>
              <p className="job-role">{t.experience.role}</p>
              <p className="meta">{t.experience.period}</p>
            </div>
            <p className="muted">{t.experience.companyNote}</p>

            <h4 className="project-name">{t.experience.project}</h4>
            <p className="lead">{t.experience.problem}</p>
            <p className="lead">{t.experience.solution}</p>

            <h5>{t.experience.builtTitle}</h5>
            <ul className="list">
              {t.experience.built.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h5>{t.experience.decisionsTitle}</h5>
            <dl className="decisions">
              {t.experience.decisions.map((d) => (
                <div key={d.title}>
                  <dt>{d.title}</dt>
                  <dd>{d.text}</dd>
                </div>
              ))}
            </dl>

            <Stack items={t.experience.stack} />
          </div>
        </section>

        <section id="proyectos" className="section">
          <h2 className="section-title">{t.projects.title}</h2>
          <div className="section-body">
            {projects.map((p) => (
              <article key={p.id} className="project">
                <h3>{p.name}</h3>
                <p className="meta">{p.context}</p>
                <p className="lead">{p.summary}</p>
                {p.images && (
                  <div className="shots">
                    {p.images.map((img) => (
                      // Static export: plain img keeps the build free of an image optimizer.
                      // eslint-disable-next-line @next/next/no-img-element
                      <img key={img.src} src={img.src} alt={img.alt} loading="lazy" width={1400} height={736} />
                    ))}
                  </div>
                )}
                <ul className="list">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <Stack items={p.stack} />
                {p.links.length > 0 && (
                  <p className="project-links">
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                        {l.label}
                      </a>
                    ))}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="formacion" className="section">
          <h2 className="section-title">{t.education.title}</h2>
          <div className="section-body">
            <ul className="edu">
              {t.education.items.map((e) => (
                <li key={e.name}>
                  <h3>{e.name}</h3>
                  <p>{e.where}</p>
                  <p className="meta">{e.when}</p>
                </li>
              ))}
            </ul>
            <p>
              <strong>{t.education.languagesTitle}:</strong> {t.education.languages}
            </p>

            <h3 className="skills-title">{t.skills.title}</h3>
            <dl className="skills">
              {t.skills.groups.map((g) => (
                <div key={g.name}>
                  <dt>{g.name}</dt>
                  <dd>{g.items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="contacto" className="section contact">
          <h2 className="section-title">{t.contact.title}</h2>
          <div className="section-body">
            <div className="contact-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="photo" src="/img/tomas.jpg" alt={t.contact.photoAlt} width={400} height={400} />
              <div>
                <p className="lead">{t.contact.text}</p>
                <p className="contact-email">
                  <a href={`mailto:${links.email}`}>{links.email}</a>
                </p>
                <p className="contact-links">
                  <a href={links.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                  <a href={links.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </p>
                <p className="cv-links">
                  <span>{t.contact.cvTitle}:</span>
                  {(Object.keys(links.cv) as (keyof typeof links.cv)[]).map((k) => (
                    <a key={k} href={links.cv[k]} download>
                      {t.contact.cvLangs[k]}
                    </a>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © 2026 Tomás Aladjem Ramallo. {t.footer}
        </p>
      </footer>
    </>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="stack">
      {items.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ul>
  );
}
