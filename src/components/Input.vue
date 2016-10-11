<template lang="html">
  <bs-input label="With dropdown and button" type="text">
    <!-- <dropdown slot="before" text="dropdown">
      <li><a href="#">option</a></li>
    </dropdown> -->
    <span slot="after" class="input-group-btn">
      <button type="button" class="btn btn-primary">Go!</button>
    </span>
  </bs-input>
</template>

<script>
import {bsInput} from 'vue-strap';
export default {
  data() {
    return {
      check: {
        clearButton:true,
        error:true,
        hideHelp: true,
        icon:true,
        label:true,
        mask:true,
        minlength:true,
        placeholder:true,
        required:true
      },
      event: null,
      input: null,
      match: null
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
    mask (value) {
      return value.toLowerCase().replace(/^[^a-z]+/,'').replace(/[^a-z0-9]/g,'')
    }
  },
  components: {bsInput}
};
</script>

<style lang="css">
</style>
