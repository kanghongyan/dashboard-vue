<template>
  <div class="chart-wrap">
    <div class="chart-detail-area" id="g-scroll-area">
      <div class="g-loading-height" v-loading="loadingFlag">{{loadingFlag}}</div>
      <h2>{{ pathData.id }}</h2>
      <!--<p class="route-nav">tab {{ $route.params.id }} 下的 {{ mainData.id }}</p>-->
      <p class="route-nav" v-if="curPathComputed">
        <a v-for="cur in curPath" @click="toPath(cur)">{{ cur }}</a>
      </p>
      <div class="detail" v-for="path in pathData.data">
        <div class="detail-chart-wrap">
          <p>{{ path.name }}</p>
          <chart :chart-data="path.dataSource" :chart-id="$index"></chart>
        </div>
        <p class="g-btn-wrap" ><button class="g-btn" :class="{'g-btn-disabled': !path.next}" @click="toNext($index, path)">next path ></button></p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.test {
  height: 100px;

}
</style>
<script>
  //TODO: 返回数据
  let analysisPaths = [
    {
      'next': 0,
      'data': {}
    }, {
      'next': 1,
      'data': {}
    }, {
      'next': 1,
      'data': {}
    }, {
      'next': 0,
      'data': {}
    }
  ];

  import { getPathData } from '../action/action'
  import Chart from '../components/chart.vue'

  export default {
    vuex: {
      actions: {
        getPathData
      },
      getters: {
        mainData: function (state) {
          return state.mainData
        },
        pathData: function (state) {
          return state.pathData
        }
      }
    },
    components: {
      chart: Chart
    },
    ready() {
    },
    data: function () {
      return {
        chartId: this.$route.params.id,
        analysisPaths: analysisPaths,
        curPath: [this.$route.params.id], //存储面包屑路径,
        loadingFlag: false
      }
    },
    computed: {
      //在computed中获取getters中的值
      /*curPathComputed: function () {

      },*/
      curPathComputed: {
        cache: false,
        get() {
          //清空path
          //TODO: path的默认值要确定，现在是用路由id
          if(this.pathData.empty) {
            this.curPath = [this.$route.params.id];
            console.log('switch....')
            this.$set('loadingFlag', false);
            console.log(this.loadingFlag)
            return 0
          }
          return 1
        }
      }
    },
    watch: {
      'pathData': function (val) {
        console.log(val)
        this.showLoading(true)
      }
    },
    methods: {
      toNext(index, path) {
        if(!path.next) return;
        this.curPath.push(this.curPath[this.curPath.length-1] + '_' + (index+1));

        this.showLoading(false);
        this.getPathData ({
          url: '/static/path/path1_2.json'
        })
      },
      toPath(cur) {
        console.log(cur);
        //todo: data
      },
      showLoading(flag) { //loading状态
        this.loadingFlag = flag
      }
    },
    route: {
      data() {

      }
    }
  }
</script>
