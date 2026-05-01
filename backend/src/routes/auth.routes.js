import { Router } from 'express'

const router = Router()

/**
 * POST /api/auth/login
 * Placeholder – replace with real auth logic (JWT, session, etc.)
 */
router.post('/login', (req, res) => {
  const { email, password } = req.body

  // TODO: validate credentials against DB
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' })
  }

  // Stub response – swap out for real token generation
  res.json({
    message: 'Login successful',
    user: { id: 1, email },
    token: 'stub-jwt-token',
  })
})

/**
 * POST /api/auth/register
 */
router.post('/register', (req, res) => {
  const { email, password, name } = req.body

  if (!email || !password || !name) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  // TODO: create user in DB
  res.status(201).json({
    message: 'Registration successful',
    user: { id: 2, email, name },
  })
})

/**
 * POST /api/auth/logout
 */
router.post('/logout', (_req, res) => {
  // TODO: invalidate token / clear session
  res.json({ message: 'Logged out successfully' })
})

export default router
