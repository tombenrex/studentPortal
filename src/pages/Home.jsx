import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <header className='section-hero hero'>
      <div className='white-overlay'></div>

      <div className='container position-relative z-2'>
        <h1 className='display-1 fw-bold header'>
          Vi firar examen av
          <br />
          Studenterna 2025
        </h1>

        <div className='mt-4'>
          <Link to='/courses' className='btn btn-danger btn-lg me-3'>
            <i className='bi bi-arrow-right-circle me-2'></i>
            Se våra program
          </Link>
        </div>

        <div
          className='position-relative text-center p-4 shadow bg-primary mt-4 mt-md-0 mx-auto mx-md-0'
          style={{
            right: '2rem',
            maxWidth: '400px',
            zIndex: 3,
            borderRadius: '0.5rem',
          }}
        >
          <h4>Håvard utses vara den populäraste skolan</h4>
          <Link to='/news' className='btn btn-outline-dark mt-2'>
            <i className='bi bi-arrow-right me-2'></i>
            Läs mer i nyheterna
          </Link>
        </div>
      </div>
    </header>
  )
}
