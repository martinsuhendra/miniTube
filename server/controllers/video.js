const Video = require('../models/video')
const multer = require('multer')
const path = require('path')
 
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
            title: req.body.videoForm.title,
            user:req.body.videoForm.user,
            video_path:req.body.video_path,
            thumbnail_path:req.body.videoForm.thumbnail_path,
            description: req.body.videoForm.description,
            like: req.body.videoForm.like,
            public:0
        })
        .then(created => {
            console.log("INPUT SUKSES");
            res.status(201).json(created)
        })
        .catch(err => {
            console.log(err.message);
            res.status(500).json({
                message: "server - fail to  save data in database"
            })
        })
    }
}


module.exports = VideoController