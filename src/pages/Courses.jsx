import CourseCard from '../components/CourseCard'
import courses from '../data/courses'

export default function Courses() {
  return (
    <section className='section-hero course min-vh-100'>
      <div className='light-overlay-2'></div>

      <div className='container position-relative text-white z-2 mt-5'>
        <h1 className='display-4 fw-bold mb-3 p-3 text-center header'>Tillgängliga kurser</h1>

        <div className='row'>
          {courses.map(course => (
            <div key={course.id} className='col-12 col-sm-6 col-lg-4 mb-4'>
              <CourseCard id={course.id} title={course.title} description={course.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
