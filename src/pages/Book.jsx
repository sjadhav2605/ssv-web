import { useEffect } from "react"
import BookingForm from "../components/BookingForm"
import Crumb from "../components/Crumb"
import { phones } from "../data/content"

export default function Book() {
  useEffect(() => {
    document.title = "Book a test | SSV Group"
  }, [])

  return (
    <div className="bg-white">
      <Crumb current="Book a test" />
      <section>
        <div className="page-wrap grid gap-8 pb-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h1 className="text-4xl font-semibold text-[#273990]">Tell us what you need.</h1>
            <p className="mt-4 leading-7 text-slate-600">
              Use this for a lab test, a health profile, or home collection. Someone from SSV confirms the slot and the charge. Nothing is billed from this page.
            </p>
            <ul className="mt-6 space-y-2">
              {phones.map((phone) => (
                <li key={phone.href}>
                  <a className="font-semibold text-[#273990]" href={phone.href}>
                    Call {phone.label}
                  </a>
                </li>
              ))}
            </ul>
            <img src="/images/book-lab.jpg?v=2" alt="Laboratory glassware" className="mt-8 aspect-[626/351] w-full rounded-xl object-cover" />
          </div>
          <BookingForm />
        </div>
      </section>
    </div>
  )
}
