import { Link, useSearchParams } from "react-router-dom"
import AddButton from "../components/AddButton"
import Crumb from "../components/Crumb"
import SearchField from "../components/SearchField"
import { useEffect, useMemo, useState } from "react"
import { categories, conditions, faqs, phones, tests } from "../data/content"

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

  function showMenu(next) {
    update(next)
    document.getElementById("test-menu")?.scrollIntoView({ behavior: "smooth" })
  }

  const profiles = tests.filter((test) => test.category === "Profiles").slice(0, 4)
  const popular = tests.filter((test) =>
    ["HM012", "P059", "BC145", "P044", "P042", "BC003"].includes(test.code),
  )

  return (
    <div className="bg-white">
      <Crumb current="Lab Tests" />
      <section className="page-wrap pb-6">
        <SearchField
          value={draft}
          onChange={(value) => {
            setDraft(value)
            update({ q: value.trim() })
          }}
          onSubmit={(value) => update({ q: value })}
        />

        <Link to="/diagnostics?category=Profiles" className="relative mt-4 block overflow-hidden rounded-xl">
          <img src="/images/profiles-banner.jpg" alt="A scientist at the laboratory bench" className="aspect-video w-full object-cover object-center" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="absolute inset-y-0 left-0 flex max-w-md flex-col justify-center px-6 pb-10 sm:px-10">
            <p className="text-3xl font-semibold uppercase leading-tight text-[#273990]">Health profiles at the lab</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">Fever, thyroid, diabetes, liver, and kidney checks. The charge is confirmed when you call.</p>
          </div>
          <p className="absolute inset-x-0 bottom-0 bg-[#6eb744] py-3 text-center text-sm font-semibold text-white">
            Ask about a health profile
          </p>
        </Link>
      </section>

      <section className="page-wrap pb-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold text-[#273990]">Popular health profiles</h2>
          <button type="button" onClick={() => showMenu({ category: "Profiles", q: "" })} className="text-sm font-semibold text-[#273990]">
            View all
          </button>
        </div>
        <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
          {profiles.map((test) => (
            <article key={test.code} className="flex w-64 shrink-0 flex-col rounded-2xl border border-slate-200 bg-white p-4">
              <Link to={`/diagnostics/${test.code}`} className="font-semibold text-[#273990]">{test.name}</Link>
              <p className="mt-2 text-sm text-slate-500">Sample: {test.sample}</p>
              <p className="mt-1 text-sm text-slate-500">Code {test.code}</p>
              <p className="mt-3 text-sm font-semibold text-[#6eb744]">Charge confirmed on call</p>
              <div className="mt-4 flex items-center gap-3">
                <AddButton code={test.code} />
                <Link to={`/diagnostics/${test.code}`} className="text-sm font-semibold text-[#273990]">More info</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-wrap pb-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold text-[#273990]">Popular health tests</h2>
          <button type="button" onClick={() => showMenu({ category: "", q: "" })} className="text-sm font-semibold text-[#273990]">
            View all
          </button>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {popular.map((test) => (
            <article key={test.code} className="rounded-2xl border border-slate-200 bg-white p-5">
              <Link to={`/diagnostics/${test.code}`} className="text-lg font-semibold text-[#273990]">{test.name}</Link>
              <p className="mt-2 text-sm leading-6 text-slate-600">Sample: {test.sample}. Code {test.code}.</p>
              <p className="mt-3 text-sm font-semibold text-[#6eb744]">Charge confirmed on call</p>
              <div className="mt-4 flex items-center gap-3">
                <AddButton code={test.code} />
                <Link to={`/diagnostics/${test.code}`} className="text-sm font-semibold text-[#273990]">More info</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="test-menu" className="page-wrap scroll-mt-24 pb-16">
        <form
          onSubmit={(event) => {
            event.preventDefault()
            update({ q: draft.trim() })
          }}
        >
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => update({ category: item === "All" ? "" : item })}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${
                  category === item ? "bg-[#273990] text-white" : "bg-[#f3f4f6] text-[#273990]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <button type="button" onClick={() => update({ condition: "" })} className={`rounded-full px-3 py-1 text-xs font-semibold ${condition ? "bg-[#f3f4f6] text-[#273990]" : "bg-[#6eb744] text-white"}`}>
              All conditions
            </button>
            {conditions.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => update({ condition: item })}
                className={`rounded-full px-3 py-1 text-xs font-semibold ${condition === item ? "bg-[#6eb744] text-white" : "bg-[#f3f4f6] text-[#273990]"}`}
              >
                {item}
              </button>
            ))}
          </div>
        </form>

        <p className="mt-5 text-sm font-semibold text-muted">{visible.length} tests shown · charges confirmed on call</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {visible.map((test) => (
            <article key={test.code} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#6eb744]">
                  {test.category} · {test.code}
                </p>
                <h2 className="mt-1 text-lg font-semibold text-[#273990]">
                  <Link to={`/diagnostics/${test.code}`}>{test.name}</Link>
                </h2>
                <p className="mt-1 text-sm text-slate-500">Sample: {test.sample}</p>
                {test.includes && <p className="mt-2 text-sm leading-6 text-slate-600">Includes {test.includes}.</p>}
              </div>
              <div className="mt-4 flex shrink-0 items-center gap-3 sm:mt-0">
                <AddButton code={test.code} />
                <Link to={`/diagnostics/${test.code}`} className="text-sm font-semibold text-[#273990]">More info</Link>
              </div>
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

        <div className="mt-12 overflow-hidden rounded-2xl">
          <img src="/images/collection.jpg" alt="A sample being collected" className="h-48 w-full object-cover" />
          <div className="flex flex-col items-start justify-between gap-4 bg-[#273990] p-6 text-white md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold">Home sample collection</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/80">
                Share your area and the test name. The team confirms the visit, any fasting advice, and the charge.
              </p>
            </div>
            <Link to="/home-collection" className="rounded-full bg-[#6eb744] px-5 py-3 text-sm font-semibold text-white">
              Home collection details
            </Link>
          </div>
        </div>

        <h2 className="mt-14 text-2xl font-semibold text-[#273990]">About these tests</h2>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          This is a selection from the laboratory menu. Most routine reports are shared within 24 hours. If a test is missing, call {phones[0].label} or send a WhatsApp message and the lab will check it.
        </p>
        <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200">
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
    </div>
  )
}
