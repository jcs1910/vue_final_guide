<template>
  <div id="app">
    <tool-bar></tool-bar>
    <!-- url 주소에 따라서 router-view가 변경-->
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
 components: {
   ToolBar,
 },
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
