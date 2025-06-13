import CourseCard from '../components/CourseCard'
import courses from '../data/courses'

export default function Courses() {
  return (
    <main className='main-hero bg-courses'>
      <div className='light-overlay-2'></div>

      <section className='text-white z-2 position-relative container py-5'>
        <h1 className='header text-center animate-fade-slide delay-1s mt-2'>Tillgängliga kurser</h1>

        <div className='row'>
          {courses.map(course => (
            <div key={course.id} className='col-md-4 mb-4'>
              <CourseCard {...course} />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
