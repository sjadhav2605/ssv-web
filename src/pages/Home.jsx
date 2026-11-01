import {
  BadgeCheck,
  Clock3,
  FlaskConical,
  Home as HomeIcon,
  Search,
  ShieldCheck,
  Star,
} from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Reveal from "../components/Reveal"
import { centers, conditions, faqs, highlights, reviews, services, steps, tests } from "../data/content"

const serviceIcons = [FlaskConical, HomeIcon, ShieldCheck, Clock3]

export default function Home() {
  const navigate = useNavigate()
  const [query, setQuery] = useState("")

  useEffect(() => {
    document.title = "SSV Diagnostic | Pathology Laboratory"
  }, [])
  const popular = tests.filter((test) =>
    ["HM012", "P059", "BC145", "BC003", "P044", "P042", "P026", "P049"].includes(test.code),
  )

  function search(event) {
    event.preventDefault()
    navigate(query.trim() ? `/diagnostics?q=${encodeURIComponent(query.trim())}` : "/diagnostics")
  }

  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#efe8ff_0%,_#ffffff_42%,_#fff8e4_100%)]">
        <div className="page-wrap grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-brand-700 shadow-sm">
              <BadgeCheck size={14} />
              ISO 9001:2015 · NABL accredited lab
            </p>
            <h1 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-950 sm:text-6xl">
              Accurate reports, from a lab you can call.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
              SSV Diagnostic Pathology Laboratory runs tests across Chinchwad and partner centres. Book a test, or ask for home sample collection.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/book" className="btn btn-gold">
                Book a test
              </Link>
              <Link to="/diagnostics" className="btn btn-ghost">
                View tests
              </Link>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-3 max-w-lg">
              {[
                ["24 hrs", "Routine reports"],
                ["Home", "Sample pickup"],
                ["5", "Centre brands"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-white/80 px-3 py-3 shadow-sm">
                  <dt className="text-xl font-extrabold text-brand-800">{value}</dt>
                  <dd className="text-xs font-medium text-muted">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <img
              src="/images/lab.jpg"
              alt="Clinical laboratory with automated analysers"
              className="h-72 w-full rounded-[2rem] object-cover shadow-[0_30px_80px_-40px_rgba(46,16,101,0.8)] sm:h-[420px]"
            />
            <form onSubmit={search} className="card relative z-10 mx-4 -mt-16 p-4 sm:mx-8 sm:p-5">
              <p className="text-sm font-extrabold text-brand-900">Search tests and profiles</p>
              <div className="mt-3 flex gap-2">
                <div className="relative flex-1">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    className="field pl-9"
                    placeholder="CBC, thyroid, HbA1c, dengue..."
                    aria-label="Search tests"
                  />
                </div>
                <button className="btn btn-brand shrink-0 px-4" type="submit">
                  Search
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["CBC", "Thyroid", "HbA1c", "Vitamin D"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => navigate(`/diagnostics?q=${encodeURIComponent(item)}`)}
                    className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-800"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="page-wrap -mt-2 pb-4">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = serviceIcons[index]
            return (
              <Link key={service.title} to={service.to} className="card flex items-start gap-3 p-4 transition hover:-translate-y-0.5">
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${service.tone}`}>
                  <Icon size={20} />
                </span>
                <span>
                  <span className="block font-extrabold">{service.title}</span>
                  <span className="mt-1 block text-sm leading-5 text-muted">{service.text}</span>
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="page-wrap py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">Browse the menu</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight">Tests people book most</h2>
          </div>
          <Link to="/diagnostics" className="text-sm font-bold text-brand-700">
            View all tests
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {popular.map((test) => (
            <article key={test.code} className="card flex flex-col p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-600">{test.category}</p>
              <h3 className="mt-2 text-lg font-extrabold leading-snug">{test.name}</h3>
              <p className="mt-2 text-sm text-muted">Sample: {test.sample}</p>
              <p className="mt-1 text-sm text-muted">Code {test.code}</p>
              <Link to={`/book?item=${encodeURIComponent(test.name)}&interest=Lab%20test`} className="btn btn-ghost mt-5">
                Enquire
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
          {conditions.map((condition) => (
            <Link
              key={condition}
              to={`/diagnostics?condition=${encodeURIComponent(condition)}`}
              className="shrink-0 rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-bold text-brand-800"
            >
              {condition}
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-brand-50 py-16">
        <div className="page-wrap grid gap-5 lg:grid-cols-2">
          <Reveal className="card overflow-hidden">
            <img src="/images/tubes.jpg" alt="Scientist preparing laboratory samples" className="h-56 w-full object-cover" />
            <div className="p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">Diagnostics</p>
              <h2 className="mt-2 text-3xl font-extrabold">SSV Diagnostic Pathology Laboratory</h2>
              <p className="mt-3 leading-7 text-muted">
                Accurate, timely reports across biochemistry, haematology, hormones, serology, molecular work, histopathology, and preventive profiles. Home collection is available on request.
              </p>
              <ul className="mt-4 grid gap-2 text-sm font-semibold sm:grid-cols-3">
                {["NABL accredited", "24-hour reports", "Home collection"].map((item) => (
                  <li key={item} className="rounded-2xl bg-brand-50 px-3 py-2 text-brand-800">
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/diagnostics" className="btn btn-brand mt-6">
                View lab services
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="card overflow-hidden">
            <img src="/images/home.jpg" alt="Care at home" className="h-56 w-full object-cover" />
            <div className="p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">Home collection</p>
              <h2 className="mt-2 text-3xl font-extrabold">Sample pickup at your door</h2>
              <p className="mt-3 leading-7 text-muted">
                Share your area and the test name. The team confirms whether a phlebotomist can visit, the time, any fasting advice, and the charge.
              </p>
              <ul className="mt-4 space-y-2 text-sm font-semibold text-brand-900">
                <li>• Blood and urine samples</li>
                <li>• Slot confirmed before the visit</li>
                <li>• Routine reports within 24 hours</li>
              </ul>
              <Link to="/home-collection" className="btn btn-gold mt-6">
                Request a home visit
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-wrap py-16">
        <h2 className="text-3xl font-extrabold tracking-tight">How an enquiry works</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step.title} className="card p-5">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gold text-sm font-extrabold text-brand-950">
                0{index + 1}
              </span>
              <h3 className="mt-4 font-extrabold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#171028] py-16 text-white">
        <div className="page-wrap">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Why SSV</p>
            <h2 className="mt-2 text-3xl font-extrabold">A lab that stays easy to reach</h2>
            <p className="mt-3 text-white/70">
              Book a centre visit or a home collection. The team confirms the test, the charge, and when the report will be ready.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-extrabold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-wrap py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">Network</p>
            <h2 className="mt-2 text-3xl font-extrabold">Diagnostic centres</h2>
          </div>
          <Link to="/diagnostics" className="text-sm font-bold text-brand-700">
            Lab details
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {centers.map((center) => (
            <article key={center.name} className="card overflow-hidden sm:flex">
              <img src={center.image} alt="" className="h-36 w-full bg-white object-contain sm:h-auto sm:w-56" />
              <div className="p-5">
                <h3 className="font-extrabold">{center.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{center.detail}</p>
                <a href={center.map} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-extrabold text-brand-700">
                  Directions
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand-50 py-16">
        <div className="page-wrap">
          <h2 className="text-3xl font-extrabold">What patients say</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {reviews.map((review) => (
              <blockquote key={review.name} className="card p-6">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-4 leading-7 text-ink/90">“{review.text}”</p>
                <footer className="mt-4 text-sm font-extrabold text-brand-800">{review.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="page-wrap py-16">
        <h2 className="text-3xl font-extrabold">Questions</h2>
        <div className="mt-5 divide-y divide-brand-100 rounded-3xl border border-brand-100 bg-white">
          {faqs.map((faq) => (
            <details key={faq.q} className="group px-5 py-4">
              <summary className="cursor-pointer list-none font-extrabold marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  {faq.q}
                  <span className="text-brand-600 group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="page-wrap pb-16">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-brand-800 to-brand-950 px-6 py-10 text-white sm:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-extrabold">Need a test?</h2>
              <p className="mt-2 max-w-xl text-white/75">
                Tell us the test and, if you want, the area for home collection. We call you back with the charge and the next step.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/book" className="btn btn-gold">
                Book now
              </Link>
              <Link to="/contact" className="btn bg-white text-brand-900">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
