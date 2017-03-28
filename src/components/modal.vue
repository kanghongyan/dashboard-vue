<template>
  <div class="db-modal">
    <p>{{ groupId }}</p>
    <br>
    <p class="m-input-area">
      <label>fontColor</label>
      <input value="red" v-model="fontColor">
    </p>
    <p class="m-input-area">
      <label>background</label>
      <input value="#fff" v-model="background">
    </p>
    <!--todo: 这部分可根据接口输出的widget内容动态生成，因为每一个group里的widget数量不一样-->
    <!--todo: 问题：有多个widget就会循环出多个textarea，这种方式需要改进-->
    <p class="m-input-area">
      <label>widget1</label>
      <textarea v-model="widgets[0]">border-radius: 10px;border: solid 1px red</textarea>
    </p>
    <p class="m-input-area">
      <label>widget2</label>
      <textarea v-model="widgets[1]">border-radius: 20px;border: solid 2px green</textarea>
    </p>
    <br>
    <a class="db-btn db-btn-md" v-on:click="save(groupId)">save</a>
  </div>
</template>
<style lang="scss">
  textarea {
    height: 60px;
  }
</style>
<script>
  import { formatJson } from '../util/util'
  export default{
    data(){
      return {
        fontColor: 'black',
        background: '#fff',
        widgets:['widget1', 'widget2']
      }
    },
    props: ['isShow', 'groupId', 'callBack'],
    methods: {
      save (id) {
        if(!/^groupUniqueId-\d+$/.test(id)){
          alert('请选择要编辑的group');
          return;
        }
        //TODO: close this dialog
        var vm = this;
        //todo：数据结构调整
        //todo: 当不输入的时候不会传递相关字段
        //todo: widget正确加到obj里面
        var obj = {
          className: id,
          groupStyle: 'color:' + this.fontColor + ';background: ' + this.background + ';',
          widget1: this.widgets[0],
          widget2: this.widgets[1]
        };

        //post
        //TODO: 代码优化
        fetch('/api/groupTheme/1', {
          method: 'POST',
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: formatJson(obj)
        }).then(function (res) {
          //ok
          return res.text().then(function (str) {
            //TODO: 向页面中加入style
            vm.$parent.callBack(str);
          })
        }, function (err) {
          //error
        })
      }
    }
  }
</script>
