<template>
  <div id="app">
    <ul class="nav-box">
      <router-link :to="indexLink" exact tag="li" event="mouseover">Home</router-link>
      <router-link :to="{path: '/About'}" tag="li" active-class="about-active" event="mouseover">About</router-link>
      <router-link to="Document#target" tag="li">Document</router-link>
    </ul>
    <router-view class="content-class"></router-view>
    <router-view name="slider"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      indexLink: '/home'
    }
  }
}
</script>

<style>
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
  background: #ffffff;
}
.about-active{
  background: pink;
}
.content-class{
  font-size: 40px;
  text-align: center;
}
</style>
