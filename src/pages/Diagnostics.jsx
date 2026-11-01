import { Link, useSearchParams } from "react-router-dom"
import { useEffect, useMemo, useState } from "react"
import { categories, centers, conditions, tests } from "../data/content"

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
      <section className="bg-[linear-gradient(180deg,#f6f3ff_0%,#fff_100%)]">
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
          <img src="/images/tubes.jpg" alt="Laboratory sample preparation" className="h-72 w-full rounded-[2rem] object-cover" />
        </div>
      </section>

      <section className="page-wrap pb-16">
        <form
          className="card sticky top-[6.4rem] z-20 p-4"
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
                className={`shrink-0 rounded-full px-3 py-1.5 text-sm font-bold ${
                  category === item ? "bg-brand-800 text-white" : "bg-brand-50 text-brand-800"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <button type="button" onClick={() => update({ condition: "" })} className={`rounded-full px-3 py-1 text-xs font-bold ${condition ? "bg-slate-100" : "bg-gold text-brand-950"}`}>
              All conditions
            </button>
            {conditions.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => update({ condition: item })}
                className={`rounded-full px-3 py-1 text-xs font-bold ${condition === item ? "bg-gold text-brand-950" : "bg-slate-100 text-ink"}`}
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

        <div className="mt-12 grid gap-4 rounded-[2rem] bg-brand-950 p-6 text-white md:grid-cols-[1.2fr_0.8fr] md:p-8">
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
            <article key={center.name} className="card overflow-hidden">
              <img src={center.image} alt="" className="h-40 w-full bg-white object-contain" />
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
    </>
  )
}
