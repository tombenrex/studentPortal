import { useEffect, useState } from 'react'
import NewsPost from '../components/NewsPost'

export default function News() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/everything?` +
            new URLSearchParams({
              q: 'harvard university',
              language: 'sv',
              pageSize: '10',
              apiKey: import.meta.env.VITE_NEWS_API_KEY,
            })
        )
        const data = await res.json()
        if (data.status !== 'ok') throw new Error(data.message)
        setArticles(data.articles)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  return (
    <main className='wrapper bg-gradient-2 pagefix'>
      <section className='container animate-fade-slide'>
        <h2 className='subheader text-center mb-4'>Senaste utbildningsnyheterna</h2>

        {loading && <p className='text-muted'>Hämtar nyheter...</p>}
        {error && <p className='text-danger'>Fel: {error}</p>}

        {articles.length === 0 && !loading && !error ? (
          <p className='text-muted'>Inga nyheter hittades.</p>
        ) : (
          <div className='row delay-1s'>
            {articles.map((article, index) => (
              <NewsPost key={index} article={article} />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
