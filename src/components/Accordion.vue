<template lang="html">
  <div class="explain">
    <h1>Accordion:</h1>
    <p>
        type(整体颜色): ['default', 'primary', 'info', 'success', 'warning', 'danger']  <br>
        :one-at-time(其他选项是否关闭): true/false
    </p>
    <h1>Panel:</h1>
    <p>
        header(标题): string  <br>
        type(个体颜色): ['default', 'primary', 'info', 'success', 'warning', 'danger']  <br>
        is-open(是否展开): true/false
    </p>
  </div>
  <accordion :one-at-atime="true" type="default">
    <panel is-open type="danger">
      <strong slot="header"><u>Panel #1</u></strong>
      ...
    </panel>
    <panel header="Panel #2">
      ...
    </panel>
    <panel header="Panel #3">
      ...
    </panel>
    <panel header="Panel #4">
      ...
    </panel>
  </accordion>
</template>

<script>
import { accordion, panel } from 'vue-strap'
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {
    accordion, panel
  }
};
</script>

<style lang="less">
</style>
