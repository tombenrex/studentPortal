import { Link } from 'react-router-dom'
import courses from '../data/courses'

export default function Courses() {
  return (
    <div className='container mt-4'>
      <h1 className='mb-4'>Available Courses</h1>
      <div className='row'>
        {courses.map(course => (
          <div key={course.id} className='col-md-4 mb-4'>
            <div className='card h-100 shadow-sm'>
              <div className='card-body'>
                <h5 className='card-title'>{course.title}</h5>
                <p className='card-text'>{course.description}</p>
                <Link to={`/courses/${course.id}`} className='btn btn-primary'>
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
