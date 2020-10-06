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
                  <span>
                    <el-tag class="article-tag" type="success">
                      {{articleInfo.source === 'ORIGINAL'? '原创': '转载'}}
                    </el-tag>
                  </span> 
                  <span><svg-icon name="calendar"/> {{articleInfo.createTime | format}}</span>
                  <span><svg-icon name="user"/> {{articleInfo.author}}</span>
                  <span class="article-tag"><svg-icon name="folder"/> {{articleInfo.category.label}}</span> 
                  <span><svg-icon name="views"/> {{articleInfo.views}}</span> 
                  <!-- <span>tags: 
                    <el-tag class="article-tag" @click="tagClick(tag.id)" type="success" size="mini" v-for="tag in articleInfo.tags" :key="tag.id">
                      {{tag.tagName}}
                    </el-tag>
                  </span> -->
                  
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
          <div class="tags-box">
            <span>
              <template v-for="tag in articleInfo.tags">
                <a @click="tagClick(tag.id)" class="article-tag" :key="tag.id">
                  <svg-icon name="tags"/> {{tag.tagName}}
                </a>
              </template>
              
              <!-- <el-tag class="article-tag" @click="tagClick(tag.id)" type="success" v-for="tag in articleInfo.tags" :key="tag.id">
                {{tag.tagName}}
              </el-tag> -->
            </span>
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts">
import { ArticleDto } from '@/models';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { formatDate } from '@/utils/timeUtil';

@Component({
  filters: {
    format: (value: string) => (formatDate('yyyy-MM-dd', new Date(value)))
  }
})
export default class Article extends Vue {
  @Prop() private msg!: string;

  @Prop() private articleInfo!: ArticleDto;


  created() {
    console.log(new Date(this.articleInfo.createTime!))
  }

  tagClick(tagId: string) {
    console.log(tagId);
  }
}
</script>

<style scoped lang="less">

.article-tag {
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}

.article-wrapper {
  width: 700px;
  min-width: 700px;
  box-shadow: 0 0px 0 #e5e5e5,
              0 0 15px rgba(0, 0, 0, .12),
              0 2px 4px rgba(0, 0, 0, .05);
  margin: 10px auto 10px;
  z-index: 0;
  .article {
    background-color: white;
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
        font-size: 1.5em;

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
        font-size: 1em;
        padding-top: 10px;
        color: #999;

        span  {
          &:not(:first-child) {
            margin-left: 5px;
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
        color: #565a5f;
        font-size: 1.0em;
      }

      .tags-box {
        margin-top: 15px;
        font-size: 0.9em;
      }
    }

    
  }
 
}

</style>
