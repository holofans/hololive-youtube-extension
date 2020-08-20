<template>
  <div class="main">
    <div class="top-bar-elements">
      <ytd-topbar-menu-button-renderer
        class="style-scope ytd-masthead style-default"
        use-keyboard-focused
        is-icon-button
        has-no-text
        v-pre
      >
      <!-- this doesnt work -->
        <div id="button" class="style-scope ytd-topbar-menu-button-renderer">
          <a class="yt-simple-endpoint style-scope ytd-topbar-menu-button-renderer" tabindex="-1">
            <yt-icon-button
              id="button"
              class="style-scope ytd-topbar-menu-button-renderer style-default"
              v-pre
            >
              <!--css-build:shady-->
              <button v-pre id="button" class="style-scope yt-icon-button" aria-label="Create">
                <yt-icon v-pre class="style-scope ytd-topbar-menu-button-renderer">
                  <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                    style="pointer-events: none; display: block; width: 100%; height: 100%;"
                    class="style-scope yt-icon"
                  >
                    <g class="style-scope yt-icon">
                      <path
                        d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"
                        class="style-scope yt-icon"
                      />
                    </g>
                  </svg>
                  <!--css-build:shady-->
                </yt-icon>
              </button>
            </yt-icon-button>
          </a>
        </div>
      </ytd-topbar-menu-button-renderer>
      <!-- <div class="top-bar-img">
          <img src="https://yt3.ggpht.com/a/AATXAJxta5htwKOSOGXSWuWv6gMxf_SINCZ60_WG3vOM=s48-c-k-c0xffffffff-no-rj-mo">
        </div>
      <div>Live now</div>-->
      <!-- <div class="social-share__links"> -->
      <!-- <a href="javaScript:void(0);" class="social-share__link social-share__link--facebook">Facebook</a>
        <a href="javaScript:void(0);" class="social-share__link social-share__link--twitter">Twitter</a>
      <a href="javaScript:void(0);" class="social-share__link social-share__link--google">Google +</a>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data() {
    return {
      anchorLeft: 0,
    };
  },
  created() {
    window.addEventListener('resize', this.resetButtonPosition);
  },
  mounted() {
    this.resetButtonPosition();
  },
  destroyed() {
    window.removeEventListener('resize', this.resetButtonPosition);
  },
  methods: {
    resetButtonPosition(e) {
      // your code for handling resize...
      this.anchorLeft = document.getElementById('logo').offsetLeft + document.getElementById('logo').offsetWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
.schedule-button {
  .top-bar-img img {
    width: 20px;
    height: 20px;
  }
  /* color: red;
  position: fixed;
  z-index: 5000;
  top: 5px;
  left: 15%; */
}
img {
  border: 1px solid red;
}
</style>
