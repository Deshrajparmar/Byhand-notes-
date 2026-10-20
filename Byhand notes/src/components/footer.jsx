
import { Feather, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-[#E2DBCF] bg-[#F8F5EF] text-[#292820]">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">

        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex w-fit items-center gap-2">
              <Feather size={27} strokeWidth={1.6} />
              <span className="font-serif text-2xl font-semibold">
                Byhand Notes
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#716D63]">
              A little corner of the internet for honest thoughts,
              unfinished stories, and words that come from within.
            </p>

            <p className="mt-5 font-serif text-lg italic text-[#987C59]">
              Written by people. Felt by people.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#987C59]">
              Explore
            </h3>

            <ul className="space-y-3 text-sm text-[#716D63]">
              <li>
                <a href="/" className="transition hover:text-[#292820]">
                  Home
                </a>
              </li>
              <li>
                <a href="/blog" className="transition hover:text-[#292820]">
                  All stories
                </a>
              </li>
              <li>
                <a href="/write" className="transition hover:text-[#292820]">
                  Start writing
                </a>
              </li>
              <li>
                <a href="/about" className="transition hover:text-[#292820]">
                  About us
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#987C59]">
              Community
            </h3>

            <ul className="space-y-3 text-sm text-[#716D63]">
              <li>
                <a
                  href="/guidelines"
                  className="transition hover:text-[#292820]"
                >
                  Writing guidelines
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="transition hover:text-[#292820]"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="transition hover:text-[#292820]"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="transition hover:text-[#292820]"
                >
                  Terms of use
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Writing Invitation */}
        <div className="my-12 flex flex-col justify-between gap-5 rounded-2xl border border-[#E2DBCF] bg-[#F1ECE2] p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h3 className="font-serif text-2xl">
              Have something on your mind?
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#716D63]">
              Your story doesn't have to be extraordinary to matter.
            </p>
          </div>

          <a
            href="/write"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg bg-[#292820] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#454337]"
          >
            Write your first note
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-3 border-t border-[#E2DBCF] pt-6 text-xs text-[#817969] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Byhand Notes. Made with care.
          </p>

          <p className="font-serif text-sm italic">
            Take your time. Find your words.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
