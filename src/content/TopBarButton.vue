<template>
  <div class="yt-simple-endpoint" tabindex="-1">
    <div id="button" class="style-default">
      <button id="button" class="not-yt-icon-button" @click="playCurrent">
        <div class="yt-icon-holder">
          <div
            class="icon-img"
            :class="{'is-live': isLive}"
            :style="{'background-image': `url('${channelThumbnail}')`}"
          ></div>
        </div>
        <span class="note is-live" v-if="isLive">LIVE</span>
        <span class="note" v-if="!isLive">{{timeToLive}}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBarButton',
  props: ['channelThumbnail', 'isLive', 'currentVideoURL', 'timeToLive'],
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    toggleSchedule() {},
    playCurrent() {
      window.location = this.currentVideoURL;
    },
  },
};
</script>

<style lang="scss" scoped>
.not-yt-icon-button {
  vertical-align: middle;
  color: inherit;
  outline: none;
  background: none;
  margin: 0;
  border: none;
  padding: 0;
  width: 100%;
  height: 100%;
  line-height: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
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
  color: #222;
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
