import { useState } from 'react'

function QueHago({ oscuro }) {
  const texto = oscuro ? 'white' : '#111'
  const subtexto = oscuro ? '#999' : '#555'
  const cardBg = oscuro ? '#1a1a1a' : 'white'
  const cardBorder = oscuro ? '#2a2a2a' : '#e0e0e0'
  const cardHover = oscuro ? '#222' : '#f5f0ff'

  const [hover, setHover] = useState(null)

  const servicios = [
    { icono: '⚡', titulo: 'Automatizacion de Pruebas', items: ['Selenium y Cypress', 'Playwright', 'Scripts en Python y Java'] },
    { icono: '🔬', titulo: 'QA y Testing Manual', items: ['Casos de prueba', 'Pruebas funcionales', 'Reportes de bugs'] },
    { icono: '🛠️', titulo: 'Herramientas y APIs', items: ['Postman', 'REST APIs', 'Pruebas de integracion'] },
    { icono: '📊', titulo: 'Metodologias Agiles', items: ['Scrum y Kanban', 'CI/CD pipelines', 'JIRA y TestRail'] },
  ]

  return (
    <section id="que-hago" style={{ padding: '3rem 0' }}>
      <h2 style={{ fontFamily: 'Sora, sans-serif', color: texto, fontSize: '2rem', fontWeight: '800', marginBottom: '2rem' }}>
        Que hago?
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
        {servicios.map((s, i) => (
          <div
            key={s.titulo}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            style={{
              backgroundColor: hover === i ? cardHover : cardBg,
              border: hover === i ? '1px solid #7c3aed' : '1px solid ' + cardBorder,
              borderRadius: '12px',
              padding: '1.5rem',
              cursor: 'pointer',
              transform: hover === i ? 'translateY(-4px)' : 'translateY(0)',
              transition: 'all 0.2s ease',
              boxShadow: hover === i ? '0 8px 24px rgba(124,58,237,0.15)' : 'none',
            }}
          >
            <p style={{ fontSize: '1.5rem', marginBottom: '0.8rem' }}>{s.icono}</p>
            <h3 style={{ color: hover === i ? '#7c3aed' : texto, fontSize: '1rem', fontWeight: '700', marginBottom: '0.8rem', transition: 'color 0.2s' }}>
              {s.titulo}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {s.items.map(item => (
                <li key={item} style={{ color: subtexto, fontSize: '0.85rem', marginBottom: '0.3rem' }}>· {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default QueHago