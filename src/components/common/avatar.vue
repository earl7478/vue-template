<template>
  <div class="inner_avatar"><img :src="userInfo.avatar ? userInfo.avatar : avatar" :style="{borderRadius: radius}" /></div>
</template>
<script>
import {mapGetters} from 'vuex' 
export default {
  name: 'avatar',
  props: {
    radius: {type: String, default:()=>{ return '0'}}
  },
  data() {
    return {
      avatar: require('@/assets/avatar.png')
    }
  },
  computed: {
    ...mapGetters(['userInfo']),
  },
  mounted() {
    console.log('userInfo', this.userInfo)
  },
  methods: {
    
  }
}
</script>
<style lang="scss" scoped>
.inner_avatar{ width: 100%; height: 100%; 
  img{ width: 100%; height: 100%;}
}
</style>