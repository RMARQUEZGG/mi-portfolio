function Hero({ oscuro }) {
    const texto = oscuro ? '#e0e0e0' : '#111'
    const subtexto = oscuro ? '#999' : '#555'
    const tagBg = oscuro ? '#1e1e1e' : '#f0f0f0'
    const tagBorder = oscuro ? '#333' : '#ddd'

    return (
        <section id="inicio" style={{ padding: '3rem 0 4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <img
                    src="/Perfil.jpeg"
                    alt="Rocio Marquez"
                    style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '2px solid #b096dd'
                    }}
                />
                <div>
                    <p style={{ color: texto, fontWeight: '600' }}>Rocio del Carmen Marquez Guaravia</p>
                    <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                        backgroundColor: '#14532d22', color: '#4ade80',
                        padding: '0.2rem 0.8rem', borderRadius: '20px',
                        fontSize: '0.8rem', border: '1px solid #4ade8044'
                    }}>
                        <span style={{
                            width: '8px', height: '8px', borderRadius: '50%',
                            backgroundColor: '#4ade80', display: 'inline-block'
                        }} />
                        Disponible para proyectos
                    </span>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <div style={{ flex: 1, minWidth: '280px' }}>
                    <h1 style={{ fontSize: '2.8rem', fontWeight: '800', color: texto, lineHeight: '1.2' }}>
                        QA Engineer Automation
                    </h1>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', margin: '1rem 0' }}>
                        {['Testing Automation', 'Performance QA', 'CI/CD'].map(tag => (
                            <span key={tag} style={{
                                backgroundColor: tagBg, border: '1px solid ' + tagBorder,
                                color: subtexto, padding: '0.3rem 0.8rem',
                                borderRadius: '20px', fontSize: '0.8rem'
                            }}>{tag}</span>
                        ))}
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                        <a href="#contacto" style={{
                            backgroundColor: '#7c3aed', color: 'white',
                            padding: '0.7rem 1.5rem', borderRadius: '25px',
                            fontWeight: '600', textDecoration: 'none'
                        }}>Contactame</a>
                        <a href="#proyectos" style={{
                            backgroundColor: 'transparent', color: texto,
                            padding: '0.7rem 1.5rem', borderRadius: '25px',
                            fontWeight: '600', textDecoration: 'none',
                            border: '1px solid ' + tagBorder
                        }}>Ver proyectos</a>
                    </div>
                </div>

                <div style={{ flex: 1, minWidth: '280px' }}>
                    <p style={{ color: subtexto, lineHeight: '1.8', fontSize: '1rem',  textAlign: 'justify' }}>
                        Especialista en automatización de pruebas y calidad de software, 
                        apasionada por garantizar la confiabilidad, rendimiento y estabilidad
                         de los sistemas. Experiencia trabajando con herramientas modernas de QA 
                         como Selenium, Cypress, Playwright y Postman. Enfocada en mejorar la calidad del software
                          mediante automatización, pruebas eficientes y buenas prácticas de testing. Basada en La Paz.
                    </p>
                </div>
            </div>

            <div style={{ marginTop: '2.5rem' }}>
                <p style={{ color: subtexto, fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '1.2rem' }}>
                    STACK TECNOLOGICO
                </p>
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                    {['Selenium', 'Cypress', 'Playwright', 'Python', 'Java', 'Postman', 'Rest Assured' , 'Karate'].map(tec => (
                        <span key={tec} style={{ color: subtexto, fontSize: '1rem', fontWeight: '500' }}>{tec}</span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero
