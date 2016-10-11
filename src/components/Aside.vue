<template lang="html">
<div class="explain">
  <h1>Aside:</h1>
  <p>
    show(是否显示): true/false    <br>
    placement(定位): left/right   <br>
    header(标题): string          <br>
    width: 300                    <br>
  </p>
</div>
<aside :show.sync="showLeft" placement="left" header="Title" width="300">
...
</aside>

<button class="btn btn-danger btn-lg" @click="showLeft = true">Show Aside on left</button>
</template>

<script>
import {aside} from 'vue-strap'
export default {
  data() {
    return {
      showLeft: false
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {aside}
};
</script>

<style lang="css">
</style>
