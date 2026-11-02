import { useCart } from "../cart"

export default function AddButton({ code, className = "" }) {
  const { has, add, remove } = useCart()
  const added = has(code)

  return (
    <button
      type="button"
      onClick={() => (added ? remove(code) : add(code))}
      className={`rounded-full px-4 py-2 text-sm font-semibold ${
        added ? "bg-[#6eb744] text-white" : "bg-[#273990] text-white"
      } ${className}`}
    >
      {added ? "Added" : "Add"}
    </button>
  )
}
