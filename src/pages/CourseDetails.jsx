import { useParams } from 'react-router-dom'
import courses from '../data/courses'

export default function CourseDetails() {
  const { id } = useParams()
  const course = courses.find(c => c.id === parseInt(id))

  if (!course) {
    return (
      <div className='container mt-4'>
        <h2>Course not found</h2>
        <p>No course exists with ID: {id}</p>
      </div>
    )
  }

  return (
    <div className='container mt-4'>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </div>
  )
}
