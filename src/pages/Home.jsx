import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      <section className='section-hero hero min-vh-100'>
        <div className='light-overlay'></div>

        <div className='container position-relative z-2 text-center'>
          <h1 className='display-4 fw-bold header animate-fade-slide'>
            Vi firar examen av
            <br />
            Studenterna 2025
          </h1>

          <div className='mt-2 animate-fade-slide delay-1s'>
            <Link to='/courses' className='btn btn-outline-dark mt-3 btn me-md-3 mb-3 mb-md-0'>
              <i className='bi bi-arrow-right-circle me-2'></i>
              Se våra program
            </Link>
          </div>

          <div className='p-4 mt-5 w-50 mx-auto animate-fade-slide delay-2s'>
            <div className='bg-linear-1 shadow rounded p-3 border border-light-subtle border-1 mt-xl-5'>
              <h2 className='h5'>Håvard anses vara den populäraste skolan</h2>
              <Link to='/news' className='btn btn-outline-dark mt-3'>
                <i className='bi bi-arrow-right me-2'></i>
                Läs mer i nyheterna
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
