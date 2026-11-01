import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <section className="page-wrap py-24 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">404</p>
      <h1 className="mt-3 text-4xl font-extrabold">This page is not on the site.</h1>
      <Link to="/" className="btn btn-brand mt-6">
        Back to home
      </Link>
    </section>
  )
}
