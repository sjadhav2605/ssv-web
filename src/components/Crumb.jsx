import { Link } from "react-router-dom"

export default function Crumb({ current }) {
  return (
    <p className="page-wrap py-4 text-sm text-[#273990]">
      <Link to="/" className="font-medium">
        Home
      </Link>
      <span className="px-2 text-slate-400">/</span>
      <span>{current}</span>
    </p>
  )
}
