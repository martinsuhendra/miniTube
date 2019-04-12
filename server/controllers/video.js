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

    static create(req,res) {
        console.log("MASUKKKK");
        
        const storage = multer.diskStorage({
            destination: '../public/uploads',
            filename: function(req, file, cb){
                cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
            }
        })
        
        const upload = multer({
            storage: storage,
            limits:{fileSize: 100000000},
            fileFilter: function(req, file,cb){
                checkFileType(file, cb)
            }
        }).single('video_path')


        function checkFileType(file, cb){
            const filetypes = /MPEG-4|webm|mkv|flv|avi|wmv|mp4|m4v|3gp|flv|f4v|f4p|f4a|f4b/
            const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
            const mimetype = filetypes.test(file.mimetype)
            console.log("MASUK CHECKER");
            
            if(mimetype && extname){
                return cb(null, true)
            }else{
                cb('Error : Video Only!')
            }
        }

        upload(req, res, (err) =>{
            if(err){
                console.log(err);
                
            }else{
                if(req.file== undefined){
                    console.log('No File Selected!');
                }else{

                    Video.create({
                        title: req.body.title,
                        user:req.body.user,
                        video_path:req.file.path,
                        thumbnail_path:req.body.thumbnail_path,
                        description: req.body.description,
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
        })
    }


}


module.exports = VideoController