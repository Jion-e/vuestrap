<template lang="html">
  <div class="explain">
    <h1>Popover:</h1>
    <p>
      trigger(触发事件): click/focus/hover/contentmenu(右键触发)  <br>
      effect(效果):scale/fade                           <br>
      title(标题): string                               <br>
      content(内容): string                             <br>
      <!-- header(): true/false -->
      placement(定位):top/left/right/bottom             <br>
    </p>
  </div>
  <popover effect="scale" placement="right" content="one" trigger="hover">
    <button class="btn btn-primary">小弹窗</button>
  </popover>
</template>

<script>
import {popover} from 'vue-strap'
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {popover}
};
</script>

<style lang="css">
</style>
