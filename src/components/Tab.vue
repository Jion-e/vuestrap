<template lang="html">
  <div class="explain">
    <h1>Tabs:</h1>
    <p>
      active(激活那个tab): 索引从0开始
    </p>
    <h1>Tab:</h1>
    <p>
      disabled(是否可用): true/false  <br>
      header(标题): string
    </p>
  </div>
  <tabs active="0">
    <tab header="one">...</tab>
    <tab header="two">...</tab>
    <tab header="two">...</tab>
    <tab-group header="group1">
      <tab header="three">...</tab>
      <tab header="four" disabled>...</tab>
    </tab-group>
    <tab-group header="group2">
      <tab header="five">...</tab>
    </tab-group>
  </tabs>
</template>

<script>
import {tab,tabGroup} from 'vue-strap'
var tabs = require('vue-strap').tabset
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {tab,tabGroup,tabs}
};
</script>

<style lang="css">
</style>
