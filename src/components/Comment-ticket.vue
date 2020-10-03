<template>
  <div class="comment-ticket-wrapper">
      <el-row>
        <el-col :span="12">
          <div class="comment-title">
            <a href="#" title="的就撒来得及三">这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论</a>
          </div>
        </el-col>
        <el-col :offset="6" :span="6">
          <span class="comment-date">2020-09-15</span>
        </el-col>
      </el-row>

      <div class="comment-content">
        评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容
      </div>
    
      
      
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class CommentTicket extends Vue {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.comment-ticket-wrapper {
  width: 100%;
  background-color: inherit;
  line-height: 14px;
  margin-top: 8px;
  margin-bottom: 8px;

  .comment-title {
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 14px;

    a {
      color: #0e90d2;
    }
  }

  .comment-date {
    text-align: right;
    font-size: 0.7rem;
    color: #999;
  }

  .comment-content {
    // display: inline-block;
    font-size: 12px;
    margin-top: 5px;
    width: 95%;
    
    color: #999;
    // text-overflow: ellipsis;
    // white-space: nowrap;
    // overflow: hidden;
  }
}
</style>
