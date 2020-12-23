<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import {useRem} from '@/utils/useRem'
export default {
  name: 'app',
  data() {
    return {}
  },
  mounted() {
    useRem()
  }
}
</script>

<style lang="scss">

</style>
