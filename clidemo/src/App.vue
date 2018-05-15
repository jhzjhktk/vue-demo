<template>
  <div id="app">
    <ul class="nav-box">
      <router-link :to="indexLink" exact tag="li">Home</router-link>
      <router-link :to="{path: '/About'}" tag="li" active-class="about-active">About</router-link>
      <!-- <router-link :to="{path: '/About'}" tag="li" active-class="about-active" event="mouseover">About</router-link> -->
      <router-link to="Document" tag="li">Document</router-link>
      <router-link to="user" tag="li">user</router-link>
    </ul>
    {{this.$route.meta.index}}
    <transition :name="names">
      <router-view class="content-class"></router-view>
    </transition>
    <router-view name="slider"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      indexLink: '/home',
      names: 'left'
    }
  },
  watch: {
    $route (to, from) {
      if (to.meta.index > from.meta.index) {
        this.names = 'left'
      } else {
        this.names = 'right'
      }
    }
  }
}
</script>

<style>
.v-enter{
  opacity: 0;
}
.v-enter-to{
  opacity: 1;
}
.v-enter-active{
  transition: 1s;
}
.v-leave{
  opacity: 1;
}
.v-leave-to{
  opacity: 0;
}
.v-leave-active{
  transition: 2s;
}
.left-enter{
  transform: translateX(100%);
}
.left-enter-to {
  transform: translateX(0)
}
.left-enter-active{
  transition: 1s;
}
.left-leave{
  transform: translateX(0)
}
.left-leave-to{
  transform: translateX(-100%)
}
.left-leave-active{
  transition: 1s;
}
.right-enter{
  transform: translateX(-100%);
}
.right-enter-to {
  transform: translateX(0)
}
.right-enter-active,.right-leave-active{
  transition: 1s;
}
.right-leave-to{
  transform: translateX(100%)
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  padding: 0;
  margin: 0;
}
ul{
  list-style: none;
}
li{
  padding: 0;
  float: left;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  line-height: 50px;
  cursor: pointer;
}
.nav-box{
  height: 50px;
  width: 100%;
  background: cornflowerblue;
}
.nav-active{
  background: yellow;
}
.about-active{
  background: pink;
}
.content-class{
  font-size: 40px;
  text-align: center;
}
</style>
