import CourseCard from '../components/CourseCard'
import courses from '../data/courses'

export default function Courses() {
  return (
    <main className='section-hero course min-vh-100 position-relative page-fix'>
      <div className='light-overlay-2'></div>

      <section className='text-white z-2 position-relative'>
        <h1 className='header text-center animate-fade-slide delay-1s pt-4'>Tillgängliga kurser</h1>

        <div className='row'>
          {courses.map(course => (
            <div key={course.id} className='col-12 col-sm-6 mb-4 d-flex'>
              <CourseCard {...course} />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
