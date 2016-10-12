<template lang="html">
  <div class="explain">
    <h1>Progressbar:</h1>
    <p>
      now(当前进度值): 40                            <br>
      type(样式)：warning/success/danger/primary     <br>
      label(是否显示进度条文字)：true/false           <br>
      striped(是否有条纹): true/false                <br>
      animated(是否有动画): true/false               <br>
    </p>
  </div>
  <progressbar now="40"  type="success" striped animated></progressbar>
</template>

<script>
import {progressbar} from 'vue-strap'
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {progressbar}
};
</script>

<style lang="css">
.progress-bar{
  min-height: 20px;
  border-radius:3px;
}
</style>
