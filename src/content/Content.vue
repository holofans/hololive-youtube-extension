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
          <TopBarButton></TopBarButton>
        </div>
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
  @import '~bulma/sass/utilities/_all';

  // Set your colors
  $primary: #8c67ef;
  $primary-invert: findColorInvert($primary);
  $twitter: #4099ff;
  $twitter-invert: findColorInvert($twitter);

  // Setup $colors to use as bulma classes (e.g. 'is-twitter')
  $colors: (
    'white': (
      $white,
      $black,
    ),
    'black': (
      $black,
      $white,
    ),
    'light': (
      $light,
      $light-invert,
    ),
    'dark': (
      $dark,
      $dark-invert,
    ),
    'primary': (
      $primary,
      $primary-invert,
    ),
    'info': (
      $info,
      $info-invert,
    ),
    'success': (
      $success,
      $success-invert,
    ),
    'warning': (
      $warning,
      $warning-invert,
    ),
    'danger': (
      $danger,
      $danger-invert,
    ),
    'twitter': (
      $twitter,
      $twitter-invert,
    ),
  );

  // Links
  $link: $primary;
  $link-invert: $primary-invert;
  $link-focus-border: $primary;

  // Import Bulma and Buefy styles
  @import '~bulma';
  @import '~buefy/src/scss/buefy';
}

.main {
  margin-right: 8px;
}
.top-bar-elements {
  #scheduleButton {
    line-height: 1;
    padding: var(--yt-button-icon-padding, 8px);
    // width: 24px;
    height: 24px;
  }
}
</style>
