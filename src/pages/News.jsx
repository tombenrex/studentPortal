

// import { useEffect, useState } from 'react'

// export default function News() {
//   const [news, setNews] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     fetch('https://api.sampleapis.com/futurama/episodes') 
//       .then(res => {
//         if (!res.ok) throw new Error('Failed to fetch news')
//         return res.json()
//       })
//       .then(data => {
//         setNews(data.slice(0, 5)) 
//         setLoading(false)
//       })
//       .catch(err => {
//         setError(err.message)
//         setLoading(false)
//       })
//   }, [])

//   if (loading) return <p>Loading news...</p>
//   if (error) return <p>Error: {error}</p>

//   return (
//     <div className='container mt-4'>
//       <h1 className='mb-4'>School News</h1>
//       {news.map((item, index) => (
//         <div key={index} className='mb-3 p-3 border rounded shadow-sm'>
//           <h4>{item.title || item.name}</h4>
//           <p>{item.desc || item.desc || 'No description available.'}</p>
//           <small className='text-muted'>
//             {item.originalAirDate ? `Published: ${item.originalAirDate}` : ''}
//           </small>
//         </div>
//       ))}
//     </div>
//   )
// }



import { useEffect, useState } from 'react'
import axios from 'axios'

function News() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    axios
      .get('https://newsdata.io/api/1/news?apikey=YOUR_API_KEY&q=education&language=en')
      .then(res => setArticles(res.data.results))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className='container mt-5'>
      <h2 className='mb-4'>Latest Education News</h2>
      <div className='row'>
        {articles.map((article, idx) => (
          <div className='col-md-4 mb-3' key={idx}>
            <div className='card h-100'>
              <div className='card-body'>
                <h5 className='card-title'>{article.title}</h5>
                <p className='card-text'>{article.description}</p>
                <a href={article.link} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News
