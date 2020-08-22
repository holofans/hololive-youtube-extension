<template>
  <div class="main">
    <!-- Contains things that go into the top-bar of Youtube  -->
    <div class="top-bar-elements">
      <div
        class="style-scope ytd-masthead style-default"
        use-keyboard-focused
        is-icon-button
        has-no-text
      >
      <!-- A series of confusing classes to make youtube css feel compatible with this button -->
        <div id="scheduleButton" class="style-scope ytd-topbar-menu-button-renderer">
          <div class="yt-simple-endpoint style-scope ytd-topbar-menu-button-renderer" tabindex="-1">
            <div id="button" class="style-scope ytd-topbar-menu-button-renderer style-default">
              <button id="button" class="style-scope yt-icon-button">
                <div class="style-scope ytd-topbar-menu-button-renderer yt-icon-holder">
                  <div
                    class="icon-img is-live"
                    :style="{'background-image': `url('https://yt3.ggpht.com/a-/AOh14GifXOBWaK2De2pJO_ufNtv7euW4DKdTFAtlqw=s68-c-k-c0x00ffffff-no-rj-mo')`}"
                  ></div>
                </div>
                <span class="note is-live">LIVE</span>
              </button>
              <!-- <button id="button" class="style-scope yt-icon-button">
                <div class="style-scope ytd-topbar-menu-button-renderer yt-icon-holder">
                  <div
                    class="icon-img"
                    :style="{'background-image': `url('https://yt3.ggpht.com/a-/AOh14GifXOBWaK2De2pJO_ufNtv7euW4DKdTFAtlqw=s68-c-k-c0x00ffffff-no-rj-mo')`}"
                  ></div>
                </div>
                <span class="note">1h</span>
              </button> -->

            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Top-Bar Elements -->
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
.main {
  margin-right: 8px;
}
.top-bar-elements {
  #scheduleButton {
    line-height: 1;
    padding: var(--yt-button-icon-padding, 8px);
    width: 24px;
    height: 24px;
  }

  .yt-icon-holder {
    display: block;
    width: 24px;
    height: 24px;
    position: relative;

    .icon-img {
      box-sizing: content-box;
      width: 24px;
      height: 24px;
      border-radius: 5px;
      background-size: 30px 30px;
      background-position: -3px -3px;
      border: 1px solid rgba(30,30,30, 0.6);

      &.is-live {
        border: 1px solid red;
        box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.4);
        transform: scale(1);
        animation: pulse 5s infinite;
      }
    }
  }
  .note {
    z-index: 3;
    float: left;
    position: relative;
    font-family: "Open Sans", "Roboto", "Lato", monospace;
    width: 24px;
    text-align: center;
    font-size: 9px;
    margin-top: 0px;
    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;    // transform: scale(1,0.7);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: geometricPrecision;
    &.is-live {
      color: red;
    }
  }

}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.8);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 5px rgba(255, 0, 0, 0);
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
  }
}
</style>
