import { Alert, Box, Button, MenuItem, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import courses from '../data/courses'

export default function RegisterForm() {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const initialCourseId = queryParams.get('courseId') || ''

  const [form, setForm] = useState({
    name: '',
    email: '',
    courseId: initialCourseId,
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!form.name || !form.email || !form.courseId) {
      setError('Fyll i alla fält innan du skickar.')
      return
    }

    const existing = JSON.parse(localStorage.getItem('registrations') || '[]')

    const alreadyRegistered = existing.some(
      reg => reg.email === form.email && reg.courseId === form.courseId
    )

    if (alreadyRegistered) {
      setError('Du är redan registrerad på denna kurs.')
      return
    }

    const registration = {
      name: form.name,
      email: form.email,
      courseId: form.courseId,
      courseTitle: courses.find(c => c.id === parseInt(form.courseId))?.title,
    }

    const updated = [...existing, registration]
    localStorage.setItem('registrations', JSON.stringify(updated))

    setSubmitted(true)
    setError(false)
  }

  return (
    <Box maxWidth='500px' mx='auto' mt={5}>
      <Typography variant='h4' gutterBottom>
        Registrera dig till en kurs
      </Typography>

      {submitted ? (
        <Alert severity='success'>
          Tack för din registrering, {form.name}! Du har registrerat dig till "
          {courses.find(c => c.id === parseInt(form.courseId))?.title}".
        </Alert>
      ) : (
        <form onSubmit={handleSubmit}>
          <TextField
            label='Namn'
            name='name'
            fullWidth
            margin='normal'
            value={form.name}
            onChange={handleChange}
          />
          <TextField
            label='E-post'
            name='email'
            type='email'
            fullWidth
            margin='normal'
            value={form.email}
            onChange={handleChange}
          />
          <TextField
            select
            label='Välj kurs'
            name='courseId'
            fullWidth
            margin='normal'
            value={form.courseId}
            onChange={handleChange}
          >
            {courses.map(course => (
              <MenuItem key={course.id} value={course.id}>
                {course.title}
              </MenuItem>
            ))}
          </TextField>

          {error && (
            <Alert severity='error' sx={{ mt: 2 }}>
              Alla fält måste fyllas i innan du kan skicka.
            </Alert>
          )}

          <Button type='submit' variant='contained' color='primary' sx={{ mt: 3 }}>
            Skicka
          </Button>
        </form>
      )}
    </Box>
  )
}
