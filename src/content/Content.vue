<template>
  <div class="main" id="hsMain">
    <!-- Contains things that go into the top-bar of Youtube  -->
    <div class="top-bar-elements">
      <transition name="hl-loading">
        <div class="scheduleButton" v-if="loading">
          <TopBarLoadingSpinner />
        </div>
      </transition>

      <transition-group name="hl-list" tag="div" class="top-bar-elements">
        <div class="scheduleButton" v-for="k in showableVideos" :key="k.yt_video_key">
          <TopBarButton
            :channelThumbnail="k.channel.photo"
            :isLive="k.status == 'live'"
            :currentVideoURL="`https://www.youtube.com/watch?v=${k.yt_video_key}`"
            :timeToLive="timeDiff(new Date(k.live_schedule), currentTime)"
          ></TopBarButton>
        </div>
      </transition-group>

      <div class="scheduleButton">
        <TopBarMoreButton />
      </div>
    </div>

    <!-- End Top-Bar Elements -->
  </div>
</template>

<script>
import TopBarButton from './TopBarButton.vue';
import TopBarMoreButton from './TopBarMoreButton.vue';
import TopBarLoadingSpinner from './TopBarLoadingSpinner.vue';

const API_URL = 'https://api.holotools.app/v1/live?max_upcoming_hours=12&lookback_hours=0&hide_channel_desc=1';

export default {
  name: 'Content',
  components: { TopBarButton, TopBarMoreButton, TopBarLoadingSpinner },
  data() {
    return {
      lastQuery: new Date(0),
      loading: true,
      maxSpace: 0,
      liveData: {},
      currentTime: +new Date(),
    };
  },
  computed: {
    showableVideos() {
      // truncates the array of videos to the limit that the UI is capable of showing.
      const { live, upcoming } = this.liveData;
      if (!live || !upcoming) return [];
      const upcoming_sorted = upcoming.sort((e1, e2) => new Date(e1.live_schedule) - new Date(e2.live_schedule));
      return live
        .concat(upcoming_sorted)
        .filter(k => k.yt_video_key)
        .slice(0, this.maxSpace);
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
          const now = new Date();
          this.currentTime = +now;
          // check if querying is necessary, we want to query once every 5 minutes unless
          // the time is within 3 mins of :30 and :00, where we query every minute.
          const currentMins = now.getMinutes();
          if (currentMins > 59 || currentMins < 5 || (currentMins > 29 && currentMins < 32)) {
            this.queryLive(60); // try querying every minute
          } else {
            this.queryLive(300); // try querying every 5 minutes.
          }
        }, 10000);
      },
      immediate: true,
    },
  },
  methods: {
    recalcSpace() {
      // each icon is approximately 40px in total space.
      setTimeout(() => {
        const searchbox = document.querySelector('#search-form');
        if (!searchbox) return;
        const firstbutton = document.querySelector('ytd-topbar-menu-button-renderer');
        const availableSpace = firstbutton.offsetLeft - (searchbox.offsetLeft + searchbox.offsetWidth);
        const approxButtons = Math.floor(availableSpace / 40);
        this.maxSpace = Math.max(1, approxButtons - 2);
      }, 500);
    },
    async queryLive(doQueryIfSecondsLate) {
      if (this.currentTime - this.lastQuery <= doQueryIfSecondsLate * 1000) {
        return; // don't query API. not enough time has passed
      }
      this.loading = true;
      const fetched = await fetch(API_URL);
      const json = await fetched.json();
      this.$set(this.liveData, 'live', json.live);
      this.$set(this.liveData, 'upcoming', json.upcoming);
      this.lastQuery = new Date();
      this.loading = false;
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
      }
      if (diff < ms_Hour) {
        return `${Math.round(diff / ms_Min)}m`;
      }
      if (diff < ms_Day) {
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
.hl-loading-leave-active {
  transition: opacity 0.5s;
}
.hl-loading-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.hl-list-move {
  transition: transform 0.5s;
}
.hl-list-enter-active,
.hl-list-leave-active {
  transition: all 0.5s;
}
.hl-list-enter, .hl-list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(5px);
}
.hl-list-leave-active {
  position: absolute;
}
.hl-list-item {
  transition: all 0.5;
}
</style>
