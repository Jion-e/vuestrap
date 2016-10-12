<template lang="html">
  <div class="explain">
    <h1>Tooltip:</h1>
    <p>
      trigger(触发事件):click/focus/hover/contextmenu(右键触发)    <br>
      effect(效果):scale/fadein                          <br>
      placement(定位):top/left/right/bottom              <br>
      content(内容): string                              <br>
    </p>
  </div>
  <tooltip placement="right" content="提示" effect="scale">
  <button class="btn btn-primary">提示</button>
</tooltip>
</template>

<script>
import {tooltip} from 'vue-strap'
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {tooltip}
};
</script>

<style lang="css">
</style>
