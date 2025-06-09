import { Link } from 'react-router-dom'

export default function CourseCard({ id, title, description }) {
  return (
    <div className='card h-100 shadow-sm'>
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{description}</p>
        <Link to={`/courses/${id}`} className='btn btn-danger'>
          Visa detaljer
        </Link>
      </div>
    </div>
  )
}
