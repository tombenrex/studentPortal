import { Link } from 'react-router-dom'
import courses from '../data/courses'

export default function Courses() {
  return (
    <header className='section-hero courses'>
      <div className='white-overlay'></div>

      <div className='container position-relative text-white z-2'>
        <h1 className='display-1 fw-bold'></h1>

        <div className='container position-relative' style={{ zIndex: 2 }}>
          <h1 className='display-4 fw-bold mb-5 text-center header'>Tillgängliga kurser</h1>

          <div className='row'>
            {courses.map(course => (
              <div key={course.id} className='col-md-4 mb-4'>
                <div className='card h-100 shadow-sm'>
                  <div className='card-body'>
                    <h5 className='card-title'>{course.title}</h5>
                    <p className='card-text'>{course.description}</p>
                    <Link to={`/courses/${course.id}`} className='btn btn-danger'>
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
