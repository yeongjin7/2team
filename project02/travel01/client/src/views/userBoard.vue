<!-- <template>
    <div>
        <h1>게시판</h1>
        <button @click="goToPage('/userBoardCreate')" >글쓰기</button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      methods: {
        goToPage(target) {
          if (this.$router.currentRoute.path !== target) {
            this.$router.push(target);
          }
        }
      }
    }
  }
}
</script> -->
<template>
  <div>
      <h1>게시판</h1>
  </div>
  
  <section>
      <div class="md-btn">
      <b-button variant="outline-dark" class="mdBoard" v-on:click="goMade('/userBoardCreate')">만들기</b-button>

      </div>
  </section>
  
  
</template>

<script>
export default{
      methods: {
      goMade(target) {
          if (this.$router.currentRoute.path !== target) {
              this.$router.push(target);
          }
      }
  }
}
</script>

<style>
.md-btn{
  text-align: right;
}
.mdBoard{
  width: 100px;
  display: inline;
  position: relative;
  }
</style>