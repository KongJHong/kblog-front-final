<template>
  <div class="stick-wrapper">
    <div>hello world</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class StickSidebar extends Vue {
  @Prop() private msg!: string;
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
