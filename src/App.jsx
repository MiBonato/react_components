import { Route, Routes } from 'react-router-dom'
import Home from '@content/Home'
import Header from '@content/Header'
import Buttons from '@content/ButtonsList'
import Form from '@content/FormField'
import Inputs from '@content/Inputs'
import Navigation from '@content/Navigation'
import Overlay from '@content/Overlay'
import Presentation from '@content/Presentation'
import Visuals from '@content/Visuals'
import Footer from '@content/Footer'
import '@styles/App.css'

function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-2xl font-semibold">404</h1>
      <p className="text-gray-600">Page non trouvée.</p>
    </div>
  )
}

export default function App() {
  return (
    <>
      <div className="min-h-dvh bg-white text-gray-900">
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/form" element={<Form />} />
            <Route path="/inputs" element={<Inputs />} />
            <Route path="/navigation" element={<Navigation />} />
            <Route path="/overlay" element={<Overlay />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/visuals" element={<Visuals />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </>
  )
}
