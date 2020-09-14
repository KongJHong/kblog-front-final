<template>
  <div>
    <el-container>
      <el-header  class="navbar"><Navigation/></el-header>
      <el-main class="home"><router-view/></el-main>
    </el-container>
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
    padding: 0px
  }

  el-header {
    height: 50px;
  }
  
</style>
