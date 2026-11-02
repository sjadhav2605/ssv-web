import { createContext, useContext, useEffect, useMemo, useState } from "react"

const CartContext = createContext(null)
const KEY = "ssv-cart"

export function CartProvider({ children }) {
  const [codes, setCodes] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || "[]")
      return Array.isArray(saved) ? saved : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(codes))
  }, [codes])

  const api = useMemo(
    () => ({
      codes,
      has: (code) => codes.includes(code),
      add: (code) => setCodes((list) => (list.includes(code) ? list : [...list, code])),
      remove: (code) => setCodes((list) => list.filter((item) => item !== code)),
      clear: () => setCodes([]),
    }),
    [codes],
  )

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>
}

export function useCart() {
  const value = useContext(CartContext)
  if (!value) throw new Error("useCart must be used inside CartProvider")
  return value
}
