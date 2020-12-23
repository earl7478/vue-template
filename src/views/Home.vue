<template>
  <div class="home">
    <default-header></default-header>
    <span class="abc_" @click="goAbout">asdfsdgf</span>
  </div>
</template>

<script>
import defaultHeader from '@/components/defaultHeader.vue'

export default {
  name: 'Home',
  components: {
    defaultHeader
  },
  methods: {
    goAbout() {
      this.$router.push({path: '/About'})
    }
  }
}
</script>

<style lang="scss" scoped>
.abc_{font-size: 1rem;}
</style>
