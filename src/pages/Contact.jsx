import { useEffect } from "react"
import BookingForm from "../components/BookingForm"
import Crumb from "../components/Crumb"
import { address, email, phones, whatsapp } from "../data/content"

const directions = "https://maps.app.goo.gl/Dw2bBqCbYn5rhy2L6"

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | SSV Group"
  }, [])

  return (
    <div className="bg-white">
      <Crumb current="Contact" />
      <section>
        <div className="page-wrap grid items-center gap-8 pb-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">Contact</p>
            <h1 className="mt-2 text-4xl font-semibold text-[#273990]">We are a call away.</h1>
            <p className="mt-3 max-w-xl text-lg leading-8 text-muted">
              Test bookings, home collection, and centre timings. Call, send a WhatsApp message, or leave an enquiry.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn btn-brand" href={phones[0].href}>
                Call {phones[0].label}
              </a>
              <a className="btn btn-gold" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>

          <figure className="overflow-hidden rounded-2xl border border-slate-200">
            <img src="/centers/ssv.jpg" alt="SSV Pathology and Diagnostic Center" className="h-52 w-full object-cover" />
            <figcaption className="bg-[#273990] px-5 py-4 text-white">
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
        <dl className="grid overflow-hidden rounded-2xl border border-slate-200 md:grid-cols-3">
          <div className="border-b border-slate-300 p-5 md:border-r md:border-b-0">
            <dt className="text-sm font-bold text-muted">Email</dt>
            <dd className="mt-1 font-extrabold leading-6 break-all">
              <a href={`mailto:${email}`}>{email}</a>
            </dd>
          </div>
          <div className="border-b border-slate-300 p-5 md:border-r md:border-b-0">
            <dt className="text-sm font-bold text-muted">Phone</dt>
            <dd className="mt-1 space-y-1">
              {phones.map((phone) => (
                <a key={phone.href} href={phone.href} className="block font-extrabold text-brand-800">
                  {phone.label}
                </a>
              ))}
            </dd>
          </div>
          <div className="p-5">
            <dt className="text-sm font-bold text-muted">Address</dt>
            <dd className="mt-1 font-extrabold leading-6">
              <a href={directions} target="_blank" rel="noreferrer">
                {address.line}
              </a>
            </dd>
          </div>
        </dl>

        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2">
          <BookingForm className="h-full" />
          <div className="flex min-h-80 flex-col overflow-hidden rounded-2xl border border-slate-200">
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
    </div>
  )
}
