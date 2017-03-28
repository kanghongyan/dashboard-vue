<template>
  <div class="g-header">
    <div class="navbar-branding">
      <a class="navbar-brand">
        <b>DEMO</b>
      </a>
    </div>
    <div class="nav navbar-left">
      <ul class="main-menu">
        <li>
          <a v-link="{ path: '/groups' }">show groups</a>
        </li>
        <li>
          <a>Plugins Pages</a>
        </li>
        <li>
          <a>Documentation</a>
        </li>
        <!--<li>
          <button @click='increment'>Increment + 1</button>
        </li>-->
      </ul>
    </div>
    <div class="nav navbar-right">
      <a class="navbar-icon">
        <i class="fa fa-cog" @click='showSide'></i>
      </a>
      <a class="navbar-icon">
        <i class="fa fa-search"></i>
      </a>
      <a class="navbar-icon">
        <i class="fa fa-magic"></i>
      </a>
    </div>
  </div>
</template>
<style lang="scss">
  .g-header {
    $logo-width: 150px;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1;
    min-height: 70px;
    padding: 27px 35px 27px $logo-width + 20;
    .navbar-brand {
      position: absolute;
      left: 0;
      top: 0;
      display: inline-block;
      height: 100%;
      width: $logo-width;
      background: rgba(0, 0, 0, .6);
      line-height: 70px;
      text-align: center;
    }
  }
  .main-menu {
    li {
      display: inline-block;
      margin-left: 32px;
      a {
        font-size: 16px;
        color: #c8a9ff;
        text-decoration: none;
        transition: 0.3s all ease;
        cursor: pointer;
        &:hover {
          color: #fff;
        }
      }
    }
    li.active a {
      color: #fff
    }
  }
  .navbar-left {
    float: left;
  }
  .navbar-right {
    float: right;
  }
  .navbar-icon {
    position: relative;
    display: inline-block;
    width: 34px;
    height: 34px;
    background-color: #3a244b;
    color: #ffffff;
    border-radius: 50%;
    border: none;
    transition: 0.3s all ease;
    line-height: 34px;
    text-align: center;
    font-size: 12px;
    &:hover {
      background-color: rgba(149, 117, 205, 0.5);
    }
  }
</style>
<script>
  import { fullScreen } from '../util/util'

  import { incrementCounter, showSidebar } from '../action/action'

  export default{
    vuex: {
      actions: {
        increment: incrementCounter, //触发+1这个动作
        showSide: showSidebar
      }
    },
    data(){
      return {
        msg: 'hello vue',
        showSidebar: true
      }
    },
    methods: {
      hideSidebar() {
        console.log('sidebar');
        if(document.webkitFullscreenEnabled) {

        }
      },
      switchFullScreen() {
        console.log('sss')
        fullScreen(document.getElementById('db-full-screen'))
      }
    }
  }
</script>
