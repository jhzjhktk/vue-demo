<template>
  <div>
    关于我 about
    <hr>
    <ul>
      <router-link to="/about" exact tag="li">study</router-link>
      <router-link to="/about/work" tag="li">work</router-link>
    </ul>
    <hr>
    {{test}}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      test: '改变前'
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter')
    next((vm)=>{
      vm.test = '改变后'
    } )
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  beforeRouteLeave (to, from, next) {
    console.log('beforeRouteLeave')
    next()
  }

}
</script>

<style>

</style>
