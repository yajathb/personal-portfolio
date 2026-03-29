import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center px-6">
      <section className="w-full max-w-2xl rounded-2xl border border-(--border-color) bg-(--surface) px-8 py-12 text-center shadow-[0_12px_36px_var(--card-shadow)] transition-colors">
        <h1 className="text-4xl font-bold text-foreground md:text-5xl">
          Oops, you went the wrong way
        </h1>
        <Link
          href="/"
          className="mt-5 inline-block text-xl font-semibold text-foreground/80 underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          Go back home
        </Link>
      </section>
    </main>
  );
}