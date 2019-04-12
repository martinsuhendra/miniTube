Vue.component('video-frame', {
    props: ['videos_list'],
    template: `
        <div>
        <div class="row" v-for="(video, index) in videos_list" :key="index">
            <!-- Kiri -->
            <div class="container center-align">
            <iframe
            width="300"
            v-bind:src="video.video_path"
            frameborder="0"
            allowfullscreen
            controls="controls" 
            autoplay="false"
            ></iframe>
            <div class="container center-align">
                <a href="#" v-on:click="passVideo(video._id)">{{video.title}}</a>
                </div>
            </div>
        </div>
        </div>
    `,
    data() {
        return {
            videos_list : data
        }
    },
    methods: {
        passVideo(id){
            this.$emit('pass-video', id)
        }
    }
})