function Navbar({ oscuro, setOscuro }) {
  return (
    <div style={{ padding: '1rem 2rem', position: 'sticky', top: 0, zIndex: 100 }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.7rem 2rem',
        borderRadius: '50px',
        maxWidth: '700px',
        margin: '0 auto',
        position: 'relative',
        backgroundColor: oscuro ? '#1a1a1a' : 'white',
        border: oscuro ? '1px solid #2a2a2a' : '1px solid #e0e0e0',
      }}>
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', flex: 1, justifyContent: 'center' }}>
          <li><a href="#inicio" style={{ color: oscuro ? '#ccc' : '#444', textDecoration: 'none' }}>Inicio</a></li>
          <li><a href="#que-hago" style={{ color: oscuro ? '#ccc' : '#444', textDecoration: 'none' }}>Que hago</a></li>
          <li><a href="#proyectos" style={{ color: oscuro ? '#ccc' : '#444', textDecoration: 'none' }}>Proyectos</a></li>
          <li><a href="#contacto" style={{ color: oscuro ? '#ccc' : '#444', textDecoration: 'none' }}>Contacto</a></li>
        </ul>
        <button
          onClick={() => setOscuro(!oscuro)}
          style={{
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            cursor: 'pointer',
            fontSize: '1rem',
            position: 'absolute',
            right: '1rem',
            backgroundColor: oscuro ? '#2a2a2a' : '#f0f0f0',
            color: oscuro ? 'white' : '#111',
          }}
        >
          {oscuro ? '☀️' : '🌙'}
        </button>
      </nav>
    </div>
  )
}

export default Navbar