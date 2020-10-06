<template>
  <div class="navbar-wrapper">
    <!-- 内部容器，左中右 -->
    <el-row>
        <el-col :span="8">
          <div class="navbar-left">
            <el-button @click="showDrawer()" type="primary" size="small">
              <i class="el-icon-s-grid"></i>
            </el-button>
          </div>
        </el-col>
        <!-- 中间按钮 -->
        <el-col :span="8">
          <div class="navbar-middle">            
            <el-button icon="el-icon-s-home" circle @click="toHome()"></el-button>
            <el-button icon="el-icon-folder" circle @click="toCategories()"></el-button>
            <el-button icon="el-icon-s-order" circle @click="toArticle()"></el-button>
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
      direction="rtl"
      :modal="false"
      :visible.sync="drawerVisible"
      size="25%"
      :with-header="false">

        <el-card class="box-card">
          <div slot="header" class="card-header">
             <div class="card-header-title"> KongJHong's Blog </div>
             <div class="card-header-tags">
               <el-tag type="info" class="tag" size="mini">标签三</el-tag>
               <el-tag type="info" class="tag" size="mini">标签三</el-tag>
               <el-tag type="info" class="tag" size="mini">标签三</el-tag>
             </div>
          </div>
          <!-- 个人简介 -->
          <div class="card-introduction">
            <div class="card-introduction-self">
              <el-row :gutter="20" style="margin:0">
                <el-col :span="8">
                  <img class="card-introduction-self-img" src="https://kongjhong-image.oss-cn-beijing.aliyuncs.com/imgvue-logo.png"/>
                </el-col>
                <el-col :span="16">
                  <div class="card-introduction-self-name">KongJHong</div>
                  <div class="card-introduction-self-desc">简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介</div>
                </el-col>
              </el-row>
            </div>

            <div class="card-introduction-contect">
                <div>
                  微信:&nbsp;&nbsp;nail_candy<br>
                  QQ:&nbsp;&nbsp;348751928
                </div>
                <el-divider/>
                <div class="card-introduction-contect-logo">
                  <a href="#" >
                    <svg-icon style="width:40px; height:40px;" name="github"></svg-icon>
                  </a>
                  <a href="#">
                    <svg-icon style="width:40px; height:40px;" name="github"></svg-icon>
                  </a>
                  <a href="#">
                    <svg-icon style="width:40px; height:40px;" name="github"></svg-icon>
                  </a>
                </div>
            </div>
            
            
          </div>

          <!-- 最新评论 -->
          <div class="card-lastest-comments">
            <span><svg-icon name="pen"/> |  最新评论</span>
            <el-divider></el-divider>
            <template v-for="index of 5">
              <comment-ticket :key="index"></comment-ticket>
              <el-divider :key="index"></el-divider>
            </template>
          </div>

          <div class="card-website-info">
            <span><svg-icon name="info"/> |  网站信息</span>
            <el-divider></el-divider>
            <div class="website-info-box">
              <span class="each-info"><svg-icon name="document"/> 文章总数: xx 篇</span>
              <span class="each-info"><svg-icon name="folder"/> 目录总数: xx 个</span>
              <span class="each-info"><svg-icon name="tags"/> 标签个数: xx 个</span>
              <span class="each-info"><svg-icon name="pen"/> 留言总数: xx 条</span>
              <span class="each-info"><svg-icon name="comments"/> 评论总数: xx 条</span>
              <span class="each-info"><svg-icon name="calendar"/> 最后更新时间: 2020-10-05 20:00:00</span>
            </div>
          </div>
        </el-card>
        
    </el-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CommentTicket from './Comment-ticket.vue';
@Component({
  components:{
    CommentTicket
  }
})
export default class Navigation extends Vue {
    drawerVisible = false;
    

    searchContent = '';

    doSearch() {
    }

    showDrawer() {
      this.drawerVisible = !this.drawerVisible;
    }


    toCategories() {
      this.$router.push({
        path: '/categories'
      })
    }

    toHome() {
      this.$router.push({
        path: '/'
      })
    }

    toArticle() {
      this.$router.push({
        path: '/article'
      })
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
    // background-color: rgba(255, 255, 255, 1);
    background-image: url("../assets/amber.jpg");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0 0px 0 rgb(67, 47, 40),
                0 0 15px #412f1c,
                0 1px 3px rgba(0, 0, 0, .05);

    z-index: 99999;

    .navbar-left {
      text-align: left;
      padding-left: 30px;
      background-color: inherit;
    }

    /deep/ .el-drawer {
      overflow: scroll;
      &::-webkit-scrollbar{
        width: 0px !important;
        height: 0px;
      }
    }

    /deep/ :focus {
      outline: 0;
    }


    .box-card {
      width: inherit;
      border-left-width: 0px;
      border-right-width: 0px;

      /deep/ .el-card__header {
        padding: 0;
        background-color: #0997F7;
      }
      
      .card-header {
        width: 100%;
        display: inline-block;
        height: 40px;
        line-height: 40px;
        

        .card-header-title {
          color: #fff;
          margin: 0 auto;
          text-align: center;
          font-size: 26px;
          
          
        }

        .card-header-tags {
            padding: 0 20px;
            text-align: center;
            .tag:not(:first-child) {
              margin-left: 10px;
            }
        }
      }

      .card-introduction {
        width: 100%;
        min-height: 260px;
        background-color: #eeeeee;
        box-shadow: 0 0px 0 #e5e5e5,
              0 0 15px rgba(0, 0, 0, .12),
              0 2px 4px rgba(0, 0, 0, .05);

        .card-introduction-self {
          
          .card-introduction-self-img {
            width: 100px;
            height: 100px;
            
          }

          .card-introduction-self-name {
            line-height: 30px;
            font-weight: bold;
            height: 30px;
            text-align: left;
            margin-top: 0px;
          }

          .card-introduction-self-desc {
            height: 70px;
            overflow: hidden;
            line-height: 20px;
            font-size: 13px;
            color: #808080ad;
          }
        }

        .card-introduction-contect {
          width: 100%;
          height: 135px;
          line-height: 1.6em;
          font-size: 14px;
          text-align: center;
          color: #009688;

          /deep/ .el-divider {
            width: 80%;
            margin: 20px auto;
          }

          .card-introduction-contect-logo {
            line-height: 40px;

            a:not(:first-child) {
              margin-left: 10px;
            }
          }
        }

        
      }

      .card-lastest-comments ,.card-website-info {
          width: 100%;
          min-height: 260px;
          background-color: #eeeeee;
          margin-top: 20px;
          line-height: 36px;
          padding: 0 5px;
          font-weight: bold;
          box-shadow: 0 0px 0 #e5e5e5,
              0 0 15px rgba(0, 0, 0, .12),
              0 2px 4px rgba(0, 0, 0, .05);

          /deep/ .el-divider {
            margin: 0;
            display: block;
            height: 1px;
            width: 92%;
          }

          .website-info-box {
            padding: 10px;
            font-weight: normal;
            
            .each-info {
              display: block;
            }
          }
          
      }

    }



    .navbar-middle {
      text-align: center;
      // background-color: #fff;
      .el-button {
        background-color: #fff;
      }
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