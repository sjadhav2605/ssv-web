import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import AddButton from "../components/AddButton"
import Crumb from "../components/Crumb"
import { tests } from "../data/content"

export default function TestDetail() {
  const { code } = useParams()
  const test = tests.find((item) => item.code.toLowerCase() === code.toLowerCase())
  const related = test
    ? tests.filter((item) => item.code !== test.code && item.category === test.category).slice(0, 4)
    : []

  useEffect(() => {
    document.title = test ? `${test.name} | SSV Group` : "Test | SSV Group"
  }, [test])

  if (!test) {
    return (
      <div className="bg-white">
        <Crumb current="Lab Tests" />
        <section className="page-wrap pb-16">
          <h1 className="text-3xl font-semibold text-[#273990]">That test is not in this menu.</h1>
          <p className="mt-3 text-slate-600">Send the name anyway. The lab will say if it is available.</p>
          <Link to="/diagnostics" className="mt-6 inline-block rounded-full bg-[#273990] px-5 py-3 text-sm font-semibold text-white">
            Back to lab tests
          </Link>
        </section>
      </div>
    )
  }

  const homeOk = test.sample !== "Tissue" && test.sample !== "Smear"
  const fasting = /fasting/i.test(test.name)

  return (
    <div className="bg-white">
      <Crumb current={test.name} />
      <section className="page-wrap grid gap-8 pb-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#6eb744]">
            {test.category} · {test.code}
          </p>
          <h1 className="mt-2 text-4xl font-semibold text-[#273990]">{test.name}</h1>
          <p className="mt-4 max-w-xl leading-7 text-slate-600">
            {test.name} is on the SSV laboratory menu. Sample: {test.sample}.
            {test.includes ? ` It includes ${test.includes}.` : ""} The charge is confirmed when you call.
          </p>
          <dl className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              ["Sample", test.sample],
              ["Report", "Most routine reports are shared within 24 hours. Special tests take longer."],
              ["Home collection", homeOk ? "Ask for a pickup. The lab confirms your area first." : "This sample is taken at the centre."],
              ["Preparation", fasting ? "This name covers fasting and non-fasting collections. Ask which one you need." : "The lab tells you if this test needs fasting or any other preparation."],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-slate-200 p-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-[#6eb744]">{label}</dt>
                <dd className="mt-1 text-sm leading-6 text-slate-700">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <aside className="h-fit rounded-2xl border border-slate-200 p-6">
          <p className="text-sm font-semibold text-[#6eb744]">Charge confirmed on call</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">Nothing is billed on this page. Add the test, then send the list so the lab can call you back.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <AddButton code={test.code} />
            <Link
              to={`/book?item=${encodeURIComponent(`${test.name} (${test.code})`)}&interest=${encodeURIComponent(test.category === "Profiles" ? "Health profile" : "Lab test")}`}
              className="rounded-full border border-[#273990] px-4 py-2 text-sm font-semibold text-[#273990]"
            >
              Enquire
            </Link>
          </div>
          {homeOk && (
            <Link
              to={`/book?interest=Home%20collection&item=${encodeURIComponent(`${test.name} (${test.code})`)}`}
              className="mt-4 inline-block text-sm font-semibold text-[#273990] underline"
            >
              Request this test at home
            </Link>
          )}
        </aside>
      </section>
      {related.length > 0 && (
        <section className="page-wrap pb-16">
          <h2 className="text-2xl font-semibold text-[#273990]">More {test.category.toLowerCase()} tests</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {related.map((item) => (
              <article key={item.code} className="rounded-2xl border border-slate-200 p-5">
                <Link to={`/diagnostics/${item.code}`} className="font-semibold text-[#273990]">
                  {item.name}
                </Link>
                <p className="mt-1 text-sm text-slate-500">
                  {item.code} · {item.sample}
                </p>
                <div className="mt-4">
                  <AddButton code={item.code} />
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
