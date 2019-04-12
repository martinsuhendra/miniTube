const Video = require('../models/video')
const multer = require('multer')
const path = require('path')
 
class VideoController {

    static findAll(req,res) {
        Video.find()
        .then(found => {
            console.log('masuk findAll')
            console.log(found)
            res.status(200).json(found)
            
        })
        .catch(err => {
            res.status(500).json({
                error:err,
                message:"error getting data from server"
            })
        })
    }

    static findOne(req,res) {
        Video.findOne({
            _id:req.params.id
        })
        .then(found => {
            res.status(200).json(found)
        })
        .catch(err => {
            res.status(500).json({
                error:err,
                message:"server- error di findOne"
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
            // console.log(created,'ini created')
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

    static updateLike(req,res) {
        Video.findOne({
            _id:req.params.id
        })
        .then(found => {
            found.like += 1
            return found.save()
        })
        .then(saved => {
            res.status(200).json(saved)
        })
        .catch(err => {
            res.status(500).json({
                errror:err,
                message: "error update like"
            })
        })
        
    }

    static removeLike(req,res) {
        Video.findOne({
            _id:req.params.id
        })
        .then(found => {
            found.like -= 1
            console.log(found)
            return found.save()
        })
        .then(saved => {
            res.status(200).json(saved)
        })
        .catch( err => {
            res.status(500).json({
                error:err,
                message:"error removing like"
            })
        })
    }
}


module.exports = VideoController