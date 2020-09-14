<template>
  <div class="navbar-wrapper">
    <!-- 内部容器，左中右 -->
    <el-row>
        <el-col :span="8">
          <div class="navbar-left">
            <el-button @click="drawer = true" type="primary" size="small">
              <i class="el-icon-s-grid"></i>
            </el-button>
          </div>
        </el-col>
        <!-- 中间按钮 -->
        <el-col :span="8">
          <div class="navbar-middle">            
            <el-button icon="el-icon-search" circle></el-button>
            <el-button icon="el-icon-search" circle></el-button>
            <el-button icon="el-icon-search" circle></el-button>
          </div>
        </el-col>
        <!-- 右侧按钮 -->
        <el-col :span="8">
          <div class="navbar-right">
            <el-row>
              <el-col :span="12" :offset="8">
                <el-input
                  size="medium"
                  placeholder="请输入需要查找内容"
                  prefix-icon="el-icon-search"
                  v-model="searchContent"
                  @keyup.enter.native="doSearch()">
                </el-input>
              </el-col>
              <el-col :span="4">
                <el-button type="text" class="signBtn">登录/注册</el-button>
              </el-col>
            </el-row>
            
          </div>
        </el-col>
    </el-row>

    <el-drawer
      title="我是标题"
      direction="ltr"
      :modal="false"
      :visible.sync="drawer"
      :with-header="false">
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Navigation extends Vue {
  // @Prop() private msg!: string;
    drawer = false;
    

    searchContent = '';

    doSearch() {
    }
  
}
</script>

<style lang="less" scoped>
  
  .navbar-wrapper {
    line-height: 50px;
    height: 50px;
    width: 100%;
    color: black;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(255, 255, 255, 1);

    .navbar-left {
      text-align: left;
      padding-left: 30px;
      background-color: inherit;
    }

    .navbar-middle {
      text-align: center;
      background-color: inherit;
    }

    .navbar-right {
      text-align: right;
      padding-right: 30px;
      background-color: inherit;

      .signBtn {
        color: black;
        :hover {
          color: blue;
        }
      }
    }

    

  }
  
</style>