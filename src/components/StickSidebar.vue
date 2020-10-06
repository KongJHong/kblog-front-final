<template>
  <div class="stick-wrapper">
    <el-card class="box-card" body-style="height: 340px;background-color:#f4f5f7">
        <el-input
          placeholder="输入关键字进行过滤"
          v-model="filterText">
        </el-input>
        <div class="search-box">
          <el-button plain type="small">返回默认列表</el-button>
        </div>
        <el-divider></el-divider>
        <el-tree
          class="filter-tree"
          :data="categories"
          :props="defaultProps"
          :filter-node-method="filterNode"
          ref="tree">
        </el-tree>
        
    </el-card>
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { getAllRootCategory} from '@/api/category-api';
import { CategoryDto } from '@/models';

@Component
export default class StickSidebar extends Vue {
  @Prop() private msg!: string;

  categories: Array<CategoryDto> = [];

  private defaultProps = {
          children: 'children',
          label: 'label'
        }



  constructor() {
    super();
  }

  created() {
    getAllRootCategory().then(resp => {
      this.categories = resp.data;
    })
  }

  // updated() {
  //   console.log("updated:", this)
  // }


  filterText =  ''
  @Watch('filterText')
  getFilterText(val: string) {
    (this.$refs.tree as any).filter(val);
  }




  filterNode(value: any, data: any) {
    if (!value) return true;
    return data.label.indexOf(value) !== -1;
  }
}
</script>

<style scoped lang="less">


.stick-wrapper{
  position: fixed;
  top: 20%;
  width: 300px;
  height: 340px;
  overflow: hidden;
  overflow-y: scroll;
  border-radius: 4px;
  z-index: 0;
  box-shadow: 0 0px 0 #e5e5e5,
              0 0 15px rgba(0, 0, 0, .12),
              0 2px 4px rgba(0, 0, 0, .05);

  &::-webkit-scrollbar{
    width: 0px !important;
    height: 0px;
  }

  .search-box {
    margin:15px auto 0px;
    width: 50%;
  }
  

  .filter-tree {
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: inherit;
  }


  /deep/ .el-divider {
    margin: 10px 0;
    display: block;
    height: 1px;
    width: 92%;
  }



}

</style>
