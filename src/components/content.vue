<template>
  <div class="db-main-content" id='db-full-screen'>

    <p>
      <label for="bgInput">background:</label>
      <input value="#f1f5f6" v-model="bgColor" id='bgInput'>
    </p>
    <p>
      <label for="fontInput">fontColor:</label>
      <input value="#111" v-model="fontColor" id="fontInput">
    </p>
    <p>
      <label for="mainColorInput">mainColor:</label>
      <input value="#00b1eb" v-model="mainColor" id="mainColorInput">
    </p>
    <p>
      <label for="borderColorInput">borderColor:</label>
      <input value="#ddd" v-model="borderColor" id="borderColorInput">
    </p>
    <p>
      <label for="btnFontColorInput">btnFontColor:</label>
      <input value="#fff" v-model="btnFontColor" id="btnFontColorInput">
    </p>
    <p>
      <a class="db-btn db-btn-md" v-on:click="changeTheme()">click me</a>
      <a class="db-btn db-btn-sm db-btn-empty">show</a>
    </p>
  </div>
</template>

<script>
  import { setCustomStyle, formatJson } from '../util/util'

  export default {
    ready () {
      let customCss = localStorage.getItem('customCss');
      if(customCss) {
        let customCssObj = JSON.parse(customCss);
        this.bgColor = customCssObj.background;
        this.fontColor = customCssObj.fontColor;
        this.mainColor = customCssObj.mainColor;
        this.borderColor = customCssObj.borderColor;
        this.btnFontColor = customCssObj.btnFontColor;
      }

      //fullScreen();
     // console.log(document.getElementById('aa'))
    },
    data () {
      return {
        bgColor: '#f1f5f6',
        fontColor: '#fff',
        mainColor: '#00b1eb',
        borderColor: '#ddd',
        btnFontColor: '#fff'
      }
    },
    methods: {
      changeTheme () {
        var customCssObj = {
          'background': this.bgColor,
          'fontColor': this.fontColor,
          'mainColor': this.mainColor,
          'borderColor': this.borderColor,
          'btnFontColor': this.btnFontColor
        };
        localStorage.setItem('customCss', JSON.stringify(customCssObj));
        fetch('/api/theme/1', {
          method: 'POST',
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: formatJson(customCssObj)
        }).then(function (res) {
          //ok
          return res.text().then(function (str) {
            let result = JSON.parse(str);
            let status = JSON.parse(str).status;
            status === 200? setCustomStyle(result.data) : alert(result.message)
          })
        }, function (err) {
          //error
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
