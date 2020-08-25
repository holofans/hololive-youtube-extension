<template>
  <div class="yt-simple-endpoint" tabindex="-1">
    <div id="button" class="style-default">
      <button id="button" class="not-yt-icon-button" @click="toggleSchedule">
        <div class="yt-icon-holder">
          <div class="icon-img">•••</div>
        </div>
        <span class="note">more</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBarCalendarButton',
  created() {},
  mounted() {},
  destroyed() {},
  methods: { toggleSchedule() {
    window.open('https://hololive.jetri.co/#/');
  } },
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
    border: 1px solid rgba(30, 30, 30, 0.2);
    font-size: 15px;
    font-weight: 700;
    line-height: 14px;
    padding-top:4px;
    color: rgba(76, 226, 226, 1);
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
  position: relative;
  font-family: 'Open Sans', 'Roboto', 'Lato', monospace;
  width: 24px;
  color: #222;
  text-align: center;
  float:left;
  font-size: 9px;
  margin-top: 0px;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white; // transform: scale(1,0.7);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
}
</style>
