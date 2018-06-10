<template>
    <div>
      <div>我是user</div>
      <!-- <router-link style="padding: 0px 30px;" :to="'/user/'+item.userId" v-for="item in userList" :key="item.userId">{{item.userName}}</router-link> -->
      <router-link style="padding: 0px 30px;" :to="{path:'/user/'+item.userId,query:{'info':'fllow'}}" v-for="item in userList" :key="item.userId">{{item.userName}}</router-link>
      <div v-if="userInfo.userName">
        <p>姓名：{{userInfo.userName}}</p>
        <p>性别：{{userInfo.sex}}</p>
      </div>
      <hr >
      <div style="font-size:20px;" v-if="userInfo.userName">
        <!-- <router-link to="?info=fllow" exact>我的关注</router-link> -->
        <router-link :to="{path:'',query:{'info':'fllow'}}" exact>我的关注</router-link>
        <router-link :to="{path:'',query:{'info':'share'}}" exact>我的分享</router-link>
      </div>
      <div>
        {{$route.query}}
      </div>
    </div>
</template>

<script>
let data = [
  {
    userId: 1,
    sex: '男',
    userName: 'leo1'
  },
  {
    userId: 2,
    sex: '女',
    userName: 'leo2'
  },
  {
    userId: 3,
    sex: '男',
    userName: 'leo3'
  }
]
export default {
  data () {
    return {
      userList: data,
      userInfo: {}
    }
  },
  created () {
    this.getData()
  },
  watch: {
    $route () {
      this.getData()
    }
  },
  methods: {
    getData () {
      let id = this.$route.params.userId
      if (id) {
        this.userInfo = this.userList.filter((item) => {
          console.log(item.userId.toString() === this.$route.params.userId)
          return item.userId.toString() === this.$route.params.userId
        })[0]
      } else {
        this.userInfo = {}
      }
    }
  }
}
</script>

<style>
/* .nav-active{
  background: green;
} */
</style>
