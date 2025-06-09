import { useParams } from 'react-router-dom'
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
    <div className='container mt-5'>
      <div className='card'>
        <div className='card-body'>
          <h2 className='card-title'>{course.title}</h2>
          <p className='card-text'>{course.description}</p>
        </div>
      </div>
    </div>
  )
}
