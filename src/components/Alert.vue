<template lang="html">
  <div class="explain">
    <h1>Alert:</h1>
    <p>
      show(是否显示): true/false                <br>
      dismissable(是否显示关闭按钮): true/false  <br>
      type(状态):success/info/danger/warning    <br>
      width(宽度): 500px                        <br>
      placement(定位): top/top-right            <br>
      duration(显示时间): 毫秒                   <br>
    </p>
  </div>
  <alert type="danger" >
    警告框
  </alert>
  <alert :show.sync="showRight" type="danger" placement="top-right" duration="3000" width="500px">
    警告框
  </alert>
  <button class="btn btn-success" @click="showRight = !showRight">
    layer
  </button>
</template>

<script>
import {alert }from 'vue-strap';
export default {
  data() {
    return {
      showRight: false,
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {alert}
};
</script>
