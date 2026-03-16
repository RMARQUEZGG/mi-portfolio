import { useState } from 'react'

function Proyectos({ oscuro }) {
  const texto = oscuro ? 'white' : '#111'
  const subtexto = oscuro ? '#999' : '#555'
  const cardBg = oscuro ? '#1a1a1a' : 'white'
  const cardBorder = oscuro ? '#2a2a2a' : '#e0e0e0'
  const cardHover = oscuro ? '#222' : '#f5f0ff'

  const [hover, setHover] = useState(null)

  const lista = [
    { titulo: 'Framework de Automatización', desc: 'Framework completo con Selenium y Python para pruebas E2E.', tags: ['Python', 'Selenium', 'pytest'] },
    { titulo: 'Suite de Pruebas API', desc: 'Coleccion de pruebas automatizadas para REST APIs con Postman.', tags: ['Postman', 'Newman', 'CI/CD'] },
    { titulo: 'Dashboard de Reportes QA', desc: 'Sistema de reportes visuales para resultados de pruebas.', tags: ['Playwright', 'JavaScript', 'HTML'] },
  ]

  return (
    <section id="proyectos" style={{ padding: '3rem 0' }}>
      <h2 style={{ fontFamily: 'Sora, sans-serif', color: texto, fontSize: '2rem', fontWeight: '800', marginBottom: '2rem' }}>
        Proyectos
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
        {lista.map((p, i) => (
          <div
            key={p.titulo}
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
            <h3 style={{ color: hover === i ? '#7c3aed' : texto, fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.8rem', transition: 'color 0.2s' }}>
              {p.titulo}
            </h3>
            <p style={{ color: subtexto, fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>{p.desc}</p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {p.tags.map(tag => (
                <span key={tag} style={{
                  backgroundColor: '#7c3aed22', color: '#7c3aed',
                  padding: '0.2rem 0.7rem', borderRadius: '20px', fontSize: '0.8rem'
                }}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Proyectos