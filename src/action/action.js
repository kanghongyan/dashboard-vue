//action被components调用，用于对store的更新
//action会受到store作为它的第一个参数
const incrementCounter = function ({ dispatch, state }) {
  dispatch('INCREMENT', 1)
};

const showSidebar = ({ dispatch, state }) => {
  dispatch('SHOWSIDEBAR', !state.showSidebarFlag)
};

const getMainData = ({ dispatch }, obj) => {
  dispatch('MAIN_DATA', obj)
};

const getPathData = ({ dispatch }, obj) => {
  console.log(obj)
  dispatch('PATH_DATA', obj)
};

const resetPathData = ({ dispatch }) => {
  dispatch('RESET_PATH_DATA')
};

export {
  incrementCounter,
  showSidebar,
  getMainData,
  getPathData,
  resetPathData
}
