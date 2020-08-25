<template>
  <div class="yt-simple-endpoint" tabindex="-1">
    <div id="button" class="style-default">
      <button id="button" class="loading-spinner-brace" @click="toggleSchedule">
        <div class="loading-holder">
          <div class="loading-rect"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>
        </div>
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
.loading-spinner-brace {
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
.loading-holder {
  display: block;
  width: 24px;
  height: 24px;
  position: relative;

  .loading-rect {
    box-sizing: border-box;
    width: 24px;
    height: 24px;
    border-radius: 5px;
    font-size: 15px;
    line-height: 14px;
    color: rgba(76, 226, 226, 1);
  }
}
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 24px;
  height: 24px;
}
.lds-ellipsis div {
  position: absolute;
  top: 10px;
  background-color:whitesmoke;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 3px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 3px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 10px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 17px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(7px, 0);
  }
}

</style>
