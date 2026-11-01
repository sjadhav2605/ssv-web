import { useEffect } from "react"
import { Link } from "react-router-dom"
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
    <>
      <section className="bg-[linear-gradient(180deg,#ecfdf5_0%,#fff_70%)]">
        <div className="page-wrap grid items-center gap-8 py-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">Home sample collection</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-brand-950 sm:text-5xl">
              Give the sample at home. Skip the waiting room.
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
              SSV can collect samples at home. The team confirms your area, a time, and the charge before the visit.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn btn-brand" href={phones[0].href}>
                Call {phones[0].label}
              </a>
              <Link className="btn btn-ghost" to="/book?interest=Home%20collection">
                Request a visit
              </Link>
            </div>
          </div>
          <article className="card p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">Call the lab</p>
            <h2 className="mt-2 text-3xl font-extrabold">Three numbers, one desk</h2>
            <ul className="mt-4 space-y-2">
              {phones.map((phone) => (
                <li key={phone.href}>
                  <a className="text-lg font-extrabold text-brand-800" href={phone.href}>
                    {phone.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm font-bold text-muted">Home visit technician · {homeVisit.name}</p>
            <a className="mt-1 inline-block text-lg font-extrabold text-brand-800" href={homeVisit.href}>
              {homeVisit.phone}
            </a>
          </article>
        </div>
      </section>

      <section className="page-wrap grid gap-4 py-12 md:grid-cols-4">
        {steps.map((step, index) => (
          <article key={step.title} className="card p-5">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gold text-sm font-extrabold text-brand-950">0{index + 1}</span>
            <h2 className="mt-4 font-extrabold">{step.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
          </article>
        ))}
      </section>

      <section className="bg-brand-50 py-14">
        <div className="page-wrap">
          <h2 className="text-3xl font-extrabold">Often collected at home</h2>
          <p className="mt-2 max-w-2xl text-muted">These are on the published menu. Ask if a different test can be collected at your address.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {offered.map((test) => (
              <Link
                key={test.code}
                to={`/book?interest=Home%20collection&item=${encodeURIComponent(`${test.name} (${test.code})`)}`}
                className="card p-4"
              >
                <p className="font-extrabold">{test.name}</p>
                <p className="mt-1 text-sm text-muted">{test.category} · {test.code}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
