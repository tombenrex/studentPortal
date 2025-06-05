import { BrowserRouter, Routes, Route } from 'react-router-dom'

// 1. Importera alla dina pages
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import News from './pages/News'
import Register from './pages/Register'

// 2. (Valfritt) Navbar-komponent
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* visas alltid */}
      <Routes>
        {/* Alla routes pekar på dina pages */}
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<CourseDetails />} />
        <Route path='/news' element={<News />} />
        <Route path='/register' element={<Register />} />

        {/* Fallback-sida */}
        <Route path='*' element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
