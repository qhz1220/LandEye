<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
  mounted() {
    if (this.$route.path !== '/menu/firstpage') {
      this.$router.push('/menu/firstpage');
    }
  }
}
</script>
<style>

</style>
