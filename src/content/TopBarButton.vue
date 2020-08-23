<template>
  <div class="yt-simple-endpoint style-scope ytd-topbar-menu-button-renderer" tabindex="-1">
    <!-- <b-tooltip type="is-info is-light" position="is-bottom"> -->
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
        <!-- <button>
          <b-icon
            icon="account"
            size="is-small"></b-icon>
        </button> -->
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
      <!-- <template v-slot:content>
        TODO ADD REACTIVITY -->
        <!-- <span class="live-details">more</span>
      </template>
    </b-tooltip> -->
  </div>
</template>

<script>
export default {
  name: 'TopBarButton',
  props: ['channelThumbnail', 'isLive'],
  created() {},
  mounted() {},
  destroyed() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
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

<style lang="scss">
.live-details {
  font-size: 13px;
  line-height: 1em;
  padding-top: 10px;
  font-weight: 400;
  white-space: nowrap;
}
</style>