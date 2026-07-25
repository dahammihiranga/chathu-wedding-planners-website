type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto text-center"
      : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#a87868] md:text-sm">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-semibold leading-tight text-[#2f2927] md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-[#766d69] md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}