import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <header className='hero'>
      <div className='white-overlay'></div>

      <div className='container position-relative text-white z-2'>
        <h1 className='display-1 fw-bold'>
          Celebrating the
          <br />
          Class of 2025
        </h1>

        <div className='mt-4'>
          <Link to='/ceremonies' className='btn btn-danger btn-lg me-3'>
            <i className='bi bi-arrow-right-circle me-2'></i>
            Revisit the ceremonies
          </Link>
        </div>

        <div className='mt-5'>
          <h4>Håvard awarded 9,1337 degrees</h4>
          <Link to='/news' className='btn btn-outline-light mt-2'>
            <i className='bi bi-arrow-right me-2'></i>
            Read more about the Class of 2025
          </Link>
        </div>
      </div>
    </header>
  )
}
