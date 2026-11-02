import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { useCart } from "../cart"
import { nav, phones } from "../data/content"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { codes } = useCart()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <div className="page-wrap flex h-[4.25rem] items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="px-2 text-sm font-extrabold text-brand-900 xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="" className="h-11 w-11 rounded-full object-contain" />
            <span className="leading-tight">
              <span className="block text-[1.35rem] font-extrabold tracking-tight text-brand-900">
                SSV<span className="text-gold">Diagnostic</span>
              </span>
              <span className="block text-[11px] font-medium text-slate-500">Everything about your tests</span>
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-1 xl:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-semibold ${
                  isActive ? "text-brand-800" : "text-slate-600 hover:text-brand-800"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/cart"
            aria-label={codes.length ? `${codes.length} ${codes.length === 1 ? "test" : "tests"} selected` : "Selected tests"}
            className="relative grid h-10 w-10 place-items-center rounded-full bg-[#f3f4f6] text-[#273990]"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 7h12l-1 12H7L6 7z" />
              <path d="M9 7a3 3 0 0 1 6 0" />
            </svg>
            {codes.length > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-[#6eb744] px-1 text-[11px] font-bold text-white">
                {codes.length}
              </span>
            )}
          </Link>
          <a
            href={phones[0].href}
            aria-label={`Call ${phones[0].label}`}
            className="grid h-10 w-10 place-items-center rounded-full bg-[#f3f4f6] text-[#273990]"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M7 3h3l1.5 4-2 1.5a12 12 0 0 0 6 6L17 13l4 1.5V18a2 2 0 0 1-2 2A15 15 0 0 1 4 5a2 2 0 0 1 3-2z" />
            </svg>
          </a>
          <Link to="/book" className="hidden text-sm font-semibold text-[#273990] sm:inline">
            Book a test
          </Link>
        </div>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white xl:hidden">
          <div className="page-wrap flex flex-col gap-1 py-3">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `px-3 py-3 text-sm font-semibold ${isActive ? "bg-brand-50 text-brand-800" : "text-ink"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/cart" className="px-3 py-3 text-sm font-semibold text-ink">
              Selected tests{codes.length ? ` (${codes.length})` : ""}
            </Link>
            <Link to="/book" className="btn btn-gold mt-2">
              Book a test
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
