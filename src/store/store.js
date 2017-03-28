import Vue from 'vue'
import Vuex from 'vuex'

import getData from '../service'

Vue.use(Vuex);

const state = {
  count: 0, //初始值为0,
  showSidebarFlag: false,
  mainData: {}, //主图数据
  pathData: {}  //剖析路径数据
};

//mutation代理actions
//当actions触发后，store里相应的函数会执行
const mutations = {
  //第一个参数是当前的state
  INCREMENT (state, amount) {
    state.count = state.count + amount
  },
  SHOWSIDEBAR (state, flag) {
    state.showSidebarFlag = flag
  },
  MAIN_DATA (state, paramObj) {
    getData(paramObj)
    .then(function (ret) {
      //模拟接口调用时长
      setTimeout(function () {
        state.mainData = ret
      },3000)
    }, function (err) {
      //TODO: 失败的时候给出友好提示
      alert(err)
    })
  },
  PATH_DATA (state, paramObj) {
    getData(paramObj)
      .then(function (ret) {
        setTimeout(function () {
          state.pathData = ret;
        }, 3000)
      }, function (err) {
        alert(err)
      })
  },
  RESET_PATH_DATA (state) {
    setTimeout(function () {
      //等动画执行完毕后再标志为空,否则会过早loading
      //TODO: 方案需改进
      state.pathData = {
        empty: true
      }
    },600)

  }
};

export default new Vuex.Store({
  state,
  mutations
})
