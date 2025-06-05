

import { useEffect, useState } from 'react'

export default function News() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://api.sampleapis.com/futurama/episodes') // Du kan byta till skol-API
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch news')
        return res.json()
      })
      .then(data => {
        setNews(data.slice(0, 5)) // visa bara första 5
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading news...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className='container mt-4'>
      <h1 className='mb-4'>School News</h1>
      {news.map((item, index) => (
        <div key={index} className='mb-3 p-3 border rounded shadow-sm'>
          <h4>{item.title || item.name}</h4>
          <p>{item.desc || item.desc || 'No description available.'}</p>
          <small className='text-muted'>
            {item.originalAirDate ? `Published: ${item.originalAirDate}` : ''}
          </small>
        </div>
      ))}
    </div>
  )
}
