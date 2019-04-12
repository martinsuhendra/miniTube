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
        file: null
    },   
    methods:{
        uploadImage(event) {
            this.file = event.target.files[0]
        },
        addVideo(){
            let videoForm = {
                title: this.title,
                user: this.user,
                description: this.description,
                thumbnail_path: this.thumbnail_path,
                like: this.like,
                public: this.public,
            }
            const fd = new FormData()
            fd.append('video', this.file, this.file.name)
            axios.post(`${serverURL}/videos/upload`,fd)
            .then(({data})=>{
                return axios.post(`${serverURL}/videos`,{videoForm, video_path: data})
            })
            .then(data=>{
                console.log(data);
            })
            .catch(err=>{
                console.log(err.message);
                console.log("GAGAL");
            })
        }
    }
})