<template>
  <div class="comments">
    <el-header>
      <el-row>
        <el-col class="comment-title" :span="12">留言</el-col>
      </el-row>
      <el-divider></el-divider>
    </el-header>
    <el-main class="comment-input">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-input
            size="small"
            placeholder="昵称"
            v-model="username">
             <i slot="prefix" class="el-input__icon el-icon-user"></i>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-input
            size="small"
            placeholder="邮箱"
            v-model="username">
             <i slot="prefix" class="el-input__icon el-icon-user"></i>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-button class="submit-btn" :disabled="submitDisable" round size="mini" type="primary" :loading="submitLoading">发表评论</el-button>
        </el-col>
      </el-row>
      <el-row class="comment-detail">
        <el-input
          type="textarea"
          :rows="3"
          resize="none"
          placeholder="请输入内容"
          @input="ReplyInput($event)"
          v-model="textarea">
        </el-input>
      </el-row>
    </el-main>

    <template v-for="(item, i) in comments">
      <el-divider :key="item.id"></el-divider>
      <el-main :key="item.id">
        <div class="reply-father">
          <div class="author-info">
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="author-name">{{item.name}}</div>
                <div class="author-time">{{item.time}}</div>
              </el-col>
              <el-col :span="12">
                <div class="icon-btn">
                    <span class="icon-btn-tag" @click="showReplyInput(i,item.name,item.id)"><svg-icon name="comments"/> {{item.reply.length}}</span>
                    <span class="icon-btn-tag"><svg-icon name="arrow-up"/> {{item.like}}</span>
                </div>
              </el-col>
            </el-row>
          </div>
          
          <div class="talk-box">
            <el-row>
              <el-col :span="24">
                {{item.comment}}
              </el-col> 
            </el-row>
          </div>
          <template v-for="reply in item.reply">
            <div class="reply-box" :key="reply.fromId">
               <div class="author-info">
                <el-row :gutter="20">
                  <el-col :span="12">
                    <div class="author-name">{{reply.from}}</div>
                    <div class="author-time">{{reply.time}}</div>
                  </el-col>
                  <el-col :span="12">
                    <div class="icon-btn">
                        <span class="icon-btn-tag"  @click="showReplyInput(i,reply.from,reply.fromId)"><svg-icon name="comments"/> {{reply.commentNum}}</span>
                        <span class="icon-btn-tag"><svg-icon name="arrow-up"/> {{reply.like}}</span>
                    </div>
                  </el-col>
                </el-row>
                <div class="talk-box">
                  <p>
                    <span>回复<a>{{reply.to}}</a>:</span>
                    <span class="reply">{{reply.comment}}</span>
                  </p>
                </div>
              </div>
            </div>
          </template>

           <div  v-show="_inputShow(i)" class="comment-reply">
              <el-input
                type="textarea"
                :rows="3"
                resize="none"
                :placeholder="'回复' + to"
                @input="ReplyInput($event)"
                v-model="textarea">
              </el-input>
              <div class="reply-btn-box">
                  <el-button class="reply-btn" size="mini" type="primary">发表评论</el-button>
                  <el-button class="reply-btn" size="mini" type="primary" @click="cancelInput()">取消</el-button>
              </div>
          </div>
        </div>
      </el-main>
    </template>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: 'Comments',
  components: {

  }
})



export default class Comments extends Vue{
  counts =10;
  textarea: string = '';
  username: string = '';
  submitLoading: boolean = false;
  submitDisable: boolean = true;

  index: number = 0;
  to: string = '';
  toId: number = -1;

  comments = [
      {
          name:'Lana Del Rey',
          id:19870621,
          headImg:'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg',
          comment:'我发布一张新专辑Norman Fucking Rockwell,大家快来听啊',
          time:'2019年9月16日 18:43',
          commentNum:2,
          like:15,
          inputShow:false,
          reply:[
              {
                  from:'Taylor Swift',
                  fromId:19891221,
                  fromHeadImg:'https://ae01.alicdn.com/kf/H94c78935ffa64e7e977544d19ecebf06L.jpg',
                  to:'Lana Del Rey',
                  toId:19870621,
                  comment:'我很喜欢你的新专辑！！',
                  time:'2019年9月16日 18:43',
                  commentNum:1,
                  like:15,
                  inputShow:false
              },
              {
                  from:'Ariana Grande',
                  fromId:1123,
                  fromHeadImg:'https://ae01.alicdn.com/kf/Hf6c0b4a7428b4edf866a9fbab75568e6U.jpg',
                  to:'Lana Del Rey',
                  toId:19870621,
                  comment:'别忘记宣传我们的合作单曲啊',
                  time:'2019年9月16日 18:43',
                  commentNum:0,
                  like:5,
                  inputShow:false

              }
          ]
      },
      {
          name:'Taylor Swift',
          id:19891221,
          headImg:'https://ae01.alicdn.com/kf/H94c78935ffa64e7e977544d19ecebf06L.jpg',
          comment:'我发行了我的新专辑Lover',
          time:'2019年9月16日 18:43',
          commentNum:1,
          like:5,
          inputShow:false,
          reply:[
              {
                  from:'Lana Del Rey',
                  fromId:19870621,
                  fromHeadImg:'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg',
                  to:'Taylor Swift',
                  toId:19891221,
                  comment:'新专辑和speak now 一样棒！',
                  time:'2019年9月16日 18:43',
                  commentNum:25,
                  like:5,
                  inputShow:false

              }
          ]
      },
      {
                  name:'Norman Fucking Rockwell',
                  id:20190830,
                  headImg:'https://ae01.alicdn.com/kf/Hdd856ae4c81545d2b51fa0c209f7aa28Z.jpg',
                  comment:'Plz buy Norman Fucking Rockwell on everywhere',
                  time:'2019年9月16日 18:43',
                  commentNum:0,
                  like:5,
                  inputShow:false,
                  reply:[]
              },
  ]
  ReplyInput($event: string) {
    const reply = this.textarea.replace(new RegExp(' ', 'g'), '');
    this.submitDisable = !(reply.length > 0);
  }

  _inputShow(i: number){
    return this.comments[i].inputShow 
  }

  cancelInput() {
    this.comments[this.index].inputShow = false
  }

  showReplyInput(index: number, name: string, toId: number) {
     this.comments[this.index].inputShow = false
      this.index = index;
      this.comments[index].inputShow = true
      this.to = name
      this.toId = toId
  }
}
</script>


<style lang="less" scoped>
  
.comments {

  /deep/ .el-divider {
    margin: 5px auto;
  }

  /deep/ .el-main {
    padding: 10px;
  }

  .reply-father {
    .author-info {

      .author-name {
        color: #000;
        font-size: 18px;
        font-weight: bold;
      }

      .author-time {
        font-size: 14px;
        padding-top: 5px;
      }
      .icon-btn {
        text-align: right;
        padding-right: 30px;
        font-size: 15px;
        line-height: 36px;
        .icon-btn-tag {

          &:hover {
            text-decoration: underline;
          }

          &:not(:last-child) {
            margin-right: 3px;
          }
        }
       
      }
    }

    .talk-box {
      padding-top: 5px;

      a {
        color: #0e90d2;
      }

      .reply {
        text-decoration: none;
        
      }
    }

    .comment-reply {
      // margin-top: 10px;
      padding:  10px 20px;
      .reply-btn-box {
        padding-top: 10px;
      }
    }

    .reply-box {
      padding: 10px 20px 5px;
    }
  }

  .submit-btn {
    padding: 7px 15px;
    padding-top: 10px;
  }
  
  .comment-title {
    text-align: left;
    font-size: 26px;
    min-height: 30px;
    line-height: 30px;
  }

  .comment-input {
    padding: 0px 20px 20px 15px;
    .comment-detail {
      padding-top: 10px;
    }
  }

}
 
  
</style>
