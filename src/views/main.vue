<template>
  <div id="db-full-screen" class="g-content" :class="{'chart-wrap-show': showAnalysisFlag, 'chart-wrap-hide': !showAnalysisFlag}">
    <div class="main-panel">
      <div class="panel-heading">
        <ul class="nav panel-tabs">
          <!--TODO: $index与id的对应关系-->
          <li v-for="tab in tabs" @click="getInfo(tab.id)" :class="{'active': $index+1 == $route.params.id }">
            <a class="btn">
              {{ tab.name }}
            </a>
          </li>
          <li><a>{{ chartData }}</a></li>
        </ul>
        <div class="panel-controls">
          <a>
            <i class="fa fa-hand-o-right" @click="analysisPanel()"></i>
          </a>
          <a class="panel-control-fullscreen">
            <i class="fa fa-arrows" @click="fullScreen()"></i>
          </a>
          <a class="panel-control-remove">i
            <i class="fa fa-times"></i>
          </a>
        </div>
      </div>
      <div class="panel-body">
        {{ mainData.id }}
        <div class="g-chart-wrap" style="height: 400px" v-loading="loadingFlag">
          <div id="chart" style="width: 100%;height:400px;"></div>
        </div>
      </div>
    </div>
      <router-view></router-view>
  </div>
</template>
<style lang="scss">

</style>

<script>
  import { fullScreen } from '../util/util'
  import { getMainData, getPathData, resetPathData } from '../action/action'

  export default {
    vuex: {
      actions: {
        getMainData,
        getPathData,
        resetPathData
      },
      getters: {
        //本质上是计算属性
        //无法访问到this,只用来做view层更新
        mainData: function (state) {
          return state.mainData
        }
        /*pathData: function (state) {
          console.log('ok')
          return state.pathData
        }*/
      }
    },
    data: function () {
      console.log('data');
      return {
        tabs: [{ //头部tab
          name: 'cate1',
          id: 1
        }, {
          name: 'cate2',
          id: 2
        }, {
          name: 'cate3',
          id: 3
        }],
        curId: this.$route.params.id, //当前选项卡id
        chartData: "this is chart " + this.curId + 'data',
        showAnalysisFlag: false, //是否显示右侧剖析路径面板
        loadingFlag: false //loading状态
      }
    },
    methods: {
      getInfo(id) { //点击选项卡
        this.chartData = 'this is chart ' + id + ' data'
        this.curId = id;
        this.switchPanel(false);
        this.$router.go('/track/' + id);
      },
      analysisPanel() { //右侧剖析面板路径
        this.switchPanel(true);
        //请求剖析路径
        this.getPathData({
          url: '/static/path/path1.json'
        })
      },
      fullScreen() { //全屏
        fullScreen(document.getElementById('db-full-screen'))
      },
      showLoading(flag) { //loading状态
        this.loadingFlag = flag
      },
      switchPanel(flag) {
        this.showAnalysisFlag = flag
      },
      /**
       * 设置图表数据
       * @param id 图表放置的container
       * @param chartData 图表数据
         */
      setChart({ id, chartData }) {
        //TODO: 设置图表数据
        console.log('setChartData');
        var myChart = echart.init(document.getElementById(id));
        var option = {
          title: {
            text: '堆叠区域图'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              areaStyle: {normal: {}},
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              areaStyle: {normal: {}},
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '视频广告',
              type: 'line',
              stack: '总量',
              areaStyle: {normal: {}},
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '直接访问',
              type: 'line',
              stack: '总量',
              areaStyle: {normal: {}},
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '搜索引擎',
              type: 'line',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              areaStyle: {normal: {}},
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        };
        myChart.setOption(option);
      }
    },
    computed: {},
    events: {},
    watch: {
      'mainData': function () {
        console.log('watch');
        //TODO: 代码调整，不用watch，用computed
        //TODO: 在获取到数据后就loading立即消失。也可以在图表渲染完成后消失
        this.showLoading(true);
        this.setChart({
          id: 'chart',
          chartData: {}
        })
      }
    },
    ready() {
      //TODO: 接口获取类别
      //TODO: 接口获取图表数据
      console.log('ready');
      console.log(this.showAnalysisFlag);
    },
    route: {
      activate() {
        console.log('route-active')
      },
      data() {
        console.log('route-data')
        this.showLoading(false);
        this.chartData = "this is chart " + this.$route.params.id + ' data'
        //获取数据
        //TODO: 根据不同参数获取不同数据,目前写死
        this.resetPathData();
        this.getMainData({
          url: '/static/mainData/data1.json'
        });
      }
    }
  }
</script>
