<template>
  <div class="drawer-wrapper">
      <el-drawer
        title="我是标题"
        direction="rtl"
        :modal="false"
        :visible.sync="pisVisible"
        :with-header="false">
          <div class="demo-drawer__content">
          </div>
          <div class="demo-drawer__footer">
            
          </div>
    </el-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Drawer extends Vue {
  @Prop() private isVisible!: boolean;

  private pisVisible: boolean = false;
 

  @Watch('isVisible')
  private onVisibleChange() {
    this.pisVisible = this.isVisible;
  }

  @Watch('pisVisible')
  private onPVisibleChange() {
    this.$emit('onVisibleChange', this.pisVisible);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
