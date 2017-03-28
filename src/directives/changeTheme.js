export default {
  params: ['style'],
  paramWatchers: {
    style: (val, oldVal) => {
      this.el.innerHTML = val
    }
  },
  bind () {
    this.el.innerHTML = 'this is theme style'
  }
}
