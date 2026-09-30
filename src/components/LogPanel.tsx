import type { Content } from "@/content";

type Props = { label: string; lines: Content["hero"]["log"] };

export default function LogPanel({ label, lines }: Props) {
  return (
    <figure className="log" aria-label={label}>
      <div className="log-bar" aria-hidden="true">
        <span>tomas.log</span>
        <span className="log-live">tail -f</span>
      </div>
      <ol className="log-lines">
        {lines.map((line, i) => (
          <li
            key={line.date + line.text}
            className={`log-line ${line.level === "READY" ? "is-ready" : ""}`}
            style={{ animationDelay: `${300 + i * 420}ms` }}
          >
            <time className="log-date">{line.date}</time>
            <span className="log-level">{line.level}</span>
            <span className="log-text">
              {line.text}
              {line.level === "READY" && <span className="log-cursor" aria-hidden="true" />}
            </span>
          </li>
        ))}
      </ol>
    </figure>
  );
}
