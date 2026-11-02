import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Crumb from "../components/Crumb"
import { useCart } from "../cart"
import { phones, tests, whatsapp } from "../data/content"

export default function Cart() {
  const { codes, remove, clear } = useCart()
  const selected = codes.map((code) => tests.find((test) => test.code === code)).filter(Boolean)
  const [sent, setSent] = useState(null)

  useEffect(() => {
    document.title = "Selected tests | SSV Group"
  }, [])

  function onSubmit(event) {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget))
    const entry = {
      ...data,
      interest: "Lab test",
      item: selected.map((test) => `${test.name} (${test.code})`).join(", "),
      createdAt: new Date().toISOString(),
    }
    const existing = JSON.parse(localStorage.getItem("ssv-enquiries") || "[]")
    localStorage.setItem("ssv-enquiries", JSON.stringify([entry, ...existing].slice(0, 30)))
    setSent(entry)
    clear()
  }

  if (sent) {
    const message = encodeURIComponent(
      `Hello SSV Group, please confirm these tests.\nName: ${sent.name}\nPhone: ${sent.phone}\nTests: ${sent.item}\nHome collection: ${sent.home ? "Yes" : "No"}\nArea: ${sent.address || "-"}\nDate: ${sent.date || "-"}\nNote: ${sent.message || "-"}`,
    )
    return (
      <div className="bg-white">
        <Crumb current="Selected tests" />
        <section className="page-wrap max-w-2xl pb-16">
          <h1 className="text-3xl font-semibold text-[#273990]">List saved on this device</h1>
          <p className="mt-3 leading-7 text-slate-600">Send it on WhatsApp so the lab can confirm the charge and the slot. Nothing is billed from this page.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="rounded-full bg-[#6eb744] px-5 py-3 text-sm font-semibold text-white" href={`https://wa.me/${whatsapp}?text=${message}`} target="_blank" rel="noreferrer">
              Send on WhatsApp
            </a>
            <a className="rounded-full border border-[#273990] px-5 py-3 text-sm font-semibold text-[#273990]" href={phones[0].href}>
              Call {phones[0].label}
            </a>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <Crumb current="Selected tests" />
      <section className="page-wrap grid gap-8 pb-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1 className="text-4xl font-semibold text-[#273990]">Tests you selected</h1>
          <p className="mt-3 text-slate-600">Add tests from the menu. The lab confirms every charge before a visit.</p>
          {selected.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-slate-200 p-6">
              <p className="font-semibold text-[#273990]">No tests selected yet.</p>
              <Link to="/diagnostics" className="mt-4 inline-block rounded-full bg-[#273990] px-5 py-3 text-sm font-semibold text-white">
                Browse lab tests
              </Link>
            </div>
          ) : (
            <ul className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200">
              {selected.map((test) => (
                <li key={test.code} className="flex items-center justify-between gap-4 px-5 py-4">
                  <div>
                    <Link to={`/diagnostics/${test.code}`} className="font-semibold text-[#273990]">
                      {test.name}
                    </Link>
                    <p className="text-sm text-slate-500">
                      {test.category} · {test.code} · {test.sample}
                    </p>
                  </div>
                  <button type="button" onClick={() => remove(test.code)} className="text-sm font-semibold text-[#273990]">
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        {selected.length > 0 && (
          <form onSubmit={onSubmit} className="h-fit rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-[#273990]">Ask the lab to confirm</h2>
            <div className="mt-4 grid gap-4">
              <label className="block text-sm font-semibold text-[#273990]">
                Your name
                <input className="mt-2 h-11 w-full rounded-xl border border-slate-200 px-3 text-sm font-normal" name="name" required placeholder="Full name" />
              </label>
              <label className="block text-sm font-semibold text-[#273990]">
                Phone
                <input className="mt-2 h-11 w-full rounded-xl border border-slate-200 px-3 text-sm font-normal" name="phone" required inputMode="tel" minLength={10} pattern="[0-9+\s-]{10,}" placeholder="10-digit mobile" />
              </label>
              <label className="block text-sm font-semibold text-[#273990]">
                Area
                <input className="mt-2 h-11 w-full rounded-xl border border-slate-200 px-3 text-sm font-normal" name="address" placeholder="For a home visit, or leave blank" />
              </label>
              <label className="block text-sm font-semibold text-[#273990]">
                Preferred date
                <input className="mt-2 h-11 w-full rounded-xl border border-slate-200 px-3 text-sm font-normal" type="date" name="date" />
              </label>
              <label className="flex items-center gap-3 text-sm font-semibold text-[#273990]">
                <input type="checkbox" name="home" value="Yes" className="h-4 w-4" />
                Collect the sample at home
              </label>
              <label className="block text-sm font-semibold text-[#273990]">
                Note
                <textarea className="mt-2 min-h-24 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm font-normal" name="message" placeholder="Centre, fasting, or any question" />
              </label>
            </div>
            <button type="submit" className="mt-5 rounded-full bg-[#6eb744] px-5 py-3 text-sm font-semibold text-white">
              Save and prepare WhatsApp
            </button>
          </form>
        )}
      </section>
    </div>
  )
}
