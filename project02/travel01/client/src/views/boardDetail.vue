<template>
  <h1>나만의 여행</h1>
  <div class = "rollimg" v-for="(item, boardNo) in board" :key="boardNo">
    <h2 class = "BoardTitle">{{ item.title }}</h2>
    <img class = "BoardImg" :src="item.boardImg"/>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      board: [],
    }
  },
  methods: {
  getName() { // 해당경로의 내용을 axios로 연결하여 get하겠다. // 8080;
    axios.get('http://localhost:5005/boardDetail')
        .then((res) => {
          this.board = res.data;
          console.log(this.board); // board의 정보를 받겠다
        })
    }
  },
  mounted() {
    console.log("마운트자리")
    this.getName();
  },
};
</script>

<style scoped>
.board-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.board-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin-top: 20px;
}
/* 스타일링을 추가할 수 있습니다. */
</style>