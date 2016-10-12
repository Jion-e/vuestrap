<template lang="html">
  <div class="explain">
    <h1>Spinner:</h1>
    <p>
      size(大小):sm, md, lg, xl  <br>
      fixed(固定): true/false
    </p>
  </div>
  <div class="">
    <spinner v-ref:spinner size="md"  text="两秒钟后关闭" fixed></spinner>
  </div>
  <button class="btn btn-primary" @click="$broadcast('show::spinner')">点我</button>
</template>

<script>
import {spinner} from 'vue-strap'
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  events: {
    'shown::spinner' (id) {
      setTimeout(() => {
        this.$root.$broadcast('hide::spinner', id)
      }, 2000)
    }
  },
  components: {spinner}
};
</script>

<style lang="css">
</style>
