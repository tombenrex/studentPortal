export default function NewsPost({ article }) {
  return (
    <div className='col-12 col-sm-6 col-md-4 col-lg-3 d-flex'>
      <div className='card shadow-sm flex-fill h-100'>
        {article.urlToImage && (
          <img
            src={article.urlToImage}
            className='card-img-top'
            alt={article.title}
            style={{ height: '160px', objectFit: 'cover' }}
          />
        )}
        <div className='card-body d-flex flex-column'>
          <h6 className='card-title fs-6'>{article.title}</h6>
          <p className='card-text text-muted small'>{article.description?.substring(0, 60)}...</p>
          <a
            href={article.url}
            target='_blank'
            rel='noreferrer'
            className='btn btn-sm btn-outline-primary mt-auto align-self-start'
          >
            Läs mer
          </a>
        </div>
      </div>
    </div>
  )
}
