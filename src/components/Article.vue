<template>
  <div class="article-wrapper">
    <div class="article">
      <el-container>
        <el-header>
          <el-row>
            <el-col :span="24">
              <div class="article-header">
                <a class="article-title">
                  {{articleInfo.title}}
                </a>
                <div class="article-introduction">
                  <span>Posted on {{articleInfo.author}}</span> |
                  <span>In <a href="javascript:void">{{articleInfo.category? articleInfo.category.label : ' '}}</a></span> |
                  <span>tags: 
                    <el-tag class="article-tag" @click="tagClick(tag.id)" type="success" size="mini" v-for="tag in articleInfo.tags" :key="tag.id">
                      {{tag.tagName}}
                    </el-tag>
                  </span> |
                  <span>visitors {{articleInfo.views}}</span> 
                </div>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <el-main class="article-content">
          <div class="img-box">
            <img class="img-content" :src="articleInfo.coverUrl">
          </div>
          <div class="content">
              {{articleInfo.content}}
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts">
import { ArticleDto } from '@/models';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Article extends Vue {
  @Prop() private msg!: string;

  @Prop() private articleInfo!: ArticleDto;


  created() {
  }

  tagClick(tagId: string) {
    console.log(tagId);
  }
}
</script>

<style scoped lang="less">

.article-wrapper {
  width: 700px;
  min-width: 700px;
  
  margin: 10px auto 10px;
  z-index: 0;
  .article {
    background-color: white;
    padding-bottom: 10px;
    width: 100%;
    padding-top: 20px;
    .article-header {
      text-align: center;
      transition: all 2s;
      height: 42px;
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

        .article-tag {
          &:hover {
            cursor: pointer;
          }
        }

      }

      
    }

    .article-content {
      padding-top: 0px;
      .img-box {
        max-height: 260px;
        margin-bottom: 10px;
        display:flex;
        align-items:center; 
        justify-content:center;
        .img-content {
          max-height: inherit;
          display: block;
        }
      }

      .content {

      }
    }

    
  }
 
}

</style>
