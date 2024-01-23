<template>
<<<<<<< HEAD

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
=======
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
>>>>>>> 58dbf9f2563bb611dd338a5c5780937310b93f1f
</style>