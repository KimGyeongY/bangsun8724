export function FooterSection({ note }: { note: string }) {
  return (
    <footer className="w-full max-w-4xl mx-auto px-4 pb-14 text-center text-xs opacity-55">
      <p>{note}</p>
      <p className="mt-2">
        Built with{' '}
        <a
          href="https://linkmap.biz"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          Linkmap
        </a>
      </p>
    </footer>
  );
}
