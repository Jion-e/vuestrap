<template lang="html">
  <div class="explain">
    <h1>Datepicker:</h1>
    <p>
      :value(值)              <br>
      width(宽度): 200px      <br>
      format(格式):success/info/danger/warning    <br>
      width(宽度): 500px                          <br>
      disabled-days-of-week:
      clear-button(清空按钮): true/false          <br>
      placeholder(占位符): 日期没显示出来时的提示文字 <br>
    </p>
  </div>
  <datepicker :value.sync="value" :disabled-days-of-week="disabled" format="dd-MM-yyyy" clear-button :placeholder="placeholder is displayed when value is null or empty">
  </datepicker>
</template>

<script>
import {datepicker} from 'vue-strap'
export default {
  data() {
    return {
      disabled: [],
      value: '2015-06-10',
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {datepicker}
};
</script>

<style lang="css">
</style>
