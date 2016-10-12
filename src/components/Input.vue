<template lang="html">
  <div class="explain">
    <h1>Input:</h1>
    <p>
      value(值):  :value.sync="value"        <br>
      match(匹配值): string 值完全相同才正确   <br>
      label(label标签):	string                <br>
      name(name值): string                    <br>
      type(type值): text/textarea/number      <br>
      placeholder(占位值): string              <br>

      disabled(是否可用):	true/false          <br>
      readonly(是否可读): true/false          <br>
      clear-button(清空按钮): true/false      <br>

      icon(是否需要icon,对错icon): true/false   <br>
      error(错误信息): string                   <br>
      help(提示信息): string                    <br>
      hide-help(是否隐藏提示信息): true/false    <br>
      enterSubmit(enter提交): true/false        <br>

      maxlength(输入的最大长度): 5               <br>
      minlength(输入的最小长度): 3               <br>
      required(是否必须):	true/false             <br>

      <!-- pattern
      lang(语言):
      mask(高亮)
      mask-delay
      validation-delay -->
    </p>
  </div>
  <h3>单个input:</h3>
  <bs-input label="input" type="text" value="abc" name="username" match="v" error="出错啦" icon="true">
  </bs-input>
  <bs-input label="textarea" type="textarea"></bs-input>
  <h3>input组合:</h3>
  <bs-input label="With text and icon" type="number">
    <span slot="before" class="input-group-addon">￥</span>
    </span>
    <span slot="after" class="input-group-btn">
      <button type="button" name="button" class="btn btn-primary">Go</button>
    </span>
  </bs-input>
</template>

<script>
// import bsInput from 'vue-strap/src/input'
var bsInput = require('vue-strap').input;
export default {
  data() {
    return {

    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
    // mask (value) {
    //   return value.toLowerCase().replace(/^[^a-z]+/,'').replace(/[^a-z0-9]/g,'')
    // }
  },
  components: {bsInput}
};
</script>

<style lang="css">
</style>
