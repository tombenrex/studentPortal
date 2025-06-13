import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import courses from '../data/courses'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [registrations, setRegistrations] = useState([])
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCourses = useMemo(() => {
    return courses.filter(course => course.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery])

  const clearRegistrations = () => {
    localStorage.removeItem('registrations')
    setRegistrations([])
  }

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('registrations') || '[]')
    setRegistrations(stored)
  }, [])

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  return (
    <>
      {dropdownOpen && (
        <div
          className='dropdown-overlay'
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1049,
            background: 'rgba(0, 0, 0, 0.5)',
          }}
          onClick={() => setDropdownOpen(false)}
        ></div>
      )}

      <nav className='navbar navbar-expand-lg navbar-overlay'>
        <div className='container d-flex align-items-center justify-content-between'>
          <Link to='/'>
            <img className='navbar-logo' src='/images/navbar-logo.png' alt='Håvard Logo' />
          </Link>

          <div className='navbar-buttons d-flex gap-2'>
            <div className='position-relative'>
              <button
                className='btn-1 dropdown-toggle'
                type='button'
                aria-expanded={dropdownOpen}
                aria-controls='dropdown-menu'
                onClick={toggleDropdown}
              >
                Mina kurser
              </button>

              {dropdownOpen && (
                <ul id='dropdown-menu' className='dropdown-menu show custom-dropdown-menu shadow'>
                  {registrations.length === 0 ? (
                    <li className='dropdown-item'>Inga registreringar</li>
                  ) : (
                    registrations.map((reg, index) => (
                      <li key={index} className='dropdown-item'>
                        {reg.courseTitle}
                      </li>
                    ))
                  )}
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <button className='dropdown-item btn-1' onClick={clearRegistrations}>
                      <i className='bi bi-trash3 me-1'></i> Rensa alla
                    </button>
                  </li>
                </ul>
              )}
            </div>

            <button className='btn-1' onClick={() => setMenuOpen(true)}>
              <i className='bi bi-list'></i> Meny
            </button>
          </div>
        </div>
      </nav>

      <div
        className='position-fixed top-0 start-0 w-100 h-100 bg-gradient-1'
        style={{
          zIndex: 1050,
          transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.4s ease',
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        <div className='d-flex flex-column h-100 p-2 container'>
          <div className='d-flex align-items-center justify-content-between'>
            <Link to='/' onClick={() => setMenuOpen(false)}>
              <img className='navbar-logo' src='/images/navbar-logo.png' alt='Håvard Logo' />
            </Link>
            <button className='btn-1' onClick={() => setMenuOpen(false)}>
              <i className='bi bi-chevron-left'></i> Tillbaka
            </button>
          </div>

          <div className='position-relative d-flex flex-column justify-content-between flex-grow-1'>
            <div className='position-relative'>
              <input
                className='form-control form-control-sm border rounded-pill mt-3 w-50'
                type='search'
                placeholder='Sök kurs...'
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Escape') setSearchQuery('')
                }}
                style={{ minWidth: '150px' }}
              />
              {searchQuery && (
                <ul
                  className='list-group position-absolute mt-1 w-50 search-dropdown'
                  style={{ top: '100%' }}
                >
                  {filteredCourses.length > 0 ? (
                    filteredCourses.map(course => (
                      <li key={course.id} className='list-group-item list-group-item-action'>
                        <Link
                          to={`/courses/${course.id}`}
                          className='text-decoration-none text-dark'
                          onClick={() => {
                            setSearchQuery('')
                            setMenuOpen(false)
                          }}
                        >
                          {course.title}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className='list-group-item text-muted'>Inga träffar</li>
                  )}
                </ul>
              )}
            </div>

            <nav className={`mt-4 ${menuOpen ? 'animate-fade-slide' : ''}`}>
              <ul className='list-unstyled'>
                <li className='mb-5'>
                  <Link className='menu-link' to='/courses' onClick={() => setMenuOpen(false)}>
                    Kurser
                  </Link>
                </li>
                <li className='mb-5'>
                  <Link className='menu-link' to='/register' onClick={() => setMenuOpen(false)}>
                    Registrera
                  </Link>
                </li>
                <li className='mb-5'>
                  <Link className='menu-link' to='/news' onClick={() => setMenuOpen(false)}>
                    Nyheter
                  </Link>
                </li>
              </ul>
              <div
                className={`text-white-50 ${menuOpen ? 'animate-fade-slide delay-2s pt-4' : ''}`}
              >
                <small>2025 ★ skolprojekt ★ Tom Larsson ★</small>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
