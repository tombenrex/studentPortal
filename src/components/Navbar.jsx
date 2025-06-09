import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light navbar-overlay py-4'>
        <div className='container d-flex align-items-center justify-content-between'>
          <Link to='/'>
            <img className='navbar-logo' src='/images/navbar-logo.png' alt='Håvard Logo' />
          </Link>

          <div className='d-flex align-items-center gap-2'>
            <form className='d-flex'>
              <input
                className='form-control form-control-sm border rounded-pill px-3'
                type='search'
                placeholder='Sök'
                style={{ minWidth: '160px' }}
              />
            </form>

            <button
              className='btn btn-outline-dark rounded-pill px-3'
              onClick={() => setMenuOpen(true)}
            >
              <i className='bi bi-list me-2'></i> Meny
            </button>
          </div>
        </div>
      </nav>

      <div
        className='position-fixed top-0 start-0 w-100 h-100 bg-secondary text-white'
        style={{
          zIndex: 1050,
          transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.4s ease',
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        <div className='d-flex flex-column justify-content-between h-100 p-4'>
          <div className='d-flex justify-content-between align-items-center'>
            <Link to='/' onClick={() => setMenuOpen(false)}>
              <img className='navbar-logo' src='/images/navbar-logo.png' alt='Håvard Logo' />
            </Link>
            <button
              className='btn btn-outline-light rounded-pill px-4 py-2 d-flex align-items-center gap-2'
              onClick={() => setMenuOpen(false)}
            >
              <i className='bi bi-chevron-left'></i> Tillbaka
            </button>
          </div>

          <nav className='fs-1 fw-bold mt-5'>
            <p className='mb-4'>
              <Link className='menu-link' to='/courses' onClick={() => setMenuOpen(false)}>
                Kurser
              </Link>
            </p>
            <p className='mb-4'>
              <Link className='menu-link' to='/register' onClick={() => setMenuOpen(false)}>
                Registrera
              </Link>
            </p>
            <p className='mb-4'>
              <Link className='menu-link' to='/news' onClick={() => setMenuOpen(false)}>
                Nyheter
              </Link>
            </p>
          </nav>

          <div className='text-white-50'>
            <small>2025 &#x2605; Ett roligt skolprojekt &#x2605; Tom Larsson &#x2605;</small>
          </div>
        </div>
      </div>
    </>
  )
}
