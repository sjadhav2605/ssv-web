import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { tests } from "../data/content"

export default function SearchField({ value, onChange, onSubmit, variant = "gray" }) {
  const [open, setOpen] = useState(false)
  const box = useRef(null)
  const needle = value.trim().toLowerCase()
  const matches = needle
    ? tests
        .filter((test) => `${test.name} ${test.code} ${test.category}`.toLowerCase().includes(needle))
        .slice(0, 6)
    : []

  useEffect(() => {
    function close(event) {
      if (!box.current?.contains(event.target)) setOpen(false)
    }
    document.addEventListener("pointerdown", close)
    return () => document.removeEventListener("pointerdown", close)
  }, [])

  const shell = variant === "white" ? "border border-slate-200 bg-white" : "bg-[#f3f4f6]"

  return (
    <form
      ref={box}
      className="relative"
      onSubmit={(event) => {
        event.preventDefault()
        setOpen(false)
        onSubmit(value.trim())
      }}
    >
      <div className={`flex items-center rounded-full px-5 ${shell}`}>
        <input
          value={value}
          onChange={(event) => {
            onChange(event.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          className="h-12 w-full bg-transparent text-sm outline-none"
          placeholder="Search for lab tests"
          aria-label="Search tests"
          autoComplete="off"
        />
        <button type="submit" aria-label="Search" className="grid h-9 w-9 place-items-center text-[#273990]">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20 L16.5 16.5" />
          </svg>
        </button>
      </div>
      {open && matches.length > 0 && (
        <ul className="absolute z-30 mt-2 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
          {matches.map((test) => (
            <li key={test.code}>
              <Link
                to={`/diagnostics/${test.code}`}
                onClick={() => setOpen(false)}
                className="block px-5 py-3 hover:bg-[#f7f8fb]"
              >
                <span className="font-semibold text-[#273990]">{test.name}</span>
                <span className="mt-0.5 block text-xs text-slate-500">
                  {test.category} · {test.code}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {open && needle && matches.length === 0 && (
        <p className="absolute z-30 mt-2 w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm text-slate-600 shadow-lg">
          Not in this menu. Search still sends the name to the lab.
        </p>
      )}
    </form>
  )
}
