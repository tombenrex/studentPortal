import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className='section-hero hero min-vh-100'>
      <div className='light-overlay'></div>

      <div className='container text-center z-2 position-relative'>
        <h1 className='display-4 fw-bold'>
          Vi firar examen av
          <br />
          Studenterna 2025
        </h1>

        <Link to='/courses' className='btn btn-outline-dark mt-3'>
          <i className='bi bi-arrow-right-circle me-2'></i>
          Se våra program
        </Link>

        <section className='highlight-box p-4 mt-5 mx-auto animate-fade-slide delay-2s'>
          <div className='bg-linear-1 shadow rounded p-4 border border-light-subtle'>
            <h2 className='mb-3'>Håvard anses vara den populäraste skolan</h2>
            <Link to='/news' className='btn btn-outline-dark'>
              <i className='bi bi-arrow-right me-2'></i>
              Läs mer i nyheterna
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
