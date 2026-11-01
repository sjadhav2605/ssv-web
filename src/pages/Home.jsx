import {
  Clock3,
  FlaskConical,
  Home as HomeIcon,
  MapPin,
  Search,
  ShieldCheck,
  Star,
} from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import CenterCard from "../components/CenterCard"
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
      <section className="bg-white">
        <div className="page-wrap py-6 sm:py-8">
          <form onSubmit={search} className="rounded-2xl border border-slate-200 bg-[#f7f8fb] p-3 sm:p-4">
            <p className="flex items-center gap-2 rounded-full bg-[#eef1ff] px-4 py-3 text-sm font-semibold text-brand-800">
              <MapPin size={16} />
              Chinchwad, Pune
            </p>
            <div className="mt-3 flex items-center rounded-xl border border-slate-200 bg-white px-4">
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="h-12 w-full bg-transparent text-sm outline-none"
                placeholder="Search for lab tests"
                aria-label="Search tests"
              />
              <button type="submit" aria-label="Search" className="text-brand-800">
                <Search size={20} />
              </button>
            </div>
          </form>

          <h1 className="mt-8 text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-brand-900 sm:text-5xl">
            Explore
            <span className="mt-1 block text-gold">our comprehensive</span>
            <span className="mt-1 block">diagnostic services</span>
          </h1>

          <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
            <span className="h-px flex-1 bg-slate-200" />
            <span>(OR) Browse for diagnostic services</span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="mt-5 flex gap-4 overflow-x-auto pb-2">
            {services.map((service, index) => {
              const Icon = serviceIcons[index]
              return (
                <Link
                  key={service.title}
                  to={service.to}
                  className="flex w-40 shrink-0 flex-col items-center rounded-2xl border border-slate-200 bg-white px-3 py-5"
                >
                  <span className={`grid h-16 w-16 place-items-center rounded-xl ${service.tone}`}>
                    <Icon size={28} />
                  </span>
                  <span className="mt-4 text-center text-sm font-bold text-brand-900">{service.title}</span>
                </Link>
              )
            })}
          </div>
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
            <img src="/images/samples.jpg" alt="Scientist preparing laboratory samples" className="h-56 w-full object-cover" />
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
            <img src="/images/collection.jpg" alt="Technician collecting a blood sample" className="h-56 w-full object-cover" />
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

      <section className="border-y border-slate-200 bg-white py-12">
        <div className="page-wrap grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["24 hrs", "Routine reports"],
            ["Home", "Sample pickup"],
            ["5", "Centre brands"],
            ["ISO", "9001:2015 certified"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-3xl font-extrabold text-brand-900">{value}</p>
              <p className="mt-1 text-sm font-semibold text-muted">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-wrap py-16">
        <h2 className="text-3xl font-extrabold tracking-tight text-brand-900">Why patients book SSV</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <article key={item.title} className="card p-5">
              <h3 className="font-extrabold text-brand-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
            </article>
          ))}
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
            <CenterCard key={center.name} center={center} />
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
