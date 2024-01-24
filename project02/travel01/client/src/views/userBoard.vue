<template>
  <section class = "userBoardcontent">
    <div>
      <h1 class = "Board-list">게시판</h1>
    </div>

    <div class="md-btn"> <!-- 만들기 버튼 클릭 시, goMade 함수 실행 -->
      <b-button variant="outline-dark" class="mdBoard" v-on:click="goMade('/userBoardCreate')">만들기</b-button>
    </div>

    <div>
      <!--      <div ref="scrollcheck"> 무한 스크롤... 인데... 구현 x -->
      <div class = "BoardContent">
        <div v-for = "게시판 in board" :key = "게시판.boardNo">
          <button @click = "goBoardDt(게시판.boardNo)">
            <img class = "BoardImg" :src="게시판.boardImg" />
            <h3 class = "BoardTitle">{{ 게시판.title }}</h3>
            <h1 class = "BoardName">작성자 : {{ 게시판.name }}</h1>
          </button>
        </div>
        <!--          <infinite-loading @infinite="infiniteHandler"></infinite-loading> 무한 스크롤... 인데... 구현 x -->
      </div>
      <!--      </div> 무한 스크롤... 인데... 구현 x -->
    </div>

  </section>

</template>

<script>
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
      if (this.$router.currentRoute.path !== target) {
        this.$router.push(target);
      }
    },
    goBoardDt(boardNo) {
      this.$router.push({ name: 'boardDetail', params: { boardNo: boardNo } });
    }
  },
  mounted() {
    // console.log("마운트자리")
    this.getName();

  },


}


</script>

<style>
.userBoardcontent{
  margin: 0 auto;
  text-align: center;
}
.Board-list{
  margin-top: 30px;
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
}
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
  column-gap: 300px;
  row-gap: 70px;
  justify-content: space-evenly;
  align-content: center;
  justify-items: center;
  margin-top: 50px;
  margin-right: 300px;
  margin-left: 300px;
  margin-bottom: 100px;
}
.BoardImg {
  width: 300px;
}
.BoardTitle{
  font-size: 26px;
  text-align: center;
  margin: 10px;
}
.BoardName {
  //margin: 10px;
  font-size: 16px;

}

</style>