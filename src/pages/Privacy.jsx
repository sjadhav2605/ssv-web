import { useEffect } from "react"
import { email, phones } from "../data/content"

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy | SSV Group"
  }, [])

  return (
    <article className="page-wrap max-w-3xl py-12">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">Privacy</p>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-brand-950">What happens to an enquiry</h1>
      <div className="mt-6 space-y-4 text-base leading-7 text-ink">
        <p>
          If you submit the form, this browser stores your name, phone number, the test or profile, an optional area, a preferred date, and your message. The record stays on this device under the name ssv-enquiries. This website does not send that record to a server of its own.
        </p>
        <p>
          If you choose WhatsApp, the same details are placed in a message to the lab number {phones[0].label}. WhatsApp then handles that message under its own service.
        </p>
        <p>Calls and emails go directly to the laboratory. We do not sell enquiry details.</p>
        <p>
          To ask about a record saved in your browser, clear this site's data in your browser, or write to{" "}
          <a className="font-bold text-brand-800" href={`mailto:${email}`}>{email}</a>.
        </p>
      </div>
    </article>
  )
}
