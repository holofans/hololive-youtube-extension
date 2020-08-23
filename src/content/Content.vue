<template>
  <div class="main" id="hsMain">
    <!-- Contains things that go into the top-bar of Youtube  -->
    <div class="top-bar-elements">
      <!-- A series of confusing classes to make youtube css feel compatible with this button -->
      <div class="scheduleButton">
        <TopBarButton
          :channelThumbnail="'https://yt3.ggpht.com/a-/AOh14Gi2inaJUCKHII1OqCcyuhXTpAnRay7R1Qw08A=s68-c-k-c0x00ffffff-no-rj-mo'"
          :isLive="true"
          currentVideoURL="https://www.youtube.com/watch?v=HSN24g8LDMQ"
        ></TopBarButton>
      </div>
      <!-- A series of confusing classes to make youtube css feel compatible with this button -->
      <div class="scheduleButton">
        <TopBarButton
          :channelThumbnail="'https://yt3.ggpht.com/a-/AOh14Gi2inaJUCKHII1OqCcyuhXTpAnRay7R1Qw08A=s68-c-k-c0x00ffffff-no-rj-mo'"
          :isLive="true"
          currentVideoURL="https://www.youtube.com/watch?v=HSN24g8LDMQ"
        ></TopBarButton>
      </div>
    </div>

    <!-- End Top-Bar Elements -->
  </div>
</template>

<script>
import TopBarButton from './TopBarButton.vue';

export default {
  name: 'Content',
  components: { TopBarButton },
  data() {
    return {
      anchorLeft: 0,
    };
  },
  created() {},
  mounted() {},
  destroyed() {},
  methods: {},
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
