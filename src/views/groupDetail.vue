<template>
  <div class="{{ className }}">
    <h3>this is group Detail</h3>

    <div class="widget1">
      this is widget1
    </div>
    <div class="widget2">
      this is widget2
      <div id="chart" style="width: 200px;height:200px;"></div>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import Vue from 'vue'

  //TODO: 这是一个示例，可以继承其他组件

  export default Vue.extend({
    data() {
      return {
        className: 'groupUniqueId-' + this.$route.params.id
      }
    },

    ready() {
      //this.className = 'unique' + $route.params.id
      // 基于准备好的dom，初始化echarts实例
      //console.log(document.getElementById('chart'))
      //todo: 修改webpack.config,现在是无法获得echart这个个变量
      var myChart = echart.init(document.getElementById('chart'));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: 'test'
        },
        tooltip: {},
        legend: {
          data:['销量']
        },
        xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  });
</script>
