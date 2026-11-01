import { useEffect } from "react"
import BookingForm from "../components/BookingForm"
import { phones } from "../data/content"

export default function Book() {
  useEffect(() => {
    document.title = "Book a test | SSV Group"
  }, [])

  return (
    <section className="bg-[linear-gradient(180deg,#f6f3ff,#fff_240px)]">
      <div className="page-wrap grid gap-8 py-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">Booking</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-brand-950">Tell us what you need.</h1>
          <p className="mt-4 leading-7 text-muted">
            Use this for a lab test, a health profile, or home collection. Someone from SSV confirms the slot and the charge. Nothing is billed from this page.
          </p>
          <ul className="mt-6 space-y-3 text-sm font-semibold">
            {phones.map((phone) => (
              <li key={phone.href}>
                <a className="text-brand-800" href={phone.href}>
                  Call {phone.label}
                </a>
              </li>
            ))}
          </ul>
          <img src="/images/home.jpg" alt="A reassuring hand hold" className="mt-8 h-56 w-full rounded-[2rem] object-cover" />
        </div>
        <BookingForm />
      </div>
    </section>
  )
}
