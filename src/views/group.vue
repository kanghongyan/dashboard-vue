<template>
  <div>
    <h2>this is group list</h2>
    <ul v-for="group in groups">
      <li>
        <a v-link="{ path: '/groups/' + $index }">{{ group }} </a>
        <a class="db-btn db-btn-sm db-btn-empty" v-on:click="edit($index)">edit</a>
      </li>
    </ul>
    <Modal v-bind:is-show="isShow" v-bind:group-id="groupId" v-bind:call-back="callBack"></Modal>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import Modal from '../components/modal.vue'
  import { setCustomStyle } from '../util/util'
  export default{
    data () {
      return {
        groups: [
          'group0',
          'group1',
          'group2',
          'group3',
          'group4'
        ],
        isShow: true,
        groupId: 'click edit button to change the group style'
      }
    },
    methods: {
      //TODO: 根据唯一的组class，用户自己输入的scss变量，生成css文件
      //todo： 文件结构如下： .uniqueGroup1{ xxxx } .uniqueGroup2{ xxxx }
      edit(index) {
        console.log(index);
        this.groupId = 'groupUniqueId-' + index
      },
      callBack() {
        console.log(arguments[0]);
        setCustomStyle(arguments[0], this.groupId);
      }
    },
    components: {
      Modal
    }
  }
</script>
