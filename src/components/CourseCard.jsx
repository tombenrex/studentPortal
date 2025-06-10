import { Link } from 'react-router-dom'

export default function CourseCard({ id, title, description }) {
  return (
    <div className='card h-100 shadow-sm bg-primary'>
      <div className='card-body p-3 border-1 border border-black rounded'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{description}</p>
        <Link to={`/courses/${id}`} className='btn btn-outline-dark'>
          Visa detaljer
        </Link>
      </div>
    </div>
  )
}
