<template>
  <div>
    <div class="article">
      <el-container>
        <el-header>
          <el-row>
            <el-col class="article-title" :span="24">文章标题</el-col>
          </el-row>
          <el-row>
            <el-col class="article-description" :span="24">
                <svg-icon name="editor"/> 作者xxxxx<el-divider direction="vertical"></el-divider>
                <a href="javascript:;" class="article-folder"><svg-icon name="folder"/> 目录1</a><el-divider direction="vertical"></el-divider>
                <svg-icon name="tags"/>
                <div class="article-tags">
                  <a class="article-tag" v-for="num of count" :key="num" href="javascript:;"> 标签{{num}}</a>
                </div> 
                <el-divider direction="vertical"></el-divider>
                <svg-icon name="views"/> 999
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <div class="markdown-body article-detail" v-html="value"></div>
        </el-main>
        <el-footer>
          <el-row>
            <el-col :span="8" class="article-before">上一篇:<a class="article-link" href="javascript:;">文章1文章1文章1文章1文章1文章1文章1文章1</a></el-col>
            <el-col :span="8" :offset="8" class="article-next">下一篇:<a class="article-link" href="javascript:;">文章2文章2文章2</a></el-col>
          </el-row>
        </el-footer>
      </el-container>
    </div>

    <div class="comment-area">
      <comments/>
    </div>
    
    <div class="comment-area">
      <article-comment/>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Comments from '@/components/Comments.vue';
import ArticleComment from '@/components/Comments-js.vue';

@Component({
  name: 'Article',
  components: {
    Comments,
    ArticleComment
  }
})

export default class Article extends Vue{
    count = [1,2,3,4];
    value = `##你好
    
        

        ## hello
    `;
}
</script>


<style lang="less" scoped>

  .comment-area {
    background-color: #fff;
    padding-top: 20px;
    margin: 20px auto;
    // min-height: 300px;
    width: 900px;
  }
  
  .article  {
    background-color: #fff;
    padding-top: 20px;
    margin: 20px auto;
    // min-height: 300px;
    width: 900px;

    .el-divider {
      margin: 0 10px;
    }

    .el-footer {
      min-height: 24px;
      line-height: 24px;
    }

    .article-folder {
      &:hover {
        color: blue;
        text-decoration: underline;
      }
    }

    .article-tags { 
      display: inline-block;
      

      .article-tag {
        &:hover {
          color: blue;
          text-decoration: underline;
        }

        &:not(:last-child) {
          margin-right: 5px;
        }

        &:first-child {
          margin-left: 3px;
        }

      }   
    }

    .article-link {
      padding-left: 14px;
      &:hover {
        color: blue;
        text-decoration: underline;
      }
    }

    .article-description {
      padding: 8px;
      text-align: center;
      font-size: 14px;
      color: #7e8c8d;

    }

    .article-before {
      text-align: left;
    }

    .article-next {
      text-align: right;
    }

    .article-title {
      text-align: center;
      font-size: 20px;
    }
    .article-detail {
      padding: 10px;
      text-align: left;
      // border-width: 1px;
      border-style: outset;
    }
  }
  
</style>
