Vue.component('main-video', {
    props: ['onShow'],
    template: `
    <div class="col s9 m8 ex2" style="margin-left: 140px;">
    <!-- Teal page content  -->
    <h5 style="display: flex; justify-content: center">Video Title</h5>
    <div data-aos="zoom-in">
      <div
        class="video-container"
        style="display: flex; justify-content: center">
        <iframe
          width="853"
          height="480"
          v-bind:src="onShow.video_path"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <h5>Description</h5>
    <p>
      {{onShow.description}}
    </p>
    <div data-aos="flip">
      <a class="waves-effect waves-light btn-small"><i class="material-icons left">thumb_up</i>Like</a>
      <a class="waves-effect waves-light btn-small"
        ><i class="fab fa-facebook-f"></i> Share</a
      >
    </div>
  </div>
    `,
    data() {
        return {
            onShow: onShow
        }
    }
})