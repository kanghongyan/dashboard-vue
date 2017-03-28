//action被components调用，用于对store的更新
//action会受到store作为它的第一个参数
const incrementCounter = function ({ dispatch, state }) {
  dispatch('INCREMENT', 1)
};

const showSidebar = ({ dispatch, state }) => {
  //state的实例方法有 dispatch,watch,hotUpdate
  dispatch('SHOWSIDEBAR', !state.showSidebarFlag)
};

export {
  incrementCounter,
  showSidebar
}
