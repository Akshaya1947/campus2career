// Lightweight in-memory rate limiter middleware

const ipHits = new Map()

// Clean up stale entries every 10 minutes
setInterval(() => {
  const now = Date.now()
  for (const [key, record] of ipHits.entries()) {
    if (now - record.resetTime > 0) {
      ipHits.delete(key)
    }
  }
}, 10 * 60 * 1000)

function createRateLimiter({ windowMs = 60 * 1000, max = 30, message = 'Too many requests, please try again later.' }) {
  return function rateLimiter(req, res, next) {
    const ip = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown'
    const routeKey = `${ip}:${req.baseUrl || req.path}`
    const now = Date.now()

    let record = ipHits.get(routeKey)
    if (!record || now > record.resetTime) {
      record = {
        count: 1,
        resetTime: now + windowMs,
      }
      ipHits.set(routeKey, record)
      return next()
    }

    record.count += 1

    if (record.count > max) {
      const retryAfter = Math.ceil((record.resetTime - now) / 1000)
      res.setHeader('Retry-After', retryAfter)
      return res.status(429).json({
        message,
        retryAfterSeconds: retryAfter,
      })
    }

    next()
  }
}

// Strict limiter for authentication (10 attempts per minute)
const authLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  max: 10,
  message: 'Too many authentication attempts. Please wait a minute before trying again.'
})

// Strict limiter for AI generation (20 requests per minute)
const aiLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  max: 20,
  message: 'AI request limit reached. Please wait a moment before sending another prompt.'
})

// General API limiter (120 requests per minute)
const generalLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  max: 120,
  message: 'Too many requests from this IP. Please slow down.'
})

module.exports = {
  createRateLimiter,
  authLimiter,
  aiLimiter,
  generalLimiter,
}
