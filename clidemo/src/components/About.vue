<template>
  <div>
    关于我 about
    <hr>
    <ul>
      <router-link to="/about" exact tag="li">study</router-link>
      <router-link to="/about/work" tag="li">work</router-link>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav-active{
  background: yellow;
}
</style>
