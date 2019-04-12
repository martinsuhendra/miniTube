const router = require('express').Router()
const videoRouter = require('./video')

router.use('/videos', videoRouter)

module.exports = router