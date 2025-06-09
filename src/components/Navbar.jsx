import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light navbar-overlay'>
        <div className='container'>
          <Link to='/'>
            <img class='navbar-logo' src='/images/navbar-logo.png' alt='Håvard Logo' />
          </Link>
          <form className='d-flex ms-auto me-3'>
            <input className='form-control' type='search' placeholder='Search' />
          </form>

          <button className='btn btn-outline-dark' onClick={() => setMenuOpen(true)}>
            <i className='bi bi-list fs-3'></i> Menu
          </button>
        </div>
      </nav>
      <div
        className={`position-fixed top-0 start-0 w-100 h-100 bg-dark text-white menu-overlay ${
          menuOpen ? 'open' : ''
        }`}
        style={{
          zIndex: 1050,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        <div className='container d-flex flex-column justify-content-center align-items-left h-100'>
          <button
            className='btn btn-link text-white position-absolute top-0 end-0 m-4 fs-3'
            onClick={() => setMenuOpen(false)}
          >
            Close <i className='bi bi-x-circle'></i>
          </button>

          <nav className='fs-1 fw-bold'>
            <p className='mb-4'>
              <Link
                className='text-white text-decoration-none'
                to='/courses'
                onClick={() => setMenuOpen(false)}
              >
                Academics
              </Link>
            </p>
            <p className='mb-4'>
              <Link
                className='text-white text-decoration-none'
                to='/campus'
                onClick={() => setMenuOpen(false)}
              >
                Campus
              </Link>
            </p>
            <p className='mb-4'>
              <Link
                className='text-white text-decoration-none'
                to='/news'
                onClick={() => setMenuOpen(false)}
              >
                In Focus
              </Link>
            </p>
            <p className='mb-4'>
              <Link
                className='text-white text-decoration-none'
                to='/visit'
                onClick={() => setMenuOpen(false)}
              >
                Visit
              </Link>
            </p>
            <p className='mb-4'>
              <Link
                className='text-white text-decoration-none'
                to='/about'
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </p>
            <p className='mb-4'>
              <Link
                className='text-white text-decoration-none'
                to='/news'
                onClick={() => setMenuOpen(false)}
              >
                News
              </Link>
            </p>
          </nav>

          <div className='mt-5'>
            <small className='text-white-50'>&264</small>
          </div>
        </div>
      </div>
    </>
  )
}
