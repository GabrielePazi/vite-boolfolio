<script>
import TheHeader from './components/TheHeader.vue';

export default {
  components: {
    TheHeader
  },
  data() {
    return {
    }
  }
}
</script>

<template>
  <TheHeader></TheHeader>

  <main>
      <router-link :to="{name: 'home'}"></router-link>

      <router-view></router-view>
  </main>
</template>

<style scoped></style>
