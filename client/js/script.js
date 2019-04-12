const serverURL = `http://localhost:3000`

new Vue({
    el: `#app`,
    data:{
        title: '',
        user: '',
        video_path: '',
        description: '',
        thumbnail_path:'',
        like: 0,
        public: '',
        file: null,
        videos_list: []
    },   
    created() {
        this.loadVideo()
    },
    methods:{
        // uploadImage(event) {
        //     this.file = event.target.files[0]
        // },
        addVideo(){
            // console.log("TES MASUK");
            // let videos = new FormData(document.getElementById('video-form'))
            // console.log(videos)
            // let videoForm = {
            //     title: this.title,
            //     user: this.user,
            //     video_path: this.video_path,
            //     description: this.description,
            //     thumbnail_path: this.thumbnail_path,
            //     like: this.like,
            //     public: this.public,
            // }
            const fd = new FormData()
            fd.append('video', this.file, this.file.name)
            axios.post(`${serverURL}/videos/upload`,fd)
            .then(({data})=>{
                console.log(data);
                console.log("SUKSES");
            })
            .catch(err=>{
                console.log(err.ma);
                console.log("GAGAL");
            })
        },
        loadVideo() {
            console.log('masuk load video - vue')
            axios
            .get(serverURL + '/videos')
            .then(({data})=> {
                
                this.videos_list = data
            })
            .catch( err => {
                console.log(err)
            })
        },
        submitComponent(data) {
            const fd = new FormData()
            fd.append('video', this.file, this.file.name)
            axios.post(`${serverURL}/videos/upload`,fd)
            .then(({data})=>{
                console.log(data);
                console.log("SUKSES");
            })
            .catch(err=>{
                console.log(err.ma);
                console.log("GAGAL");
            })
        }
    }
})