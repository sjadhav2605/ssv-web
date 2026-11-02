import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import AddButton from "../components/AddButton"
import SearchField from "../components/SearchField"
import { address, centers, conditions, faqs, highlights, reviews, tests } from "../data/content"

const browse = [
  { title: "Lab Tests", to: "/diagnostics", icon: "tube" },
  { title: "Home Collection", to: "/home-collection", icon: "home" },
  { title: "Health Profiles", to: "/diagnostics?category=Profiles", icon: "file" },
  { title: "Book a test", to: "/book", icon: "calendar" },
]

function ServiceIcon({ name }) {
  const common = "h-14 w-14"
  if (name === "home") {
    return (
      <svg viewBox="0 0 64 64" className={common} aria-hidden="true">
        <path d="M10 30 L32 12 L54 30 V52 H40 V38 H24 V52 H10 Z" fill="#6eb744" />
        <path d="M28 52 V42 H36 V52" fill="#273990" />
      </svg>
    )
  }
  if (name === "file") {
    return (
      <svg viewBox="0 0 64 64" className={common} aria-hidden="true">
        <path d="M18 8 H38 L50 20 V56 H18 Z" fill="#e8eefc" stroke="#273990" strokeWidth="2" />
        <path d="M38 8 V20 H50" fill="none" stroke="#273990" strokeWidth="2" />
        <path d="M26 32 H42 M26 40 H42 M26 48 H36" stroke="#6eb744" strokeWidth="3" />
      </svg>
    )
  }
  if (name === "calendar") {
    return (
      <svg viewBox="0 0 64 64" className={common} aria-hidden="true">
        <rect x="10" y="14" width="44" height="40" rx="6" fill="#e8eefc" stroke="#273990" strokeWidth="2" />
        <path d="M10 26 H54" stroke="#273990" strokeWidth="2" />
        <path d="M22 10 V18 M42 10 V18" stroke="#6eb744" strokeWidth="3" />
        <circle cx="24" cy="38" r="3" fill="#6eb744" />
        <circle cx="32" cy="38" r="3" fill="#273990" />
        <circle cx="40" cy="38" r="3" fill="#6eb744" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 64 64" className={common} aria-hidden="true">
      <rect x="26" y="8" width="12" height="28" rx="6" fill="#e23b3b" />
      <path d="M26 28 H38 V40 C38 48 26 48 26 40 Z" fill="#c81e1e" />
      <path d="M30 18 H34 V26 H30 Z" fill="#fff" opacity="0.7" />
      <circle cx="44" cy="44" r="7" fill="#6eb744" />
    </svg>
  )
}

export default function Home() {
  const navigate = useNavigate()
  const [query, setQuery] = useState("")

  useEffect(() => {
    document.title = "SSV Diagnostic | Pathology Laboratory"
  }, [])

  const popular = tests.filter((test) =>
    ["HM012", "P059", "BC145", "BC003", "P044", "P042", "P026", "P049"].includes(test.code),
  )

  return (
    <div className="bg-white">
      <section>
        <div className="page-wrap py-6 sm:py-8">
          <div className="rounded-[28px] bg-[#f3f4f6] p-3 sm:p-4">
            <div className="flex items-center gap-3 rounded-full bg-[#ececec] px-5 py-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#273990] text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
                </svg>
              </span>
              <div className="min-w-0">
                <p className="font-semibold text-[#273990]">Chinchwad, Pune</p>
                <p className="truncate text-sm text-slate-500">{address.line}</p>
              </div>
            </div>
            <div className="mt-3">
              <SearchField
                variant="white"
                value={query}
                onChange={setQuery}
                onSubmit={(value) => navigate(value ? `/diagnostics?q=${encodeURIComponent(value)}` : "/diagnostics")}
              />
            </div>
          </div>

          <h1 className="mt-8 text-4xl font-medium uppercase leading-[1.05] tracking-tight text-[#273990] sm:text-5xl">
            Explore
            <span className="mt-1 block text-[#6eb744]">our comprehensive</span>
            <span className="mt-1 block">diagnostic services</span>
          </h1>

          <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
            <span className="h-px flex-1 bg-slate-300" />
            <span>(OR) Browse for diagnostic services</span>
            <span className="h-px flex-1 bg-slate-300" />
          </div>

          <div className="mt-5 flex items-end justify-between gap-4">
            <div className="flex gap-4 overflow-x-auto pb-2">
              {browse.map((item) => (
                <Link
                  key={item.title}
                  to={item.to}
                  className="flex w-40 shrink-0 flex-col items-center rounded-2xl border border-slate-200 bg-white px-4 py-6 text-center shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
                >
                  <ServiceIcon name={item.icon} />
                  <span className="mt-4 text-sm font-semibold text-[#273990]">{item.title}</span>
                </Link>
              ))}
            </div>
            <Link to="/diagnostics" className="hidden shrink-0 pb-4 text-sm font-semibold text-[#273990] sm:inline">
              View all
            </Link>
          </div>
        </div>
      </section>

      <section className="page-wrap grid gap-4 pb-10 md:grid-cols-2">
        <Link to="/diagnostics" className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <img src="/images/lab.jpg" alt="The pathology laboratory" className="aspect-[3/2] w-full object-cover object-center" />
          <div className="p-5">
            <p className="text-lg font-semibold text-[#273990]">Unable to find the test you are looking for?</p>
            <p className="mt-2 text-sm font-semibold text-[#6eb744]">Browse all tests here</p>
          </div>
        </Link>
        <Link to="/home-collection" className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <img src="/images/home-visit.jpg?v=2" alt="A phlebotomist collecting a blood sample" className="aspect-[3/2] w-full object-cover object-center" />
          <div className="p-5">
            <p className="text-lg font-semibold text-[#273990]">Need the sample collected at home?</p>
            <p className="mt-2 text-sm font-semibold text-[#6eb744]">Request a home visit</p>
          </div>
        </Link>
      </section>

      <section className="page-wrap pb-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold text-[#273990]">Browse by condition</h2>
          <Link to="/diagnostics" className="text-sm font-semibold text-[#273990]">
            View all
          </Link>
        </div>
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
          {conditions.map((condition) => (
            <Link
              key={condition}
              to={`/diagnostics?condition=${encodeURIComponent(condition)}`}
              className="shrink-0 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-[#273990]"
            >
              {condition}
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#f7f8fb] py-12">
        <div className="page-wrap">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold text-[#273990]">Tests people book most</h2>
            <Link to="/diagnostics" className="text-sm font-semibold text-[#273990]">
              View all
            </Link>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {popular.map((test) => (
              <article key={test.code} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#6eb744]">{test.category}</p>
                <h3 className="mt-2 font-semibold leading-snug text-[#273990]">
                  <Link to={`/diagnostics/${test.code}`}>{test.name}</Link>
                </h3>
                <p className="mt-2 text-sm text-slate-500">Sample: {test.sample}</p>
                <p className="mt-1 text-sm text-slate-500">Code {test.code}</p>
                <div className="mt-5 flex items-center gap-3">
                  <AddButton code={test.code} />
                  <Link to={`/diagnostics/${test.code}`} className="text-sm font-semibold text-[#273990]">More info</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-wrap grid items-center gap-8 py-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#6eb744]">About</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#273990]">SSV Diagnostic Pathology Laboratory</h2>
          <p className="mt-3 max-w-xl leading-7 text-slate-600">
            Routine and specialised tests from the Chinchwad laboratory, with home sample collection and partner centres in the SSV network.
          </p>
          <ul className="mt-5 space-y-2">
            {highlights.map((item) => (
              <li key={item.title} className="text-sm leading-6 text-slate-600">
                <span className="font-semibold text-[#273990]">{item.title}. </span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            ["24 hrs", "Routine reports"],
            ["Home", "Sample pickup"],
            [String(centers.length), "Partner centres"],
            ["ISO", "9001:2015 certified"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-[#f7f8fb] p-5">
              <p className="text-3xl font-semibold text-[#273990]">{value}</p>
              <p className="mt-1 text-sm text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f7f8fb] py-14">
        <div className="page-wrap">
          <h2 className="text-2xl font-semibold text-[#273990]">What patients say</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {reviews.map((review) => (
              <blockquote key={review.name} className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="leading-7 text-slate-700">“{review.text}”</p>
                <footer className="mt-4 text-sm font-semibold text-[#273990]">{review.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="page-wrap py-14">
        <h2 className="text-2xl font-semibold text-[#273990]">Questions</h2>
        <div className="mt-5 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((faq) => (
            <details key={faq.q} className="group px-5 py-4">
              <summary className="cursor-pointer list-none font-semibold text-[#273990] marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  {faq.q}
                  <span className="text-[#6eb744] group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="page-wrap pb-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#273990] px-6 py-10 text-white sm:px-10 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold">Need a test?</h2>
            <p className="mt-2 max-w-xl text-white/80">
              Tell us the test and, if you want, the area for home collection. We call you back with the charge and the next step.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/book" className="btn bg-[#6eb744] text-white">
              Book now
            </Link>
            <Link to="/contact" className="btn bg-white text-[#273990]">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}



