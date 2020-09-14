<template>
  <div class="home">
    <stick-sidebar class="stick"/>

    <div class="articles">
      <Article v-for="count in counts" :key="count"/>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StickSidebar from "@/components/StickSidebar.vue";
import Article from "@/components/Article.vue";
@Component({
  name: 'Home',
  components: {
    StickSidebar,
    Article
  }
})

export default class Home extends Vue{
   counts =10;
}
</script>


<style lang="less" scoped>
  
  .home  {
    .articles {
      height: 100%;
      overflow: hidden;
      overflow-y: auto;
    }
   
    
  }
  
</style>
