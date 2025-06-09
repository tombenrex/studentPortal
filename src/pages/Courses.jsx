import CourseCard from '../components/CourseCard'
import courses from '../data/courses'

export default function Courses() {
  return (
    <header className='section-hero courses'>
      <div className='white-overlay'></div>

      <div className='container position-relative text-white z-2'>
        <h1 className='display-4 fw-bold mb-5 text-center header'>Tillgängliga kurser</h1>

        <div className='row'>
          {courses.map(course => (
            <div key={course.id} className='col-md-4 mb-4'>
              <CourseCard id={course.id} title={course.title} description={course.description} />
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
