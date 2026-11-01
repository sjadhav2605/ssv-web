import { Mail, MapPin, Phone } from "lucide-react"
import { useEffect } from "react"
import BookingForm from "../components/BookingForm"
import { address, email, phones } from "../data/content"

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | SSV Group"
  }, [])

  return (
    <section className="page-wrap py-12">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">Contact</p>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-brand-950">We are a call away.</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">
        Test bookings, home collection, and centre timings. Use the form or call directly.
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <a href={`mailto:${email}`} className="card p-5">
          <Mail className="text-brand-700" />
          <p className="mt-3 text-sm font-bold text-muted">Email</p>
          <p className="mt-1 font-extrabold break-all">{email}</p>
        </a>
        <div className="card p-5">
          <Phone className="text-brand-700" />
          <p className="mt-3 text-sm font-bold text-muted">Phone</p>
          <ul className="mt-1 space-y-1">
            {phones.map((phone) => (
              <li key={phone.href}>
                <a href={phone.href} className="font-extrabold text-brand-800">
                  {phone.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="card p-5">
          <MapPin className="text-brand-700" />
          <p className="mt-3 text-sm font-bold text-muted">Address</p>
          <p className="mt-1 font-extrabold leading-6">{address.line}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <BookingForm />
        <div className="card overflow-hidden min-h-80">
          <iframe title="SSV Group on Google Maps" src={address.map} className="h-full min-h-80 w-full border-0" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
