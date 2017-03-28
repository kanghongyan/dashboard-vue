<template>
  <div class="g-chart-component" style="border:solid 1px red">
    <p>this is {{ uniqueChartId }} components</p>
    <div id="{{ uniqueChartId }}">
      {{ chartData }}
    </div>
  </div>
</template>
<style>

</style>
<script>
  export default {
    props: ['chartData', 'chartId'],
    computed: {
      uniqueChartId: function () {
        return 'chart_' + this.chartId
      }
    },
    ready() {

    }
  }
</script>
