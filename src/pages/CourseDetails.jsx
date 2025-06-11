import { Link, useParams } from 'react-router-dom'
import courses from '../data/courses'

export default function CourseDetails() {
  const { id } = useParams()
  const course = courses.find(c => c.id === parseInt(id))

  if (!course) {
    return (
      <div className='container mt-4'>
        <div className='alert alert-danger'>
          <h4>Kurs hittades inte</h4>
          <p>Ingen kurs med ID: {id} kunde hittas.</p>
        </div>
      </div>
    )
  }

  return (
    <div className='wrapper'>
      <div className='card shadow-lg border-0'>
        <div className='card-body'>
          <h2 className='card-title mb-3'>{course.title}</h2>
          <p className='card-text text-muted'>{course.description}</p>

          <hr />

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

          <div className='d-flex gap-3 mt-4'>
            <Link to={`/register?courseId=${course.id}`} className='btn btn-success'>
              <i className='bi bi-pencil-square me-2'></i>
              Registrera dig
            </Link>

            <Link to='/courses' className='btn btn-outline-dark'>
              <i className='bi bi-arrow-left me-2'></i>
              Tillbaka till kurserna
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
