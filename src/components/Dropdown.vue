<template lang="html">
  <div class="explain">
    <h1>Dropdown:</h1>
    <p>
      show(选项是否显示): true/false                                <br>
      class(样式):                                              <br>
      disabled(是否可用):true/false                             <br>
      text(标题): string                                        <br>
      type(样式): default/primary/danger/info/warning/success   <br>
    </p>
  </div>
  <dropdown text="下拉框" type="danger">
    <li><a href="javascript:;" >one</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="javascript:;">two</a></li>
  </dropdown>
  <!-- <dropdown text="Action" type="primary">
    <li><a href="#dropdown">Action</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="#dropdown">Separated link</a></li>
  </dropdown>
  // For segmented dropdown, ignore text and add a "before" slot
  <dropdown type="info">
    <button slot="before" type="button" class="btn btn-info">Segmented</button>
    <li><a href="#dropdown">...</a></li>
  </dropdown>
  // In a button group
  <div class="btn-group btn-group-justified">
    <a href="#dropdown" class="btn btn-default" role="button">Left</a>
    <dropdown>...</dropdown>
    <a href="#dropdown" class="btn btn-default" role="button">Right</a>
  </div>
  // With slots you can handle some elements as native bootstrap
  <dropdown>
    <button slot="button" type="button" class="btn btn-default dropdown-toggle">
      Action
      <span class="caret"></span>
    </button>
    <ul slot="dropdown-menu" class="dropdown-menu">
      <li><a href="#dropdown">Action</a></li>
      <li><a href="#dropdown">Another action</a></li>
      <li><a href="#dropdown">Something else here</a></li>
      <li role="separator" class="divider"></li>
      <li><a href="#dropdown">Separated link</a></li>
    </ul>
  </dropdown> -->
</template>

<script>
import {dropdown} from 'vue-strap'
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {dropdown}
};
</script>

<style lang="css">
</style>
