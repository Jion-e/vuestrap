<template lang="html">
  <div class="explain">
    <h1>Select:</h1>
    <p>
      multiple(是否多选): true/false            <br>
      search(是否有搜索框): true/false           <br>
      placeholder(选项框默认显示文字): string     <br>
      clear-button(清空按钮): true/false         <br>
      require(是否必须): true/false              <br>
      limit(限制多选个数): 5                      <br>

      <!-- min-search
      lang -->
      options-label(定义option text)              <br>
      options-value(定义option value)             <br>
      search-text(搜索框占位文字)                  <br>

      change
      selected
    </p>
  </div>
  <form action="./#select" method="get" >
  <v-select :value.sync="selData" :options="select.options" options-value="val" options-label="label" multiple placeholder="选我"  >
    <!-- <v-option value="apple">Apple</v-option>
    <v-option value="banana">Banana</v-option>
    <v-option value="cherry">Cherry</v-option>
    <v-option value="orange">Orange</v-option>
    <v-option value="grape">Grape</v-option> -->
  </v-select>
  <p>
    {{selData}}
  </p>
  <!-- <button type="submit" class="btn btn-default">Submit form</button> -->
</form>
</template>

<script>

var vSelect = require('vue-strap').select;
var vOption = require('vue-strap').option;
export default {
  data() {
    return {
      selData: [],
      select: {
        options: [
          {val: 0, label: 'Cat'},
          {val: 1, label: 'Cow'},
          {val: 2, label: 'Dog'},
          {val: 3, label: 'Elephant'},
          {val: 4, label: 'Fish'},
          {val: 5, label: 'Lion'},
          {val: 6, label: 'Tiger'},
          {val: 7, label: 'Turtle'}
        ]
      }
    }
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {

  },

  components: {vSelect,vOption}
};
</script>

<style lang="css">
</style>
