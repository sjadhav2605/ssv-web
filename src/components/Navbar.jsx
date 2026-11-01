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
    <header className="sticky top-0 z-40">
      <div className="bg-brand-950 text-white">
        <div className="page-wrap flex items-center justify-between gap-4 py-2 text-xs sm:text-sm">
          <p className="truncate text-white/80">Chinchwad, Pune · Diagnostic pathology laboratory</p>
          <a href={phones[0].href} className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-gold">
            <Phone size={14} />
            {phones[0].label}
          </a>
        </div>
      </div>

      <div className="border-b border-brand-100 bg-white/95 backdrop-blur">
        <div className="page-wrap flex h-[4.5rem] items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="SSV Group" className="h-12 w-12 rounded-full bg-white object-contain" />
            <span className="leading-tight">
              <span className="block text-lg font-extrabold tracking-tight text-brand-900">SSV Group</span>
              <span className="block text-xs font-medium text-muted">Diagnostic Laboratory</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `rounded-full px-3.5 py-2 text-sm font-semibold ${
                    isActive ? "bg-brand-50 text-brand-800" : "text-ink/80 hover:bg-brand-50 hover:text-brand-800"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/book" className="btn btn-gold hidden sm:inline-flex">
              Book a test
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-100 xl:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-brand-100 bg-white xl:hidden">
            <nav className="page-wrap flex flex-col gap-1 py-3">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-semibold ${isActive ? "bg-brand-50 text-brand-800" : "text-ink"}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link to="/book" className="btn btn-gold mt-2">
                Book a test
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
