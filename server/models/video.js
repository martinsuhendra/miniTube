const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    title: String,
    user: String,
    video_path: String,
    thumbnail_path:String,
    like: Number,
    public: Boolean
})

const Video = mongoose.model('Video', videoSchema)

module.exports = Video;