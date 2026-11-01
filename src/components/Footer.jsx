import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { Link } from "react-router-dom"
import { address, email, nav, phones, whatsapp } from "../data/content"

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white">
      <div className="page-wrap grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="" className="h-14 w-14 rounded-full bg-white object-contain" />
            <div>
              <p className="text-lg font-extrabold">SSV Group</p>
              <p className="text-sm text-white/70">Diagnostic laboratory</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-white/75">
            SSV Diagnostic Pathology Laboratory in Chinchwad, with partner centres across the network.
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/book" className="hover:text-white">
                Book a test
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold">Call</p>
          <ul className="mt-4 space-y-2 text-sm">
            {phones.map((phone) => (
              <li key={phone.href}>
                <a href={phone.href} className="inline-flex items-center gap-2 text-white/80 hover:text-white">
                  <Phone size={15} />
                  {phone.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${email}`} className="inline-flex items-center gap-2 text-white/80 hover:text-white">
                <Mail size={15} />
                {email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold">Visit</p>
          <p className="mt-4 inline-flex gap-2 text-sm leading-6 text-white/80">
            <MapPin size={16} className="mt-1 shrink-0" />
            {address.line}
          </p>
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-gold mt-5"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="page-wrap flex flex-col gap-2 py-4 text-xs text-white/60 sm:flex-row sm:justify-between">
          <p>Copyright © {new Date().getFullYear()} SSV Group. All rights reserved.</p>
          <p>Enquiries on this site are confirmed by phone. This is not a medical diagnosis.</p>
        </div>
      </div>
    </footer>
  )
}
