//获取数据接口
const getData = ({url, params}) => {
  return fetch(url).then(function (res) {
    if (res.ok) {
      return Promise.resolve(
        res.json()
          .then(function (data) {
            return data.data
          }))
    } else {
      return Promise.reject(res.statusText)
    }
  })
};

export default getData

