import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="font-serif text-8xl md:text-9xl font-medium text-[var(--color-sage)]">
          404
        </h1>
        <h2 className="font-serif text-3xl md:text-4xl font-medium mt-6">
          Page Not Found
        </h2>
        <p className="mt-4 text-[var(--color-soft-black)]/70 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-[var(--color-soft-black)] text-[var(--color-cream)] rounded-full font-medium hover:bg-[var(--color-sage)] transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/showroom"
            className="px-8 py-3 border border-[var(--color-soft-black)] rounded-full font-medium hover:bg-[var(--color-soft-black)] hover:text-[var(--color-cream)] transition-colors"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
