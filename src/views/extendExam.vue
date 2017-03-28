<template>
  <div>

  </div>
</template>
<style>

</style>
<script>
  import Vue from 'vue'
  import GroupDetail from './groupDetail.vue'
  export default GroupDetail.extend({
    init() {
      console.log('ffffd')
    },
    ready() {
      console.log(this.className)
    }

  })
</script>
