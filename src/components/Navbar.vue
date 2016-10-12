<template lang="html">
  <div class="explain">
    <h1>Navbar:</h1>
    <p>
      placement(定位): top/bottom/static         <br>
      type(样式):inverse/default
    </p>
  </div>
  <navbar placement="static" type="inverse">
    <!-- Brand as slot -->
    <a slot="brand" href="/" title="Home" class="navbar-brand">Brand</a>
    <li>
      <a href="javascript:;" target="_blank">Link1</a>
    </li>
    <li slot="right">
      <a href="javascript:;" target="_blank">Link2</a>
    </li>
    <li slot="right">
      <a href="https://github.com/yuche/vue-strap" target="_blank">Link3</a>
    </li>
  </navbar>
</template>

<script>
import {navbar} from 'vue-strap'
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {navbar}
};
</script>

<style lang="css">
</style>
