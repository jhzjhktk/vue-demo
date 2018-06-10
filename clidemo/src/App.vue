<template>
  <div id="app">
    <ul class="nav-box">
      <router-link :to="indexLink" exact tag="li">Home</router-link>
      <router-link :to="{path: '/About'}" tag="li" active-class="about-active">About</router-link>
      <!-- <router-link :to="{path: '/About'}" tag="li" active-class="about-active" event="mouseover">About</router-link> -->
      <router-link to="Document" tag="li">Document</router-link>
      <router-link to="user" tag="li">user</router-link>
    </ul>
    <!-- {{this.$route.meta.index}} -->
    <input type="button" value="后退" @click="backHandle" />
    <button @click="forwardHandle">前进</button>
    <button @click="goHandle">后退或前进指定步数</button>
    <button @click="pushHandle">控制指定的导航push</button>
    <button @click="replaceHandle">控制指定的导航replace</button>

    <transition :name="names">
      <router-view class="content-class"></router-view>
    </transition>
    <!-- <router-view name="slider"></router-view> -->
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
  },
  methods: {
    backHandle () {
      this.$router.back()
    },
    forwardHandle () {
      this.$router.forward()
    },
    goHandle () {
      // this.$router.go(-1)//后退
      this.$router.go(1) // 前进
    },
    pushHandle () {
      this.$router.push('/Document') // 往url栈里push一个地址
    },
    replaceHandle () {
      this.$router.replace('/user')
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
  position: absolute;
  top: 100px;
  width: 100%;
}
</style>
