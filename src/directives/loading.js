export default {
  //params: ['loadingFlag'],
  paramWatchers: {
    /*style: (val, oldVal) => {
      this.el.innerHTML = val
    }*/
  },
  //TODO: directive有没有自己的作用域？？
  //TODO: loading bug
  bind () {

  },
  update(newValue, oldValue) {
    var oEl = this.el,
      oLoadidngEl = oEl.getElementsByClassName('g-loading')[0];
    console.log(newValue)
    console.log(oLoadidngEl)
    //TODO: 不严谨，需要容错处理
    if(newValue && oLoadidngEl) {
      oLoadidngEl.parentNode.removeChild(oLoadidngEl)
    }
    if(!oLoadidngEl && !oLoadidngEl) {
      oEl.style = 'position: relative';
      let oLoadElem = document.createElement('div');
      oLoadElem.setAttribute("class","g-loading");
      oLoadElem.innerHTML = 'loading...';
      oEl.appendChild(oLoadElem)
    }
  }
}
