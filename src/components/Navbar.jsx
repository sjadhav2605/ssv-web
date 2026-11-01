import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { nav, phones } from "../data/content"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-40 border-b border-slate-300 bg-[#fbfaf6]">
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
          <a
            href={phones[0].href}
            aria-label={`Call ${phones[0].label}`}
            className="px-2 text-sm font-extrabold text-brand-900"
          >
            Call
          </a>
          <Link to="/book" className="hidden text-sm font-bold text-brand-900 sm:inline">
            Book a test
          </Link>
        </div>
      </div>

      {open && (
        <nav className="border-t border-slate-300 bg-[#fbfaf6] xl:hidden">
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
            <Link to="/book" className="btn btn-gold mt-2">
              Book a test
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
