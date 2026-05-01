import { Router } from 'express'

const router = Router()

/**
 * GET /api/ping
 * Quick liveness check for the frontend to verify API connectivity.
 */
router.get('/ping', (_req, res) => {
  res.json({ message: 'pong', timestamp: new Date().toISOString() })
})

// TODO: Add your feature routes here, e.g.:
// import userRoutes from './user.routes.js'
// router.use('/users', userRoutes)

export default router
