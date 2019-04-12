Vue.component('video-form',{
    props: [''],
    
    template: `
    <form class="col s12" enctype="multipart/form-data" id="video-form" >
              <div class="row">
                <div class="input-field col s6">
                  <input placeholder="" v-model="user" id="first_name" type="text" class="validate">
                  <label for="user">Full Name</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s6">
                  <input id="title" type="text" v-model="title">
                  <label for="text">Title</label>
                </div>
              </div>
              <div class="row">
                <div class="col s12">
                  <div class="input-field col s12">
                      <i class="material-icons prefix">mode_edit</i>
                      <textarea id="icon_prefix2" class="materialize-textarea" v-model="description"></textarea>
                      <label for="icon_prefix2">Description</label>
                  </div>
                </div>
              </div>
              <div class="file-field input-field">
                <div class="btn">
                  <span>File</span>
                  <input type="file" id="file" ref="file" v-on:change="uploadImage">
                </div>
                <div class="file-path-wrapper">
                  <input class="file-path validate" type="text" v-model="video_path">
                </div>
              </div>
              <div class="row" style="display: flex; justify-content:space-around">
                  <a class="waves-effect waves-light btn-small" v-on:click="submitVideoForm"><i class="material-icons left">cloud_upload</i>Upload</a>
                  <a class="waves-effect waves-light btn-small" v-on:click="showContent"><i class="material-icons left"></i>Cancel</a>
              </div>
            </form>
    `,
    data() {
        return {
            title: '',
            user: '',
            video_path: '',
            description: '',
            thumbnail_path:'',
            like: 0,
            public: '',
            file: null
        }
    },
    methods: {
        submitVideoForm() {
            let data = {
              title: this.title,
              user: this.user,
              description: this.description,
              thumbnail_path: this.thumbnail_path,
              like: this.like,
              public: this.public,
              file : this.file
            }
            // console.log('---------------')
            this.$emit('submit-video-form', data)
        },
        uploadImage(event) {
            this.file = event.target.files[0]
            // console.log(this.file)
        },
        hide(){
          this.$emit('show-content')
        }
    }
})