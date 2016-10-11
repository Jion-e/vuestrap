<template>
<div class="sec">
  <Accordion></Accordion>
</div>
<div class="sec">
  <Affix></Affix>
</div>
<div class="sec">
  <alert></alert>
</div>
<div class="sec">
  <aside></aside>
</div>
<div class="sec">
  <button-group></button-group>
</div>
<div class="sec">
  <datepicker></datepicker>
</div>
<div class="sec">
  <dropdown></dropdown>
</div>
<div class="sec">
  <v-input></v-input>
</div>
<div class="sec">
  <modal></modal>
</div>
</template>

<script>
// import 'bootstrap';
import accordion from './components/Accordion.vue'
import affix from './components/Affix.vue'
import alert from './components/Alert.vue'
import aside from './components/Aside.vue'
import buttonGroup from './components/buttonGroup.vue'
// import carousel from './components/Carousel.vue'
// import checkbox from './components/Checkbox.vue'
import datepicker from './components/Datepicker.vue'
import dropdown from './components/Dropdown.vue'
// import formGroup from './components/FormGroup.vue'
import vInput from './components/Input.vue'
import modal from './components/Modal.vue'
// import navbar from './components/Navbar.vue'
// import option from './components/Option.vue'
// import panel from './components/Panel.vue'
// import popover from './components/Popover.vue'
// import progressbar from './components/Progressbar.vue'
// import radio from './components/Radio.vue'
// import select from './components/Select.vue'
// import slider from './components/Slider.vue'
// import spinner from './components/Spinner.vue'
// import tab from './components/Tab.vue'
// import tabGroup from './components/TabGroup.vue'
// import tabset from './components/Tabset.vue'
// import tooltip from './components/Tooltip.vue'
// import typeahead from './components/Typeahead.vue'
  export default {
    name: 'app',
    components: {
      accordion,
      affix,
      alert,
      aside,
      buttonGroup,
      // carousel,
      // checkbox,
      datepicker,
      dropdown,
      // formGroup,
      vInput,
      modal,
      // navbar,
      // option,
      // panel,
      // popover,
      // progressbar,
      // radio,
      // select,
      // slider,
      // spinner,
      // tab,
      // tabGroup,
      // tabset,
      // tooltip,
      // typeahead
    }
  };
</script>
<style media="screen">
boyd{padding: 40px;}
.sec{background: #eee;margin: 20px;padding: 10px;}
p{line-height: 2;font-size: 16px;}
</style>
