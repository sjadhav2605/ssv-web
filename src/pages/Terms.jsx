import { useEffect } from "react"
import Crumb from "../components/Crumb"
import { email, phones } from "../data/content"

export default function Terms() {
  useEffect(() => {
    document.title = "Terms | SSV Group"
  }, [])

  return (
    <>
      <Crumb current="Terms" />
      <article className="page-wrap max-w-3xl pb-12">
      <h1 className="text-4xl font-semibold text-[#273990]">How this site is used</h1>
      <div className="mt-6 space-y-4 text-base leading-7 text-ink">
        <p>
          This site is for enquiries about tests, health profiles, and home sample collection at SSV Diagnostic Pathology Laboratory and its partner centres.
        </p>
        <p>
          The enquiry form stores your details in this browser and opens a WhatsApp message. A person from SSV confirms the test, the time, and the charge. Nothing is billed from this website.
        </p>
        <p>
          The test list is a selection from the laboratory menu. Call {phones[0].label} if the test you need is not shown. Prices are confirmed on the phone or WhatsApp.
        </p>
        <p>Information on this site is not a medical diagnosis and does not replace advice from your doctor.</p>
        <p>
          Questions about these terms: <a className="font-bold text-brand-800" href={`mailto:${email}`}>{email}</a>.
        </p>
      </div>
    </article>
    </>
  )
}
