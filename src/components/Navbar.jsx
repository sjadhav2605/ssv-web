import { Menu, Phone, X } from "lucide-react"
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
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <div className="page-wrap flex h-[4.25rem] items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-brand-900 xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
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
                `rounded-full px-3 py-2 text-sm font-semibold ${
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
            className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-brand-800"
          >
            <Phone size={18} />
          </a>
          <Link to="/book" className="hidden text-sm font-bold text-brand-900 sm:inline">
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
                  `rounded-xl px-3 py-3 text-sm font-semibold ${isActive ? "bg-brand-50 text-brand-800" : "text-ink"}`
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
