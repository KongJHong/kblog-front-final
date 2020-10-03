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
          <el-input v-clickout
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

    <el-main>
      <div class="reply-father">
        <div class="author-info">
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="author-name">作者名</div>
              <div class="author-time">2019年9月16日 18:43</div>
            </el-col>
            <el-col :span="12">
               <div class="icon-btn">
                  <span class="icon-btn-tag"><svg-icon name="comments"/> 2</span>
                  <span class="icon-btn-tag"><svg-icon name="arrow-up"/>15</span>
               </div>
            </el-col>
          </el-row>
        </div>
        <div class="talk-box">
          <el-row>
            <el-col :span="24">
                回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容
            </el-col>
          </el-row>
        </div>
        <div class="reply-box">
          
        </div>
      </div>
    </el-main>
      
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

   comments = [
     {
            btnShow: false,
            index:'0',
            replyComment:'',
            myName:'Lana Del Rey',
            myHeader:'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg',
            myId:19870621,
            to:'',
            toId:-1,
            comments:[
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
        }
   ];

   ReplyInput($event: string) {
      const reply = this.textarea.replace(new RegExp(' ', 'g'), '');
      this.submitDisable = !(reply.length > 0);
   }
}
</script>


<style lang="less" scoped>
  
.comments {

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

  .el-divider {
    margin: 8px 0px;
  }
}
 
  
</style>
