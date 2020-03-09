
<template>
  <div id="app">
    <Nav>
    </Nav>
    <router-view/>
    <Foot></Foot>
  </div>
</template>
<script>
  import Nav from "./views/public/nav.vue"
  import Foot from "./views/public/foot.vue"
  export default {
    components: {
      Nav,
      Foot
    }
  }
</script>
<style lang="less">
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
</style>
