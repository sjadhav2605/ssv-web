import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartProvider } from "./cart"
import Layout from "./components/Layout"
import About from "./pages/About"
import Book from "./pages/Book"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import Diagnostics from "./pages/Diagnostics"
import Home from "./pages/Home"
import HomeCollection from "./pages/HomeCollection"
import NotFound from "./pages/NotFound"
import Privacy from "./pages/Privacy"
import Terms from "./pages/Terms"
import TestDetail from "./pages/TestDetail"

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="diagnostics" element={<Diagnostics />} />
            <Route path="diagnostics/:code" element={<TestDetail />} />
            <Route path="home-collection" element={<HomeCollection />} />
            <Route path="contact" element={<Contact />} />
            <Route path="book" element={<Book />} />
            <Route path="cart" element={<Cart />} />
            <Route path="terms" element={<Terms />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}
