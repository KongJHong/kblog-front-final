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
        <el-col :span="8">
          <div class="navbar-middle">
            middle
          </div>
        </el-col>
        <el-col :span="8"><div class="navbar-right">right</div></el-col>
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
  
}
</script>

<style lang="less" scoped>
  
  .navbar-wrapper {
    line-height: 50px;
    height: 50px;
    width: 100%;
    z-index: 9;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(255, 255, 255, 0.8);

    .navbar-left {
      text-align: left;
      padding-left: 30px;
    }

    .navbar-middle {
      text-align: center;
    }

    .navbar-right {
      text-align: right;
      padding-right: 30px;
    }

    

  }
  
</style>