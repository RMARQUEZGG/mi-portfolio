import { useState } from 'react'
import { useFormStatus } from 'react-dom'

function Contacto({ oscuro }) {
  const texto = oscuro ? 'white' : '#111'
  const subtexto = oscuro ? '#999' : '#555'
  const inputBg = oscuro ? '#1a1a1a' : 'white'
  const inputBorder = oscuro ? '#2a2a2a' : '#e0e0e0'

  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [estado, setEstado] = useState(null)

  const manejarCambio = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const manejarEnvio = async (e) => {
    e.preventDefault()
    setEstado('enviando')
    try {
   const res = await fetch('https://mi-portfolio-production.up.railway.app/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setEstado('exitoso')
        setForm({ nombre: '', email: '', mensaje: '' })
      } else {
        setEstado('error')
      }
    } catch {
      setEstado('error')
    }
  }

  return (
    <section id="contacto" style={{ padding: '3rem 0 5rem' }}>
      <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '250px' }}>
          <p style={{ color: '#7c3aed', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Hablemos</p>
          <h2 style={{ color: texto, fontSize: '2rem', fontWeight: '800', marginBottom: '1rem' }}>
            Contacto
          </h2>
          <p style={{ color: subtexto, lineHeight: '1.7' }}>
            Disponible para proyectos de automatizacion y QA.
          </p>
          <p style={{ color: subtexto, marginTop: '0.5rem' }}>La Paz, Bolivia</p>
        </div>

        <form onSubmit={manejarEnvio} style={{
          flex: 2, minWidth: '280px',
          display: 'flex', flexDirection: 'column', gap: '1rem'
        }}>
          <input
            name="nombre" placeholder="Nombre"
            value={form.nombre} onChange={manejarCambio} required
            style={{
              backgroundColor: inputBg, border: '1px solid ' + inputBorder,
              borderRadius: '8px', padding: '0.9rem',
              color: texto, fontSize: '1rem', outline: 'none'
            }}
          />
          <input
            name="email" type="email" placeholder="Email"
            value={form.email} onChange={manejarCambio} required
            style={{
              backgroundColor: inputBg, border: '1px solid ' + inputBorder,
              borderRadius: '8px', padding: '0.9rem',
              color: texto, fontSize: '1rem', outline: 'none'
            }}
          />
          <textarea
            name="mensaje" placeholder="Mensaje"
            value={form.mensaje} onChange={manejarCambio} required rows={4}
            style={{
              backgroundColor: inputBg, border: '1px solid ' + inputBorder,
              borderRadius: '8px', padding: '0.9rem',
              color: texto, fontSize: '1rem', resize: 'vertical', outline: 'none'
            }}
          />
          <button
            type="submit" disabled={estado === 'enviando'}
            style={{
              backgroundColor: '#7c3aed', color: 'white',
              padding: '0.9rem', border: 'none',
              borderRadius: '8px', fontSize: '1rem',
              fontWeight: '600', cursor: 'pointer'
            }}
          >
            {estado === 'enviando' ? 'Enviando...' : 'Enviar mensaje'}
          </button>
          {estado === 'exitoso' && <p style={{ color: '#4ade80' }}>Mensaje enviado con exito!</p>}
          {estado === 'error' && <p style={{ color: '#f87171' }}>Hubo un error. Intenta de nuevo.</p>}
        </form>
      </div>
    </section>
  )
}

export default Contacto