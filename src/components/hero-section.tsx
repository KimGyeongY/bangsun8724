import { ShieldCheck, Sparkles } from 'lucide-react';

type Props = {
  badge: string;
  title: string;
  subtitle: string;
  accent: string;
};

export function HeroSection({ badge, title, subtitle, accent }: Props) {
  return (
    <header className="w-full max-w-4xl mx-auto px-4 pt-16 pb-4 text-center">
      {badge && (
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
          style={{ background: accent + '1f', color: accent }}
        >
          <Sparkles className="h-3.5 w-3.5" aria-hidden />
          {badge}
        </span>
      )}
      <h1 className="mt-4 text-3xl font-bold leading-snug sm:text-4xl">{title}</h1>
      <p className="mx-auto mt-3 max-w-2xl text-base opacity-75">{subtitle}</p>
      <p className="mt-5 inline-flex items-center gap-2 rounded-lg bg-black/5 px-3 py-1.5 text-xs dark:bg-white/10">
        <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
        업로드 없음 · 설치 없음 · 브라우저 안에서 처리
      </p>
    </header>
  );
}
