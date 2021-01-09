<template>
  <div id="app">

    <Header></Header>
    <div class="main-section">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: "App",
  components: {
    Header
  }
};
</script>



<style scoped  lang="scss">
#app {
  color: rgba($color: white, $alpha: 0.65);
  font-size: 16px;
}
* {
  margin: 0;
  padding: 0;
}
.main-section {
  width: 800px;
}

</style>
