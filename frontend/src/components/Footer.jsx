import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function Footer({ oscuro }) {
  const texto = oscuro ? '#999' : '#666'
  const bg = oscuro ? '#111' : '#f5f5f5'
  const border = oscuro ? '#2a2a2a' : '#e0e0e0'

  return (
    <footer style={{ backgroundColor: bg, borderTop: '1px solid ' + border, padding: '2rem 0', marginTop: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ color: texto, fontSize: '0.9rem' }}>2026 Rocio Marquez - La Paz, Bolivia</p>
        <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
          <a href="https://www.linkedin.com/in/rocio-del-carmen-marquez-guaravia-a5ba683b6/" target="_blank" rel="noreferrer" style={{ color: texto, fontSize: '1.4rem' }} onMouseEnter={e => e.currentTarget.style.color = '#7c3aed'} onMouseLeave={e => e.currentTarget.style.color = texto}>
            <FaGithub />
          </a>
          <a href="https://github.com/RMARQUEZGG" target="_blank" rel="noreferrer" style={{ color: texto, fontSize: '1.4rem' }} onMouseEnter={e => e.currentTarget.style.color = '#7c3aed'} onMouseLeave={e => e.currentTarget.style.color = texto}>
            <FaLinkedin />
          </a>
          <a href="mailto:yubinkarocio@gmail.com" style={{ color: texto, fontSize: '1.4rem' }} onMouseEnter={e => e.currentTarget.style.color = '#7c3aed'} onMouseLeave={e => e.currentTarget.style.color = texto}>
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
