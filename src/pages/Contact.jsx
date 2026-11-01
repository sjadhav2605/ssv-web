import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { useEffect } from "react"
import BookingForm from "../components/BookingForm"
import { address, email, phones, whatsapp } from "../data/content"

const directions = "https://maps.app.goo.gl/Dw2bBqCbYn5rhy2L6"

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | SSV Group"
  }, [])

  return (
    <>
      <section className="bg-[#f6f8fc]">
        <div className="page-wrap grid items-center gap-8 py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">Contact</p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-brand-950 sm:text-5xl">We are a call away.</h1>
            <p className="mt-3 max-w-xl text-lg leading-8 text-muted">
              Test bookings, home collection, and centre timings. Call, send a WhatsApp message, or leave an enquiry.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn btn-brand" href={phones[0].href}>
                <Phone size={16} />
                Call {phones[0].label}
              </a>
              <a className="btn btn-gold" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>

          <figure className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white">
            <img src="/centers/ssv.jpg" alt="SSV Pathology and Diagnostic Center" className="h-52 w-full object-contain" />
            <figcaption className="bg-[#122a66] px-5 py-4 text-white">
              <p className="font-extrabold">SSV Pathology & Diagnostic Center</p>
              <p className="mt-1 text-sm leading-6 text-white/80">{address.line}</p>
              <a href={directions} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm font-extrabold underline">
                Directions
              </a>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="page-wrap py-10">
        <div className="grid gap-4 md:grid-cols-3">
          <a href={`mailto:${email}`} className="card flex h-full flex-col p-5">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eef6ec] text-[#2f8d22]">
              <Mail size={20} />
            </span>
            <p className="mt-4 text-sm font-bold text-muted">Email</p>
            <p className="mt-1 font-extrabold leading-6 break-all text-brand-950">{email}</p>
          </a>
          <div className="card flex h-full flex-col p-5">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eef1ff] text-brand-800">
              <Phone size={20} />
            </span>
            <p className="mt-4 text-sm font-bold text-muted">Phone</p>
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
          <a href={directions} target="_blank" rel="noreferrer" className="card flex h-full flex-col p-5">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eef1ff] text-brand-800">
              <MapPin size={20} />
            </span>
            <p className="mt-4 text-sm font-bold text-muted">Address</p>
            <p className="mt-1 font-extrabold leading-6 text-brand-950">{address.line}</p>
          </a>
        </div>

        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2">
          <BookingForm className="h-full" />
          <div className="card flex min-h-80 flex-col overflow-hidden">
            <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-5 py-4">
              <div>
                <p className="text-sm font-bold text-muted">Visit the centre</p>
                <p className="font-extrabold text-brand-950">Sneha Sadan, Chinchwad</p>
              </div>
              <a href={directions} target="_blank" rel="noreferrer" className="btn btn-ghost shrink-0 px-4 py-2 text-sm">
                Directions
              </a>
            </div>
            <iframe
              title="SSV Group on Google Maps"
              src={address.map}
              className="min-h-80 w-full flex-1 border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  )
}
