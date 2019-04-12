const router = require('express').Router()
const VideoController = require('../controllers/video')
const Multer = require('multer');
const gcsMiddlewares = require('../middlewares/google-cloud-storage')

router.post('/', VideoController.create)
router.get('/', VideoController.findAll)

  
const multer = Multer({
  storage: Multer.MemoryStorage,
  limits: {
    fileSize: 20 * 1024 * 1024, // Maximum file size is 10MB
  },
});

router.post(
  '/upload',
  multer.single('video'),
  gcsMiddlewares.sendUploadToGCS,
  (req, res, next) => {
    //   console.log(req.file, 'ini file')
    if (req.file && req.file.gcsUrl) {
      return res.send(req.file.gcsUrl);
    }
    return res.status(500).send('Unable to upload');
  },
);

module.exports = router