<template>
  <div class="header">
    <div class="inner_box">
      <div class="user_avatar">
        <div class="avatar"><avatar :radius="'50%'" /></div>
      </div>
      <div class="nav">{{$t('common.edit')}}</div>
    </div>
  </div>
</template>

<script>
import avatar from '@/components/common/avatar'
export default {
  name: 'comHeader',
  props: {
    msg: {type: String, default:()=>{return ''}}
  },
  components: {
    avatar
  }
}
</script>

<style scoped lang="scss">
.header{ padding: 0; 
  .inner_box{ display: flex; width: 100%;
    .user_avatar{width: 16%; position: relative;
      .avatar{ position: absolute; left: 0; top: 0; width: 100%; height: 100%; }
    }
    .user_avatar::before{ content: ''; display: block; padding-top: 100%; }
  }
}

</style>
