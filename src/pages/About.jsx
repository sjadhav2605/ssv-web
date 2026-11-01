import { useEffect } from "react"
import { Link } from "react-router-dom"
import { centers } from "../data/content"

export default function About() {
  useEffect(() => {
    document.title = "About | SSV Group"
  }, [])

  return (
    <>
      <section className="bg-brand-50">
        <div className="page-wrap py-14">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">About SSV Group</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-brand-950 sm:text-5xl">
            A pathology lab patients and doctors can call.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
            SSV Diagnostic Pathology Laboratory runs routine and specialised tests, with home sample collection and a network that includes Rainbow, Isha, Mayraa, and Samarth.
          </p>
        </div>
      </section>

      <section className="page-wrap grid gap-4 py-12 md:grid-cols-2">
        <article className="card p-7">
          <p className="text-sm font-bold text-brand-700">Mission</p>
          <p className="mt-3 text-xl font-extrabold leading-8">
            Deliver accurate, timely diagnostic reports that help doctors and patients decide the next step.
          </p>
        </article>
        <article className="card p-7">
          <p className="text-sm font-bold text-brand-700">Vision</p>
          <p className="mt-3 text-xl font-extrabold leading-8">
            Be a trusted diagnostic laboratory, with quality that stays within reach.
          </p>
        </article>
      </section>

      <section className="page-wrap grid items-center gap-8 pb-12 lg:grid-cols-2">
        <img src="/images/lab.jpg" alt="Laboratory floor with diagnostic analysers" className="h-80 w-full rounded-[2rem] object-cover" />
        <div className="space-y-4">
          <article className="card p-6">
            <h2 className="text-2xl font-extrabold">SSV Diagnostic Pathology Laboratory</h2>
            <p className="mt-2 leading-7 text-muted">
              A NABL-accredited laboratory for routine and specialised tests, with home sample collection and a network that includes Rainbow, Isha, Mayraa, and Samarth.
            </p>
            <Link to="/diagnostics" className="mt-4 inline-block text-sm font-extrabold text-brand-700">
              Test menu
            </Link>
          </article>
        </div>
      </section>

      <section className="bg-[#171028] py-14 text-white">
        <div className="page-wrap">
          <h2 className="text-3xl font-extrabold">The network</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {centers.map((center) => (
              <article key={center.name} className="overflow-hidden rounded-3xl bg-white text-ink">
                <img src={center.image} alt="" className="h-36 w-full object-contain" />
                <div className="p-4">
                  <h3 className="font-extrabold">{center.name}</h3>
                  <p className="mt-1 text-sm text-muted">{center.detail}</p>
                  <a href={center.map} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm font-extrabold text-brand-700">
                    Directions
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
