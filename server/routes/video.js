const router = require('express').Router()
const VideoController = require('../controllers/video')

router.post('/', VideoController.create)
router.get('/', VideoController.findAll)

module.exports = router