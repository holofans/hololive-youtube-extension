<template>
  <div class="main" id="hsMain">
    <!-- Contains things that go into the top-bar of Youtube  -->
    <div class="top-bar-elements">

      <div class="scheduleButton" v-for="k in showableVideos" :key="k.yt_video_key">
        <TopBarButton
          :channelThumbnail="k.channel.photo"
          :isLive="k.status == 'live'"
          :currentVideoURL="`https://www.youtube.com/watch?v=${k.yt_video_key}`"
          :timeToLive="timeDiff(new Date(k.live_schedule), currentTime)"
        ></TopBarButton>
      </div>

      <div class="scheduleButton">
        <TopBarCalendarButton />
      </div>
    </div>

    <!-- End Top-Bar Elements -->
  </div>
</template>

<script>
import TopBarButton from './TopBarButton.vue';
import TopBarCalendarButton from './TopBarCalendarButton.vue';

export default {
  name: 'Content',
  components: { TopBarButton, TopBarCalendarButton },
  data() {
    return {
      lastQuery: new Date(0),
      maxSpace: 0,
      liveData: {},
      currentTime: +(new Date()),
    };
  },
  computed: {
    showableVideos() {
      const { live, upcoming } = this.liveData;
      if (!live || !upcoming) return [];
      const live_showable = live.length <= this.maxSpace ? live : live.slice(0, this.maxSpace);
      const upcoming_sorted = upcoming.sort((e1, e2) => e1.live_schedule > e2.live_schedule);
      const upcoming_showable = live.length >= this.maxSpace
        ? [] : upcoming_sorted.slice(0, this.maxSpace - live.length);
      return live_showable.concat(upcoming_showable);
    },
  },
  created() {
    window.addEventListener('resize', this.recalcSpace);
  },
  async beforeMount() {
    this.recalcSpace();
    await this.queryLive();
  },
  mounted() {},
  destroyed() {
    window.removeEventListener('resize', this.recalcSpace);
  },
  watch: {
    currentTime: {
      handler() {
        setTimeout(() => {
          this.currentTime = +(new Date());
        }, 60000);
      },
      immediate: true,
    },
  },
  methods: {
    recalcSpace() {
      // each icon is approximately 40px in total space.
      const searchbox = document.querySelector('#search-form');
      if (!searchbox) return;
      const firstbutton = document.querySelector('ytd-topbar-menu-button-renderer');
      const availableSpace = firstbutton.offsetLeft - (searchbox.offsetLeft + searchbox.offsetWidth);
      const approxButtons = Math.floor(availableSpace / 40);
      this.maxSpace = approxButtons - 2;
    },
    async queryLive() {
      const fetched = await fetch('https://api.holotools.app/v1/live?max_upcoming_hours=12&lookback_hours=0&hide_channel_desc=1');
      const json = await fetched.json();
      console.log(json);
      this.$set(this.liveData, 'live', json.live);
      this.$set(this.liveData, 'upcoming', json.upcoming);
      // debugger;
    },
    timeDiff(curr, prev) {
      const ms_Min = 60 * 1000; // milliseconds in Minute
      const ms_Hour = ms_Min * 60; // milliseconds in Hour
      const ms_Day = ms_Hour * 24; // milliseconds in day
      const diff = curr - prev; // difference between dates.
      // If the diff is less then milliseconds in a minute
      if (diff < 0) return '???';
      if (diff < ms_Min) {
        return `${Math.round(diff / 1000)}s`;
      } if (diff < ms_Hour) {
        return `${Math.round(diff / ms_Min)}m`;
      } if (diff < ms_Day) {
        return `${Math.round(diff / ms_Hour)}h`;
      }
      return `Around ${Math.round(diff / ms_Day)}d`;
    },
    showSchedule() {
      console.log('NOT IMPLEMENTED');
    },
  },
};
</script>

<style lang="scss" module>
@import url('https://cdn.materialdesignicons.com/5.3.45/css/materialdesignicons.min.css');

#hsMain {
  //This block helps us compile CSS such that Bulma CSS will only impact our own module and not screw with youtube.
  @import '~bulma/sass/utilities/_all';

  // Import Bulma and Buefy styles
  @import '~bulma';
  @import '~buefy/src/scss/buefy';
}

.main {
  margin-right: 8px;
}
.top-bar-elements {
  display: flex;
  flex-direction: row;

  .scheduleButton {
    line-height: 1;
    padding: var(--yt-button-icon-padding, 8px);
    // width: 24px;
    height: 24px;
  }
}
</style>
<style lang="scss">
#hololive-schedule-container {
  display: flex;
}
</style>
