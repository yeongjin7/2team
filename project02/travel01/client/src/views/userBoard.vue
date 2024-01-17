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
  <section class = "userBoardcontent">
    <div>
        <h1>게시판</h1>
    </div>

    <div class="md-btn">
        <b-button variant="outline-dark" class="mdBoard" v-on:click="goMade('/userBoardCreate')">만들기</b-button>
    </div>

    <div class = "BoardContent">
      <div v-for = "게시판 in BoardInfo" :key = "게시판">
        <img class = "BoardImg" :src="게시판.imgUrl" />
        <h4 class = "BoardTitle">{{ 게시판.title }}</h4>
      </div>
    </div>
  </section>
  
</template>

<script>
export default{
      data() {
        return {
          BoardInfo: [
            {
              title: "1번째 게시물",
              // imgUrl: require("")
            },
            {
              title: "2번째 게시물",
              // imgUrl: require("")
            },
            {
              title: "3번째 게시물",
              // imgUrl: require("")
            },
            {
              title: "4번째 게시물",
              // imgUrl: require("")
            },
            {
              title: "5번째 게시물",
              // imgUrl: require("")
            },
            {
              title: "6번째 게시물",
              // imgUrl: require("")
            },
          ],
        }
      },
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
  margin-top: 12px;
  margin-right: 100px;
}
.mdBoard{
  width: 100px;
  display: inline;
  position: relative;
  }
.BoardContent {
  display: grid;
  grid-template-columns: repeat(3, 0px);
  column-gap: 30px;
  row-gap: 70px;
  justify-content: space-evenly;
  align-content: center;
  justify-items: center;
  margin: 100px;
}
.BoardImg {
  width: 300px;
}
.BoardTitle{
  text-align: center;
  margin: 30px;
}
</style>