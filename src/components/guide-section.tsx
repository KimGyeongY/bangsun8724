type Props = {
  heading: string;
  stepOne: string;
  stepTwo: string;
  stepThree: string;
  accent: string;
};

export function GuideSection({ heading, stepOne, stepTwo, stepThree, accent }: Props) {
  const steps = [stepOne, stepTwo, stepThree].filter(Boolean);
  if (steps.length === 0) return null;

  return (
    <section className="w-full max-w-4xl mx-auto px-4 pb-14">
      <h2 className="mb-5 text-lg font-bold">{heading}</h2>
      <ol className="grid gap-3 sm:grid-cols-3">
        {steps.map((s, i) => (
          <li
            key={i}
            className="rounded-xl border border-black/10 p-4 text-sm dark:border-white/15"
          >
            <span
              className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
              style={{ background: accent }}
            >
              {i + 1}
            </span>
            <p className="opacity-80">{s}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
