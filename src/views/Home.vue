<template>
  <div class="home">
    <stick-sidebar/>

    <div class="articles">
      <Article v-for="article in articles" :key="article.id" :articleInfo="article"/>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {getAllArticles} from '@/api/article-api';
import StickSidebar from "@/components/StickSidebar.vue";
import Article from "@/components/Article.vue";
import { ArticleDto } from '@/models';
@Component({
  name: 'Home',
  components: {
    StickSidebar,
    Article
  }
})

export default class Home extends Vue{
   
  private articles: Array<ArticleDto> = [];

  created() {
    getAllArticles().then(resp => {
      this.articles = resp.data;
    })
  }
}
</script>


<style lang="less" scoped>
  
  .home  {
    .articles {
      padding-top: 10px;
      overflow: hidden;
      overflow-y: auto;
    }
   
    
  }
  
</style>
