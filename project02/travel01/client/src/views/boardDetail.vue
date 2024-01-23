<template>

  <section class = "boardDtContent">
    <div>
      <h1 class = "BoardDtPage">게시물 상세 페이지</h1>
    </div>

    <div class = "DetailBox">
      <div v-for = "게시판 in board" :key = "게시판.boardNo">
        <img class = "BoardImg" :src="게시판.boardImg" />

      </div>
    </div>

  </section>

</template>

<script >
  import axios from 'axios';

  export default {
    data(){ return {
      board: null,
    };
  },
  async created() {
    try {
      const boardNo = this.$route.params.boardNo; // URL에서 boardNo 추출
      const response = await axios.get(`//${boardNo}`); // 백엔드 URL 수정 필요 라는데 뭔지 모르겠어요
      this.board = response.data;

    } catch (error) {
      console.error(error);
    }
  },
};

</script>

<style >
.boardDtContent{
  margin: 0 auto;
  text-align: center;
}
.BoardDtPage{
  margin-top: 30px;
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
}
</style>