/*
export let setCustomStyle = (styleStr) => {

  var body = document.getElementsByTagName('body')[0];
  var oStyle = document.getElementsByTagName('style');
  for(let i=0; i<oStyle.length; i++) {
    if(oStyle[i].getAttribute('flag')) {
      body.removeChild(oStyle[i])
    }
  };
  oStyle = document.createElement('style');
  oStyle.setAttribute('flag', 'custom');
  oStyle.innerHTML = styleStr;
  document.getElementsByTagName('body')[0].appendChild(oStyle)
};
*/

export let formatJson = (jsonObj) => {
  var queryString = [];
  for(let key in jsonObj) {
    let str = key + '=' + jsonObj[key];
    queryString.push(str)
  }
  return queryString.join('&')
};

export let setCustomStyle = (styleStr, styleLabel = 'theme') => {
  //TODO: 需要扩展这个方法，style的插入与删除等操作
  var pos = document.getElementsByTagName('body')[0];
  if(!pos) return;
  var oStyle = pos.getElementsByTagName('style');
  for(let i=0; i<oStyle.length; i++) {
    if(oStyle[i].getAttribute('flag') === styleLabel) {
      pos.removeChild(oStyle[i])
    }
  }
  oStyle = document.createElement('style');
  oStyle.setAttribute('flag', styleLabel);
  oStyle.innerHTML = styleStr;
  pos.appendChild(oStyle)
};

export let fullScreen = (domElem) => {

  //全屏

  var runPrefixMethod = function(element, method) {
    var usablePrefixMethod;
    ["webkit", "moz", "ms", "o", ""].forEach(function(prefix) {
      if (usablePrefixMethod) return;
      if (prefix === "") {
        // 无前缀，方法首字母小写
        method = method.slice(0,1).toLowerCase() + method.slice(1);

      }

      var typePrefixMethod = typeof element[prefix + method];

      if (typePrefixMethod + "" !== "undefined") {
        if (typePrefixMethod === "function") {
          usablePrefixMethod = element[prefix + method]();
        } else {
          usablePrefixMethod = element[prefix + method];
        }
      }
    });

    return usablePrefixMethod;
  };

  if(typeof window.screenX === 'number') {
    if (runPrefixMethod(document, "FullScreen") || runPrefixMethod(document, "IsFullScreen")) {
      //console.log('ffffff');
      //todo: 在这里写console.log无法输出
      runPrefixMethod(document, "CancelFullScreen");
      //console.log(domElem)
    } else if (runPrefixMethod(domElem, "RequestFullScreen")) {
      //todo：这里也无法输出
      //console.log(domElem.className)
    }

  }
};
