import { Link } from 'react-router-dom'

export default function CourseCard({ id, title, description }) {
  return (
    <div className='card h-100 shadow-lg bg-transparent rounded border-dark'>
      <div className='card-body d-flex align-items-end flex-column justify-content-between p-3 border-4 rounded'>
        <div className='text-start'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{description}</p>
        </div>

        <Link to={`/courses/${id}`} className='btn-2 mt-3 animate-fade-slide delay-2s'>
          Visa detaljer
        </Link>
      </div>
    </div>
  )
}
