<template lang="html">
  <div class="explain">
    <h1>Typeahead:</h1>
    <p>
      value(默认值):string       <br>
      data(本地提示数组):         <br>
      async(异步调用api路径): https://api.github.com/search/users?q=        <br>
      :limit(最多提示条数): "8"   <br>
      key                       <br>
      match-case: true/false     <br>
      match-start: true/false    <br>
      on-hit(点击后的回调函数)    <br>
      template
    </p>
  </div>
  <h4>查询github用户名</h4>
  <typeahead
    placeholder="github user"
    key="items"
    :data= "localData"
    async="https://api.github.com/search/users?q="
    value="wzp"
    :limit= "4"
    :template="githubTemplate"
    :on-hit="githubCallback">
</typeahead>
</template>

<script>
import {typeahead} from 'vue-strap'
export default {
  data() {
    return {
      githubTemplate: '<img width="18px" height="18px" :src="item.avatar_url"/> <span>{{item.login}}</span>',
      localData: ['wzp','yc','wj']
    };
  },
  partials: {},
  computed: {},
  ready() {},
  attached() {},
  methods: {
    githubCallback (items) {
      window.open(items.html_url, '_blank')
    }
  },
  components: {typeahead}
};
</script>

<style lang="css">
</style>
