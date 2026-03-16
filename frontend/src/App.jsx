import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QueHago from './components/QueHago'
import Proyectos from './components/Proyectos'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [oscuro, setOscuro] = useState(false)

  return (
    <div style={{
      backgroundColor: oscuro ? '#0a0a0a' : '#f5f5f7',
      minHeight: '100vh',
      transition: 'all 0.3s ease',
    }}>
      <Navbar oscuro={oscuro} setOscuro={setOscuro} />
      <main style={{ width: '100%', padding: '2rem 28rem' }}>
        <Hero oscuro={oscuro} />
        <QueHago oscuro={oscuro} />
        <Proyectos oscuro={oscuro} />
        <Contacto oscuro={oscuro} />
      </main>
      <Footer oscuro={oscuro} />
    </div>
  )
}

export default App