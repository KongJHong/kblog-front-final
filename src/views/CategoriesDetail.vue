<template>
  <div class="categorie-detail">
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="12" :offset="6">{{type == 'tag' ? '标签': '目录'}}</el-col>
        </el-row>
      </el-header>
      <el-main>
        
        <el-timeline>
          <template v-for="num in count" >
            <el-timeline-item timestamp="2018/4/12" placement="top" :key="num">
              <el-card :body-style="{ padding: '10px'}">
                <h4>更新 Github 模板</h4>
              </el-card>
            </el-timeline-item>
          </template>
        </el-timeline>
      </el-main>
    </el-container>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: 'CategoriesDetail',
  components: {
  }
})

export default class CategoriesDetail extends Vue{

  private type!: string; 
  private id!: string;

  isVisible:boolean = false;

  count =[1,2,3,4,5,6,7,8,9,0];

  created() {
    this.type = this.$route.params.type;
    this.id =this.$route.params.id;
    console.log(this.$route.params.type);
  }
}
</script>


<style lang="less" scoped>

  .card-style {
     padding: 10px !important;
  }
  
 .categorie-detail{
  width: 700px;
  margin: 10px auto;
  min-height: calc(100vh - 120px);
  background-color: #E9EEF3;
  padding-top: 10px;

    

   .el-container {
     .el-header {
       text-align: center;
       line-height: 30px;
     }

     .el-main {
       .el-timeline {
         .el-timeline-item {
           padding-bottom: 10px;
           .el-card__body {
              // padding: 10px !important;
            }
         }
       }
     }
   }
 }
  
</style>
