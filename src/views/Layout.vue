<template>
  <div class="home">
    <Navigation />
    <!-- <el-button @click="click()">默认按钮</el-button>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view/>
  </div>
</template>

<script lang="ts">
import { user_login } from '@/api/login-api';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navigation from '@/components/Navigation.vue';
import { LoginDTO } from '@/models';
import { UserModule } from '@/store/modules';
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: 'home',
  components: {
    HelloWorld,
    Navigation
  }
})

export default class Layout extends Vue{

  loginForm: LoginDTO = {
    username: 'xiaoma',
    password: '123456'
  }

  click() {
    UserModule.Login(this.loginForm);
  }
}
</script>


<style lang="less" scoped>
  
  .home {
    height: 1000px;
    background-color: aqua;
  }
  
</style>
