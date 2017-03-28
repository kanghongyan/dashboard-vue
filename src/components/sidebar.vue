<template>
  <aside class="sidebar_left" :class="{'sidebar-hide': !showSidebarFlag}">
    <p>this is sidebar_left  {{ counterValue }}</p>
    <p>{{ showSidebarFlag }}</p>
  </aside>
</template>
<style lang="scss" scoped>
  .sidebar_left {
    display: block;
    position: fixed;
    background-color: #482e5d;
    box-shadow: 2px 0px 10px 0px rgba(0, 0, 0, 0.13);
    z-index: 2;
    color: #c8a9ff;
    font-size: 14px;
    top: 0;
    left: 0;
    transform: translateX(0);
    width: 250px;
    min-height: 100%;
    padding-bottom: 40px;
    transition: all .6s;
  }
  .sidebar-hide {
    transform: translateX(-250px);
  }
</style>
<script>
  export default{
    vuex: {
      getters: {
        counterValue: function (state) {
          return state.count
        },
        showSidebarFlag: function (state) {
          return state.showSidebarFlag
        }
      }
    },
    data(){
      return {
        dashboards: ['a', 'b', 'c', 'd', 'e']
      }
    }
  }
</script>
