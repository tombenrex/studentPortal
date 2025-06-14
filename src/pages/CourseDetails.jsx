import { Link, useParams } from 'react-router-dom'
import courses from '../data/courses'

export default function CourseDetails() {
  const { id } = useParams()
  const course = courses.find(c => c.id === parseInt(id))

  if (!course) {
    return (
      <main className='container'>
        <section className='alert alert-danger text-center'>
          <h4>Kurs hittades inte</h4>
          <p>Ingen kurs med ID: {id} kunde hittas.</p>
        </section>
      </main>
    )
  }

  return (
    <main className='bg-gradient-2'>
      <article className='card container mt-4'>
        <div className='card-body'>
          <h2 className='card-title mb-3'>{course.title}</h2>
          <p className='card-text text-muted'>{course.description}</p>

          <hr />

          <section>
            <h5>Om kursen</h5>
            <p>{course.details}</p>

            <div className='row mt-4'>
              <div className='col-md-6'>
                <p>
                  <strong>Antal poäng:</strong> {course.credits} hp
                </p>
              </div>
              <div className='col-md-6'>
                <p>
                  <strong>Förkunskapskrav:</strong> {course.requirements}
                </p>
              </div>
            </div>
          </section>

          <div className='d-flex gap-3 mt-4'>
            <Link to={`/register?courseId=${course.id}`} className='btn btn-success'>
              <i className='bi bi-pencil-square me-2 btn'></i>
              Registrera
            </Link>

            <Link to='/courses' className='btn-2'>
              <i className='bi bi-arrow-left me-2'></i>
              Alla kurserna
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
