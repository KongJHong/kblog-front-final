<template>
  <div class="categories">
    <el-tabs class="tabs" v-model="activeTab" @tab-click="handleClick">
      <el-tab-pane label="目录" name="categories">
        <el-container>
          <el-header>
            <el-row :gutter="20">
              <el-col :span="12" :offset="6">共{{cateNum}}个目录</el-col>
            </el-row>
          </el-header>
          <el-main>
            <el-tree
              class="filter-tree"
              :data="categories"
              default-expand-all
              ref="tree">
            </el-tree>
          </el-main>
        </el-container>
      </el-tab-pane>
      <el-tab-pane label="标签" name="tags">
        <el-container>
          <el-header>
            <el-row :gutter="20">
              <el-col :span="12" :offset="6">共{{tags.length}}个标签</el-col>
            </el-row>
          </el-header>
          <el-main>
            <div class="tags-detail">
              <el-tag size="medium" v-for="tag of tags" :key="tag.id" @click="tagClick(tag.id)">
                {{tag.tagName}}({{tag.articlesNum}})
              </el-tag>
            </div>
          </el-main>
        </el-container>
      </el-tab-pane>
      
    </el-tabs>
    
   
  </div>

</template>

<script lang="ts">
import { getAllRootCategory } from '@/api/category-api';
import { getAllTags } from '@/api/tag-api';
import { CategoryDto, TagDTO } from '@/models';
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: 'Categories',
  components: {
    
  }
})

export default class Categories extends Vue{

  activeTab: 'categories' | 'tags' = 'categories';
 
  categories: Array<CategoryDto> = [];

  tags: Array<TagDTO> = [];

  cateNum:number = 0;

  created() {
    getAllRootCategory().then(resp => {
      this.categories = resp.data;
      this.cateNum = this.getCategoryNums(this.categories);
    })

    getAllTags().then(resp => {
      this.tags = resp.data;
    })
  }
  
  handleClick(tab: any, $event: MouseEvent) {
   
  }

  getCategoryNums(categories: Array<CategoryDto>): number {
    let num = categories.length || 0;
    for(const cate of categories) {
      if (cate.children?.length > 0) num += this.getCategoryNums(cate.children);
    }

    return num;
  }

  tagClick(tagId: string) {
    this.$router.push({
      path: `/category-detail/tag/${tagId}`,
      params: {
        id: tagId,
        type: 'tag'
      }
    });
  }


}
</script>


<style lang="less" scoped>
  
.categories {

  width: 700px;
  margin: 0 auto;
  padding-top: 20px;
  z-index: 0;
  

  .tabs {
    background-color: #fff;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    
  }

  .el-aside {
    background-color: #E9EEF3;
  }
  
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 40px !important;
    height: 40px !important;
  }
  
  
  

  /deep/ .el-container { 
    min-height: 500px;
    background-color: #e9eef3;
    box-shadow: 0 0px 0 rgb(67, 47, 40),
                0 0 15px #412f1c,
                0 1px 3px rgba(0, 0, 0, .05);
    .el-main { 
      color: #333;

      .el-tree {
        background-color: inherit;
      }
    }
  }

  .tags-detail {
    .el-tag {
      margin-right: 10px;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
 
  
</style>
