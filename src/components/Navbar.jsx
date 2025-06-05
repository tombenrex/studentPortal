import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>MyApp</Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/courses'>Courses</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/news'>News</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/register'>Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
