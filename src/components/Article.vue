<template>
  <div class="article-wrapper">
    <div class="article">
      <el-container>
        <el-header>
          <el-row>
            <el-col :span="24">
              <div class="article-header">
                <a class="article-title">
                  title
                </a>
                <div class="article-introduction">
                  <span>Posted on {{postDate}}</span> |
                  <span>In <a>{{category}}</a></span> |
                  <span>visitors {{visitors}}</span> 
                </div>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <el-main class="article-content">
          <div class="img-box">
            <img class="img-content" src="https://i.loli.net/2020/08/30/RfLEX7Ty1FlqbGm.jpg">
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Article extends Vue {
  @Prop() private msg!: string;

  postDate: string = '2020-08-24';
  category: string = '数据结构';
  visitors: number = 299;
}
</script>

<style scoped lang="less">




.article-wrapper {
  width: 700px;
  min-width: 700px;
  
  height: 400px;
  margin: 10px auto 10px;
  z-index: 0;
  .article {
    background-color: white;
    padding-bottom: 10px;
    width: 100%;
    height: 90%;
    padding-top: 20px;
    .article-header {
      text-align: center;
      transition: all 2s;
      .article-title {
        height: 60%;
        line-height: 100%;
        padding-bottom: 0;
        position: relative;
        text-decoration: none;
        font-size: 20px;

        &::before {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -2px;
          width: 0;
          height: 2px;
          background: #4285f4;
          transition: all .3s;
        }

        &:hover::before {
            width: 100%;
            left: 0;
            right: 0;
        }
      }

      .article-introduction {
        height: 30%;
        font-size: 12px;
        padding-top: 10px;
        color: #999;

      }

      
    }

    .article-content {
      height: 310px;
      .img-box {
        
        .img-content {
          width: 70%;
          height: auto;
          margin: 0 auto;
          display: block;
        }
      }
    }

    
  }
 
}

</style>
