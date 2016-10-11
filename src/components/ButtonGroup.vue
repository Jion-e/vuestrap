<template lang="html">
  <div class="explain">
    <h1>Button Group:</h1>
    <p>
      :value(选中值)     <br>
      type(样式):default/primary/danger/info/warning/success <br>
      buttons(是否为按钮样式，否则是多选框样式): true/false    <br>
    </p>
  </div>
  <button-group :value.sync="groupValue" buttons="true" type="danger">
    <checkbox value="left">Left</checkbox>
    <checkbox value="middle">Middle</checkbox>
    <checkbox value="right">Right</checkbox>
  </button-group>
  <span v-text="groupValue"></span>

  <div class="explain">
    <h1>Checkbox:</h1>
    <p>
      :checked(定义按钮被选中) <br>
      :value(选中值)           <br>
      type(样式):default/primary/danger/info/warning/success <br>
      button(是否为按钮样式，否则是多选框样式): true/false    <br>
    </p>
  </div>
  <checkbox :checked.sync="checkboxValue.one" value="1" type="primary">One</checkbox>
  <checkbox :checked.sync="checkboxValue.two" value="2" type="primary">Two</checkbox>
  <checkbox :checked.sync="checkboxValue.three" value="3" type="primary">Three</checkbox>
  <checkbox :checked.sync="checkboxValue.four" value="4" type="primary">Four</checkbox>
  <span v-text="checkboxValue"></span>

  <div class="explain">
    <h1>Radio:</h1>
    <p>
      :checked(定义按钮被选中) <br>
      :value(选中值)           <br>
      type(样式):default/primary/danger/info/warning/success <br>
      button(是否为按钮样式，否则是多选框样式): true/false    <br>
    </p>
  </div>
  <radio :checked.sync="radioValue" value="one" type="primary">One</radio>
  <radio :checked.sync="radioValue" value="two" type="primary">Two</radio>
  <radio :checked.sync="radioValue" value="three" type="primary">Three</radio>
  <radio :checked.sync="radioValue" value="four" type="primary">Four</radio>
  <span v-text="radioValue"></span>
</template>

<script>
import {buttonGroup, checkbox, radio } from 'vue-strap';
export default {
  data() {
    return {
      groupValue: '',
      checkboxValue: {
        one: '1',
        two: '2',
        three: null,
        four: null
      },
      radioValue: null
    };
  },
  computed: {},
  ready() {

  },
  attached() {},
  methods: {},
  components: {buttonGroup,checkbox, radio }
};
</script>
