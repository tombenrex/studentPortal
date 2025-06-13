import { Link } from 'react-router-dom'

export default function CourseCard({ id, title, description }) {
  return (
    <div className='card h-100 shadow-lg bg-transparent rounded border-dark animate-fade-slide delay-1s'>
      <div className='card-body d-flex flex-column justify-content-between'>
        <div className='text-start'>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
        <div className='align-items-end'>
          <Link to={`/courses/${id}`} className='btn-2'>
            Välj
          </Link>
        </div>
      </div>
    </div>
  )
}
