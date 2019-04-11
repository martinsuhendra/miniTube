const Video = require('../models/video')

class VideoController {

    static findAll(req,res) {
        Video.find()
        .then(found => {
            res.status(200).json(found)
        })
        .catch(err => {
            res.status(500).json({
                error:err,
                message:"error getting data from server"
            })
        })
    }

    static create(req,res) {
        Video.create({
            title: req.body.title,
            user:req.body.user,
            video_path:req.body.video_path,
            thumbnail_path:req.body.thumbnail_path,
            like: req.body.like,
            public:req.body.public
        })
        .then(created => {
            res.status(201).json(created)
        })
        .catch(err => {
            res.status(500).json({
                message: "server - fail to  save data in database"
            })
        })
    }


}


module.exports = VideoController