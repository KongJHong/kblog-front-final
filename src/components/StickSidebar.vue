<template>
  <div class="stick-wrapper clearfix">
    <el-input
      placeholder="输入关键字进行过滤"
      v-model="filterText">
    </el-input>

    <el-tree
      class="filter-tree"
      :data="data"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      ref="tree">
    </el-tree>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class StickSidebar extends Vue {
  @Prop() private msg!: string;

  private defaultProps = {
          children: 'children',
          label: 'label'
        }

  data =  [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }, {
            id: 9,
            label: '二级 3-1'
          }, {
            id: 10,
            label: '二级 3-2'
          }, {
            id: 11,
            label: '二级 3-1'
          }, {
            id: 12,
            label: '二级 3-2'
          },{
            id: 13,
            label: '二级 3-1'
          }, {
            id: 14,
            label: '二级 3-2'
          }, {
            id: 15,
            label: '二级 3-1'
          }, {
            id: 16,
            label: '二级 3-2'
          }, {
            id: 17,
            label: '二级 3-1'
          }, {
            id: 18,
            label: '二级 3-2'
          }]
        }];


  constructor() {
    super();
    console.log("construct: ", this);
  }

  created() {
    console.log("created: ", this);
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


.stick-wrapper {
  position: fixed;
  top: 20%;
  width: 300px;
  height: 340px;
  overflow: hidden;
  overflow-y: auto;
  z-index: 0;
  background-color: rgba(120, 120, 120, 0.6);
}

</style>
