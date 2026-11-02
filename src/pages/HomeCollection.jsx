import { useEffect } from "react"
import { Link } from "react-router-dom"
import AddButton from "../components/AddButton"
import Crumb from "../components/Crumb"
import { homeVisit, phones, tests } from "../data/content"

const steps = [
  { title: "Tell us the test and your area", text: "Call the lab or send a booking request with your locality." },
  { title: "We confirm the visit", text: "The team checks the slot, any fasting needed, and the charge before anyone travels." },
  { title: "Sample at your door", text: "Blood tests such as CBC, sugar, thyroid, lipid profile, and vitamins, plus ECG at home." },
  { title: "Report within 24 hours", text: "Routine reports are shared digitally. Special tests can take longer, and we say so when you book." },
]

export default function HomeCollection() {
  useEffect(() => {
    document.title = "Home Collection | SSV Group"
  }, [])

  const offered = tests.filter((test) => test.sample !== "Tissue" && test.sample !== "Smear").slice(0, 9)

  return (
    <div className="bg-white">
      <Crumb current="Home Collection" />
      <section className="page-wrap pb-8">
        <div className="overflow-hidden rounded-xl">
          <img src="/images/home-visit.jpg?v=2" alt="A phlebotomist collecting a blood sample" className="aspect-[3/2] w-full object-cover object-center" />
          <p className="bg-[#6eb744] py-3 text-center text-sm font-semibold text-white">
            Sample collection at your door, after the lab confirms the area and the charge
          </p>
        </div>
        <div className="mt-6 grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="text-4xl font-semibold text-[#273990]">Give the sample at home. Skip the waiting room.</h1>
            <p className="mt-3 max-w-xl text-lg leading-8 text-slate-600">
              SSV can collect samples at home. The team confirms your area, a time, and the charge before the visit.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="rounded-full bg-[#273990] px-5 py-3 text-sm font-semibold text-white" href={phones[0].href}>
                Call {phones[0].label}
              </a>
              <Link className="rounded-full border border-[#273990] px-5 py-3 text-sm font-semibold text-[#273990]" to="/book?interest=Home%20collection">
                Request a visit
              </Link>
            </div>
          </div>
          <article className="rounded-2xl border border-slate-200 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6eb744]">Call the lab</p>
            <h2 className="mt-2 text-2xl font-semibold text-[#273990]">Three numbers, one desk</h2>
            <ul className="mt-4 space-y-1">
              {phones.map((phone) => (
                <li key={phone.href}>
                  <a className="text-lg font-semibold text-[#273990]" href={phone.href}>
                    {phone.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-slate-200 pt-4">
              <p className="text-sm text-slate-500">Home visit technician · {homeVisit.name}</p>
              <a className="mt-1 inline-block text-lg font-semibold text-[#273990]" href={homeVisit.href}>
                {homeVisit.phone}
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="page-wrap grid gap-4 pb-14 md:grid-cols-4">
        {steps.map((step, index) => (
          <article key={step.title} className="rounded-2xl border border-slate-200 p-5">
            <p className="text-sm font-semibold text-[#6eb744]">0{index + 1}</p>
            <h2 className="mt-3 font-semibold text-[#273990]">{step.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
          </article>
        ))}
      </section>

      <section className="bg-[#f7f8fb] py-14">
        <div className="page-wrap">
          <h2 className="text-2xl font-semibold text-[#273990]">Often collected at home</h2>
          <p className="mt-2 max-w-2xl text-slate-600">These are on the published menu. Ask if a different test can be collected at your address.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {offered.map((test) => (
              <article key={test.code} className="rounded-2xl border border-slate-200 bg-white p-4">
                <Link to={`/diagnostics/${test.code}`} className="font-semibold text-[#273990]">{test.name}</Link>
                <p className="mt-1 text-sm text-slate-500">{test.category} · {test.code}</p>
                <div className="mt-4 flex items-center gap-3">
                  <AddButton code={test.code} />
                  <Link
                    to={`/book?interest=Home%20collection&item=${encodeURIComponent(`${test.name} (${test.code})`)}`}
                    className="text-sm font-semibold text-[#273990]"
                  >
                    At home
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
