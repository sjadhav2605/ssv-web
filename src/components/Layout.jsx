import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { whatsapp } from "../data/content"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-[#f3f0e8] text-ink">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center bg-[#128C7E] text-sm font-extrabold text-white"
      >
        WA
      </a>
    </div>
  )
}
