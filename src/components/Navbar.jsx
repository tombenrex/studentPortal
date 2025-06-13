import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import courses from '../data/courses'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [registrations, setRegistrations] = useState([])
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const clearRegistrations = () => {
    localStorage.removeItem('registrations')
    setRegistrations([])
  }

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('registrations') || '[]')
    setRegistrations(stored)
  }, [menuOpen])

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  return (
    <>
      {dropdownOpen && (
        <div className='dropdown-overlay' onClick={() => setDropdownOpen(false)}></div>
      )}

      <nav className='navbar navbar-expand-lg navbar-overlay'>
        <div className='container d-flex align-items-center justify-content-between'>
          <Link to='/'>
            <img className='navbar-logo' src='/images/navbar-logo.png' alt='Håvard Logo' />
          </Link>

          <div className='navbar-buttons d-flex gap-2 px-2'>
            <div className='dropdown position-relative'>
              <button
                className='btn-1 dropdown-toggle'
                type='button'
                aria-expanded={dropdownOpen}
                onClick={toggleDropdown}
              >
                Mina kurser
              </button>

              {dropdownOpen && (
                <ul className='dropdown-menu show custom-dropdown-menu shadow'>
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
        className='position-fixed top-0 start-0 w-100 h-100 bg-gradient-1 text-white'
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
            <button className='btn-1' onClick={() => setMenuOpen(false)}>
              <i className='bi bi-chevron-left'></i> Tillbaka
            </button>
          </div>
          <div className='position-relative w-25 mt-3'>
            <input
              className='form-control form-control-sm border rounded-pill px-3'
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
              <ul className='list-group position-absolute mt-1 w-100 z-3'>
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
          <nav className={` ${menuOpen ? 'animate-fade-slide' : ''}`}>
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

          <div className={`text-white-50 ${menuOpen ? 'animate-fade-slide delay-1s' : ''}`}>
            <small>2025 &#x2605; Ett roligt skolprojekt &#x2605; Tom Larsson &#x2605;</small>
          </div>
        </div>
      </div>
    </>
  )
}
