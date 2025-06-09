import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import CourseDetails from './pages/CourseDetails'
import Courses from './pages/Courses'
import Home from './pages/Home'
import News from './pages/News'
import Register from './pages/Register'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<CourseDetails />} />
        <Route path='/news' element={<News />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<h1 className='text-center mt-5'>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
