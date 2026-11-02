import { Link } from "react-router-dom"
import { address, email, nav, phones, whatsapp } from "../data/content"

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-[#202020]">
      <div className="page-wrap grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="" className="h-14 w-14 rounded-full object-contain" />
            <div>
              <p className="text-lg font-extrabold">SSV Group</p>
              <p className="text-sm text-slate-500">Diagnostic laboratory</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            SSV Diagnostic Pathology Laboratory in Chinchwad, with partner centres across the network.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-[#273990]">Our services</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-[#273990]">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/book" className="hover:text-[#273990]">
                Book a test
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-[#273990]">Call</p>
          <ul className="mt-4 space-y-2 text-sm">
            {phones.map((phone) => (
              <li key={phone.href}>
                <a href={phone.href} className="text-slate-600 hover:text-[#273990]">
                  {phone.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${email}`} className="text-slate-600 hover:text-[#273990]">
                {email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-[#273990]">Visit</p>
          <p className="mt-4 text-sm leading-6 text-slate-600">{address.line}</p>
          <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-gold mt-5">
            WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="page-wrap flex flex-col gap-2 py-4 text-xs text-slate-500 sm:flex-row sm:justify-between">
          <p>Copyright © {new Date().getFullYear()} SSV Group. All rights reserved.</p>
          <p className="flex gap-4">
            <Link to="/terms" className="hover:text-[#273990]">Terms</Link>
            <Link to="/privacy" className="hover:text-[#273990]">Privacy</Link>
            <span>Enquiries on this site are confirmed by phone. This is not a medical diagnosis.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
