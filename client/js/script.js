const serverURL = `http://localhost:3000`

new Vue({
    el: `#app`,
    data:{
        title: '',
        user: '',
        video_path: '',
        description: '',
        thumbnail_path:'',
        like: '',
        public: '',
        file:''
    },   
    methods:{
        addVideo(){
            console.log("TES MASUK");
            
            let videoForm = {
                title: this.title,
                user: this.user,
                video_path: this.video_path,
                description: this.description,
                thumbnail_path: this.thumbnail_path,
                like: this.like,
                public: this.public,
            }
            console.log(videoForm);
            axios.post(serverURL+'/video',videoForm)
            .then(response=>{
                console.log(response);
                console.log("SUKSES");
            })
            .catch(err=>{
                console.log(err.ma);
                console.log("GAGAL");
            })
        },
        handleFileUpload(){
            this.file = this.$refs.file.files[0];
        }

    }
})