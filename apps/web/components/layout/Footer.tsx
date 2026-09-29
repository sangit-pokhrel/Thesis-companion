import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-xl font-bold">Thesis Companion</h2>

          <p className="mt-4 max-w-sm text-sm leading-6 opacity-80">
            Professional thesis and research support for students and
            researchers.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Quick Links</h3>

          <div className="mt-4 flex flex-col gap-3 text-sm opacity-80">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Get in touch</h3>

          <p className="mt-4 text-sm leading-6 opacity-80">
            Have a research project or thesis requirement?
            <br />
            Let&apos;s discuss it.
          </p>

          <Link
            href="/contact"
            className="mt-5 inline-flex rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Thesis Companion. All rights reserved.
      </div>
    </footer>
  );
}