import { CheckCircle2, MessageCircle } from "lucide-react"
import { useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { phones, whatsapp } from "../data/content"

const interests = ["Lab test", "Health profile", "Home collection", "General enquiry"]

export default function BookingForm({ compact = false }) {
  const [params] = useSearchParams()
  const [sent, setSent] = useState(null)

  const defaults = useMemo(
    () => ({
      interest: params.get("interest") || "Lab test",
      item: params.get("item") || "",
    }),
    [params],
  )

  function onSubmit(event) {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget))
    const entry = { ...data, createdAt: new Date().toISOString() }
    const existing = JSON.parse(localStorage.getItem("ssv-enquiries") || "[]")
    localStorage.setItem("ssv-enquiries", JSON.stringify([entry, ...existing].slice(0, 30)))
    setSent(entry)
  }

  if (sent) {
    const message = encodeURIComponent(
      `Hello SSV Group, I would like to enquire.\nName: ${sent.name}\nPhone: ${sent.phone}\nNeed: ${sent.interest}\nItem: ${sent.item || "-"}\nHome collection: ${sent.home ? "Yes" : "No"}\nAddress: ${sent.address || "-"}\nNote: ${sent.message || "-"}`,
    )
    return (
      <div className="card p-6 sm:p-8">
        <CheckCircle2 className="text-emerald-600" />
        <h3 className="mt-3 text-2xl font-extrabold">Enquiry saved on this device</h3>
        <p className="mt-2 text-muted">
          The lab team confirms bookings by phone or WhatsApp. Send this message now so someone can call you back.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a className="btn btn-gold" href={`https://wa.me/${whatsapp}?text=${message}`} target="_blank" rel="noreferrer">
            <MessageCircle size={16} />
            Send on WhatsApp
          </a>
          <a className="btn btn-ghost" href={phones[0].href}>
            Call {phones[0].label}
          </a>
        </div>
      </div>
    )
  }

  return (
    <form key={`${defaults.interest}-${defaults.item}`} onSubmit={onSubmit} className="card p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold">
          Your name
          <input className="field mt-2" name="name" required placeholder="Full name" />
        </label>
        <label className="block text-sm font-semibold">
          Phone
          <input className="field mt-2" name="phone" required inputMode="tel" minLength={10} pattern="[0-9+\s-]{10,}" placeholder="10-digit mobile" />
        </label>
        <label className="block text-sm font-semibold">
          I need
          <select className="field mt-2" name="interest" defaultValue={defaults.interest}>
            {interests.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-semibold">
          Test or profile
          <input className="field mt-2" name="item" defaultValue={defaults.item} placeholder="Example: Thyroid profile" />
        </label>
        {!compact && (
          <>
            <label className="block text-sm font-semibold sm:col-span-2">
              Address or area
              <input className="field mt-2" name="address" placeholder="Area for a home visit, or leave blank" />
            </label>
            <label className="block text-sm font-semibold">
              Preferred date
              <input className="field mt-2" type="date" name="date" />
            </label>
            <label className="flex items-end gap-3 pb-3 text-sm font-semibold">
              <input type="checkbox" name="home" value="Yes" className="h-4 w-4 accent-brand-700" />
              I want home sample collection
            </label>
          </>
        )}
        <label className="block text-sm font-semibold sm:col-span-2">
          Message
          <textarea className="field mt-2 min-h-28 resize-y" name="message" placeholder="Any preparation question, or the centre you prefer." />
        </label>
      </div>
      <button className="btn btn-brand mt-5" type="submit">
        Send enquiry
      </button>
      <p className="mt-3 text-xs leading-5 text-muted">
        Submitting stores the enquiry in this browser and gives you a WhatsApp message. A person from SSV confirms the booking.
      </p>
    </form>
  )
}
