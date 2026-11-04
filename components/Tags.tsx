import type { Tone } from "../data/work";

export default function Tags({ tags }: { tags: { label: string; tone: Tone }[] }) {
  return (
    <div className="tags">
      {tags.map((t) => (
        <span className={`tag tag-${t.tone}`} key={t.label}>
          {t.label}
        </span>
      ))}
    </div>
  );
}
