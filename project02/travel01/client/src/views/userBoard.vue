<template>
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
</script>