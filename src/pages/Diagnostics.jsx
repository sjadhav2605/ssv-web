import { Link, useSearchParams } from "react-router-dom"
import CenterCard from "../components/CenterCard"
import { useEffect, useMemo, useState } from "react"
import { categories, centers, conditions, faqs, phones, tests, whatsapp } from "../data/content"

export default function Diagnostics() {
  const [params, setParams] = useSearchParams()
  const [draft, setDraft] = useState(params.get("q") || "")
  const query = params.get("q") || ""
  const category = params.get("category") || "All"
  const condition = params.get("condition") || ""

  useEffect(() => {
    document.title = "Diagnostic Lab | SSV Group"
    setDraft(query)
  }, [query])

  const visible = useMemo(() => {
    return tests.filter((test) => {
      const haystack = `${test.name} ${test.code} ${test.category} ${(test.tags || []).join(" ")} ${test.includes || ""}`.toLowerCase()
      const matchesQuery = !query || haystack.includes(query.toLowerCase())
      const matchesCategory = category === "All" || test.category === category
      const matchesCondition = !condition || (test.tags || []).includes(condition)
      return matchesQuery && matchesCategory && matchesCondition
    })
  }, [query, category, condition])

  function update(next) {
    const fresh = new URLSearchParams(params)
    Object.entries(next).forEach(([key, value]) => {
      if (value) fresh.set(key, value)
      else fresh.delete(key)
    })
    setParams(fresh)
  }

  return (
    <>
      <section>
        <div className="page-wrap grid items-center gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">SSV Diagnostic Pathology Laboratory</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-brand-950 sm:text-5xl">
              Book a test. Get a clear report.
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
              Biochemistry, haematology, hormones, infection screens, histopathology, and preventive profiles. This is a selection from the laboratory menu. If your test is missing, call and we will check it.
            </p>
          </div>
          <img src="/images/lab-hero.jpg" alt="Microscope and sample tubes in the laboratory" className="h-72 w-full object-cover object-center" />
        </div>
      </section>

      <section className="page-wrap pb-10">
        <h2 className="text-3xl font-extrabold">Blood tests at the laboratory</h2>
        <p className="mt-3 max-w-3xl text-lg leading-8 text-muted">
          Samples are analysed for routine checks, hormones, infection screens, and health profiles. Most routine reports are shared within 24 hours. Special tests take longer, and the charge is confirmed before you book.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Centres", "Chinchwad, plus Rainbow, Isha, Mayraa, and Samarth in the SSV network."],
            ["Routine reports", "Most routine blood reports are shared within 24 hours."],
            ["Simple booking", "Call or WhatsApp the test name. We confirm the slot and the charge."],
            ["Home collection", "Ask for a pickup. We confirm the area and the time before anyone visits."],
          ].map(([title, text]) => (
            <article key={title} className="card p-5">
              <h3 className="text-lg font-extrabold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {tests
            .filter((test) => ["P041", "BC003", "BC269"].includes(test.code))
            .map((test) => (
              <article key={test.code} className="card flex flex-col p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-600">{test.code}</p>
                <h3 className="mt-2 text-xl font-extrabold">{test.name}</h3>
                <p className="mt-2 text-sm text-muted">Sample: {test.sample}</p>
                <Link
                  to={`/book?item=${encodeURIComponent(`${test.name} (${test.code})`)}&interest=Lab%20test`}
                  className="btn btn-brand mt-5"
                >
                  Book this test
                </Link>
              </article>
            ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={phones[0].href} className="btn btn-gold">
            Call {phones[0].label}
          </a>
          <a href={`https://wa.me/${whatsapp}`} className="btn btn-ghost" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
        <div className="mt-8 divide-y divide-slate-300 border border-slate-300 bg-[#fbfaf6]">
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
        <form
          className="card p-4"
          onSubmit={(event) => {
            event.preventDefault()
            update({ q: draft.trim() })
          }}
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              className="field"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Search by test name, code, or condition"
              aria-label="Search tests"
            />
            <button className="btn btn-brand" type="submit">
              Search
            </button>
          </div>
          <div className="mt-3 flex gap-2 overflow-x-auto">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => update({ category: item === "All" ? "" : item })}
                className={`shrink-0 px-3 py-1.5 text-sm font-bold ${
                  category === item ? "bg-brand-800 text-white" : "bg-brand-50 text-brand-800"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <button type="button" onClick={() => update({ condition: "" })} className={`px-3 py-1 text-xs font-bold ${condition ? "bg-[#e7e2d6]" : "bg-gold text-white"}`}>
              All conditions
            </button>
            {conditions.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => update({ condition: item })}
                className={`px-3 py-1 text-xs font-bold ${condition === item ? "bg-gold text-white" : "bg-[#e7e2d6] text-ink"}`}
              >
                {item}
              </button>
            ))}
          </div>
        </form>

        <p className="mt-5 text-sm font-semibold text-muted">{visible.length} tests shown · charges confirmed on call</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {visible.map((test) => (
            <article key={test.code} className="card flex flex-col p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-600">
                  {test.category} · {test.code}
                </p>
                <h2 className="mt-1 text-lg font-extrabold">{test.name}</h2>
                <p className="mt-1 text-sm text-muted">Sample: {test.sample}</p>
                {test.includes && <p className="mt-2 text-sm leading-6 text-muted">Includes {test.includes}.</p>}
              </div>
              <Link
                to={`/book?item=${encodeURIComponent(`${test.name} (${test.code})`)}&interest=${encodeURIComponent(test.category === "Profiles" ? "Health profile" : "Lab test")}`}
                className="btn btn-gold mt-4 shrink-0 sm:mt-0"
              >
                Book
              </Link>
            </article>
          ))}
        </div>
        {visible.length === 0 && (
          <div className="card mt-4 p-8 text-center">
            <p className="font-extrabold">That test is not in this shortlist.</p>
            <p className="mt-2 text-sm text-muted">Send the name anyway. The lab will tell you if it is available.</p>
            <Link to={`/book?item=${encodeURIComponent(query)}`} className="btn btn-brand mt-4">
              Ask about “{query || "a test"}”
            </Link>
          </div>
        )}

        <div className="mt-12 grid gap-4 bg-brand-900 p-6 text-white md:grid-cols-[1.2fr_0.8fr] md:p-8">
          <div>
            <h2 className="text-3xl font-extrabold">Home sample collection</h2>
            <p className="mt-3 max-w-xl leading-7 text-white/75">
              Share your area and the test name. The team confirms whether a phlebotomist can visit, the time window, any fasting advice, and the charge.
            </p>
          </div>
          <div className="flex items-end">
            <Link to="/home-collection" className="btn btn-gold">
              Home collection details
            </Link>
          </div>
        </div>

        <h2 className="mt-14 text-3xl font-extrabold">Our centres</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {centers.map((center) => (
            <CenterCard key={center.name} center={center} />
          ))}
        </div>
      </section>
    </>
  )
}
