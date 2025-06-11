import { Link } from 'react-router-dom'

export default function CourseCard({ id, title, description }) {
  return (
    <div className='card h-100 shadow-lg bg-linear-1 border rounded border-dark'>
      <div className='card-body d-flex flex-column justify-content-between p-3 border-light border-4 rounded'>
        <div>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{description}</p>
        </div>
        <Link to={`/courses/${id}`} className='btn btn-outline-dark mt-3'>
          Visa detaljer
        </Link>
      </div>
    </div>
  )
}
