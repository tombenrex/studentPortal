import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className='bg-primary text-white text-center py-5'>
        <div className='container'>
          <h1 className='display-4'>Welcome to LearnHub</h1>
          <p className='lead'>Empowering students with modern education tools</p>
          <Link to='/register' className='btn btn-light btn-lg mt-3'>
            Get Started
          </Link>
        </div>
      </section>

      {/* Courses Preview */}
      <section className='container py-5'>
        <h2 className='mb-4 text-center'>Explore Our Courses</h2>
        <p className='text-center'>
          Choose from a variety of programming and tech courses designed for beginners and advanced learners.
        </p>
        <div className='text-center'>
          <Link to='/courses' className='btn btn-outline-primary mt-3'>
            View Courses
          </Link>
        </div>
      </section>

      {/* News Preview */}
      <section className='bg-light py-5'>
        <div className='container'>
          <h2 className='mb-4 text-center'>Latest News</h2>
          <p className='text-center'>
            Stay updated with news, events, and announcements from our community.
          </p>
          <div className='text-center'>
            <Link to='/news' className='btn btn-outline-secondary mt-3'>
              Read News
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
