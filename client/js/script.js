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
        videos_list: [],
        onShow: { video_path: '' },
        fbLink: '',
        formAdd : false,
        mainContent : true
    },   
    created() {
        this.loadVideo()
    },
    methods:{

        loadVideo() {
            console.log('masuk load video - vue')
            axios
            .get(serverURL + '/videos')
            .then(({data})=> {
                this.formAdd = false
                this.mainContent = true
                this.videos_list = data
            })
            .catch( err => {
                console.log(err)
            })
        },
        submitComponent(videoForm) {

            const fd = new FormData()
            fd.append('video', videoForm.file, videoForm.file.name)
            axios.post(`${serverURL}/videos/upload`,fd)
            .then(({data})=>{
                // this.loadVideo()
                // this.formAdd = false
                // this.mainContent = true
                console.log(videoForm,'ini videoform');
                console.log(data);
                console.log("SUKSES");
                return axios.post(`${serverURL}/videos`,{videoForm, video_path: data})
            })
            .then(data=>{
                swal("success","Successfully uploaded the video to server!","success" );
                // this.videos_list.push(data)
                this.loadVideo()
                this.mainContent = true
                this.formAdd = false
                console.log(data);
            })
            .catch(err=>{
                console.log(err.ma);
                console.log("GAGAL");
            })
        },
        findOneVideo(id) {
            console.log(id)
            console.log('masuk findone vid')
            axios
            .get(serverURL + '/videos/' + id)
            .then(({data}) => {
                this.onShow = data
                console.log(data)
            })
            .catch(err => {
                console.log(err)
                console.log('eror di findOne -client')
            })
        },
        showForm(){
            this.formAdd = true
            this.mainContent = false
        },
        showContent(){
            this.mainContent = true
            this.formAdd = false
        }
    }
})