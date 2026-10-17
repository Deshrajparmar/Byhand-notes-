
import { useState } from "react";
import { Feather, Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  const links = [
    { name: "Home", href: "/" },
   
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav
      className={`border-b transition-colors duration-300 ${
        darkMode
          ? "bg-[#0b0b0b] text-white border-white/10"
          : "bg-white text-neutral-900 border-neutral-200"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <Feather size={32} strokeWidth={1.8} />
          <span className="text-xl font-bold tracking-tight">
            Byhand Notes
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium transition-opacity hover:opacity-60"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="/login"
            className={`rounded-xl border px-5 py-3 text-sm font-medium ${
              darkMode
                ? "border-white/15 hover:bg-white/10"
                : "border-neutral-300 hover:bg-neutral-100"
            }`}
          >
            Sign In
          </a>

          <a
            href="/signup"
            className={`rounded-xl px-5 py-3 text-sm font-medium ${
              darkMode
                ? "bg-white text-black hover:bg-neutral-200"
                : "bg-neutral-900 text-white hover:bg-neutral-700"
            }`}
          >
            Sign Up
          </a>

        
        </div>

       
      </div>

      {mobileMenu && (
        <div className="flex flex-col gap-5 border-t border-white/10 px-6 py-5 md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenu(false)}
              className="text-sm font-medium"
            >
              {link.name}
            </a>
          ))}

          <div className="flex gap-3">
            <a
              href="/login"
              className="flex-1 rounded-lg border border-current px-4 py-3 text-center text-sm"
            >
              Sign In
            </a>
            <a
              href="/signup"
              className="flex-1 rounded-lg bg-white px-4 py-3 text-center text-sm text-black"
            >
              Sign Up
            </a>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-2 text-sm"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            Switch theme
          </button>
        </div>
      )}
    </nav>
  );
}
