import { useEffect } from "react"
import { Link } from "react-router-dom"
import CenterCard from "../components/CenterCard"
import Crumb from "../components/Crumb"
import { centers, instruments } from "../data/content"

export default function About() {
  useEffect(() => {
    document.title = "About | SSV Group"
  }, [])

  return (
    <div className="bg-white">
      <Crumb current="About" />
      <section className="page-wrap pb-8">
        <div className="overflow-hidden rounded-xl">
          <img src="/images/lab.jpg" alt="Analysers in the SSV laboratory" className="h-72 w-full object-cover" />
        </div>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold text-[#273990]">A pathology lab patients and doctors can call.</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          SSV Diagnostic Pathology Laboratory runs routine and specialised tests, with home sample collection and partner centres in the network.
        </p>
      </section>

      <section className="page-wrap grid gap-4 pb-12 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 p-7">
          <p className="text-sm font-semibold text-[#6eb744]">Mission</p>
          <p className="mt-3 text-xl font-semibold leading-8 text-[#273990]">
            Deliver accurate, timely diagnostic reports that help doctors and patients decide the next step.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 p-7">
          <p className="text-sm font-semibold text-[#6eb744]">Vision</p>
          <p className="mt-3 text-xl font-semibold leading-8 text-[#273990]">
            Be a trusted diagnostic laboratory, with quality that stays within reach.
          </p>
        </article>
      </section>

      <section className="page-wrap pb-12">
        <h2 className="text-2xl font-semibold text-[#273990]">Instruments</h2>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {instruments.map((name) => (
            <article key={name} className="grid min-h-24 place-items-center rounded-2xl border border-slate-200 px-4 py-5 text-center">
              <p className="font-semibold text-[#273990]">{name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-wrap pb-14">
        <h2 className="text-2xl font-semibold text-[#273990]">The network</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {centers.map((center) => (
            <CenterCard key={center.name} center={center} />
          ))}
        </div>
        <Link to="/diagnostics" className="mt-6 inline-block text-sm font-semibold text-[#273990]">
          Browse the test menu
        </Link>
      </section>
    </div>
  )
}
