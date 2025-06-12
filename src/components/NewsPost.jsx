export default function NewsPost({ article }) {
  return (
    <div className='col-12 col-sm-6 col-lg-4 mb-4'>
      <div className='card h-100 shadow-sm'>
        {article.urlToImage && (
          <img
            src={article.urlToImage}
            className='card-img-top'
            alt={article.title}
            style={{ height: '180px', objectFit: 'cover' }}
          />
        )}
        <div className='card-body d-flex flex-column' style={{ padding: '1rem' }}>
          <h6 className='card-title' style={{ fontSize: '1rem' }}>
            {article.title}
          </h6>
          <p className='card-text text-muted' style={{ fontSize: '0.9rem' }}>
            {article.description?.substring(0, 100)}...
          </p>
          <a
            href={article.url}
            target='_blank'
            rel='noreferrer'
            className='mt-auto btn btn-sm btn-outline-primary'
          >
            Läs mer
          </a>
        </div>
      </div>
    </div>
  )
}
