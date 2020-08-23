<template>
  <div class="main" id="hsMain">
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
                  <b-tooltip multilined
                              type="is-info is-light"
                              position="is-bottom">
                  <div
                    class="icon-img is-live"
                    :style="{'background-image': `url('https://yt3.ggpht.com/a-/AOh14GifXOBWaK2De2pJO_ufNtv7euW4DKdTFAtlqw=s68-c-k-c0x00ffffff-no-rj-mo')`}"
                  ></div>
                  <template v-slot:content>
                    <!-- TODO ADD REACTIVITY -->
                    <span class="live-details">aux information goes here</span>
                  </template>
                  </b-tooltip>
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
              </button>-->
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

<style lang="scss" module>
#hsMain {
  @import "~bulma/sass/utilities/_all";

  // Set your colors
  $primary: #8c67ef;
  $primary-invert: findColorInvert($primary);
  $twitter: #4099FF;
  $twitter-invert: findColorInvert($twitter);

  // Setup $colors to use as bulma classes (e.g. 'is-twitter')
  $colors: (
      "white": ($white, $black),
      "black": ($black, $white),
      "light": ($light, $light-invert),
      "dark": ($dark, $dark-invert),
      "primary": ($primary, $primary-invert),
      "info": ($info, $info-invert),
      "success": ($success, $success-invert),
      "warning": ($warning, $warning-invert),
      "danger": ($danger, $danger-invert),
      "twitter": ($twitter, $twitter-invert)
  );

  // Links
  $link: $primary;
  $link-invert: $primary-invert;
  $link-focus-border: $primary;

  // Import Bulma and Buefy styles
  @import "~bulma";
  @import "~buefy/src/scss/buefy";
}

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
      box-sizing: border-box;
      width: 24px;
      height: 24px;
      border-radius: 5px;
      background-size: 30px 30px;
      background-position: -4px -4px;
      border: 1px solid rgba(30, 30, 30, 0.6);

      &.is-live {
        border-color: red;
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
    font-family: 'Open Sans', 'Roboto', 'Lato', monospace;
    width: 24px;
    text-align: center;
    font-size: 9px;
    margin-top: 0px;
    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white; // transform: scale(1,0.7);
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
