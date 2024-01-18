<template>
  <section class = "userBoardcontent">
    <div>
        <h1>게시판</h1>  
    </div>

    <div class="md-btn">
        <b-button variant="outline-dark" class="mdBoard" v-on:click="goMade('/userBoardCreate')">만들기</b-button>
    </div>

    <div class = "BoardContent">
      <div v-for = "게시판 in board" :key = "게시판.id">
        <img class = "BoardImg" :src="게시판.boardImg" />
        <h1>{{ 게시판.userNo }}</h1>
        <h4 class = "BoardTitle">{{ 게시판.title }}</h4>
      </div>
    </div>
  </section>
  
</template>

<script>
<<<<<<< HEAD

import axios from "axios";

export default {

  data() {
    return {
      board: [],
    };
  },

  methods: {
    getName() { // 해당경로의 내용을 axios로 연결하여 get하겠다. // 8080;
      axios.get('http://localhost:5005/userBoard')
          .then((res) => {
            // console.log("응답 데이터: ", res.data);
              if (Array.isArray(res.data)) {
                this.board = res.data;
              }
            })
          .catch ((error) => {
            console.log(error);
           });
    },
    goMade(target) {
=======
export default{
      data() {
        return {
          BoardInfo: [
            {
              title: "1번째 게시물",
              imgUrl: ("/images/books_image/book02.jpg")
            },
            {
              title: "2번째 게시물",
              imgUrl: ("/images/books_image/book03.jpg")
            },
            {
              title: "3번째 게시물",
              imgUrl: ("/images/books_image/book04.jpg")
            },
            {
              title: "4번째 게시물",
              imgUrl: ("/images/books_image/book05.jpg")
            },
            {
              title: "5번째 게시물",
              imgUrl: ("/images/books_image/book06.jpg")
            },
            {
              title: "6번째 게시물",
              imgUrl: ("/images/books_image/book07.jpg")
            },
          ],
        }
      },
      methods: {
      goMade(target) {
>>>>>>> 130aa85c17aa570640e6aaec02d06b0a77836f20
          if (this.$router.currentRoute.path !== target) {
              this.$router.push(target);
          }
    },
  },
    mounted() {
    console.log("마운트자리")
    this.getName();
  },
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