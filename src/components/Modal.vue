<template lang="html">
  <div class="explain">
    <h1>Modal:</h1>
    <p>
      title(标题): String         <br>
      ok-text(确认按钮文字)        <br>
      cancel-text(删除按钮文字)    <br>
      effect(效果):fade/zoom      <br>
      width: 400px                <br>
      large(大屏)                 <br>
      small(小屏)                  <br>
      <!-- backdrop: true/false -->
      :callback(确认按钮回调函数)   <br>
    </p>
  </div>
  <modal
      title="信息"
      :show.sync="isShow"
      effect="fade"
      width="400px"
      ok-text="确认"
      cancel-text="取消"
      backdrop="false"
      :callback="confirEvent">
    <div slot="modal-body" class="modal-body">...</div>
  </modal>
  <button type="button" name="button" class="btn btn-primary" @click="isShow=true">Modal</button>
</template>

<script>
import {modal} from 'vue-strap'
export default {
  data() {
    return {
      isShow: false
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
    confirEvent(){
      alert('ss');
      this.isShow = false;
    }
  },
  components: {modal}
};
</script>

<style lang="css">
</style>
