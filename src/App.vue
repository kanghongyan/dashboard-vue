<template>
  <div class="g-root">
    <Sidebar></Sidebar>
    <div class="g-content-wrapper">
      <main-head></main-head>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  import MainHead from './components/Header.vue';
  import Sidebar from './components/sidebar.vue'

  import store from './store/store'

  export default {
    components: {
      'mainHead': MainHead,
      'Sidebar': Sidebar
    },
    store: store //main-head和sidebar交互，父组件里需要引入store，供二者通信
  }
</script>

<style lang="scss">
  @import "./App";

</style>
