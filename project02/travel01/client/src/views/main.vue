<template>
  <section class="maincontents">
    <div class = "searchbookImg">
      <section class="searchbook">
        <h1 class="maintit">
          여행지 검색<span>찾고자 하는 여행지를 검색해 주세요.</span>
        </h1>
        <div class="inputarea">
          <b-button variant="search" class = "searchbtn"><i class="bi bi-search"></i></b-button>
          <input class = "searchinput" value="가고싶은 여행지를 입력하세요!" >
          <div class="autolayer" v-if="keyword.length > 0" :class="{ none: autocomplate.length === 0 }">
            <ul v-if="autocomplate.length > 0">
              <li
                  v-for="(item, index) in autocomplate[0].books"
                  :key="index"
                  v-html="item.booktit"
              ></li>
            </ul>
            <div class="nonemessage" v-else>
              <i class="bi bi-x-circle-fill"></i> 검색 결과가 없습니다.
            </div>
          </div>
        </div>
        <div class="guidehash">
                <span
                    v-for="(item, index) in hashdata"
                    :key="index"
                    v-html="item.text"
                ></span>
        </div>

      </section>
    </div>
    <!-- newbook -->
    <section class="newbook">
      <h1 class="maintit bset">
        인기 여행지
      </h1>
      <div class="tapcontent">
        <div class="tap">
          <b-button variant="tap active">인기순</b-button>
          <!--                <b-button variant="tap" @click="AddContents('Newbooks_work')">신규순</b-button>-->
          <!--                <b-button variant="tap" @click="AddContents('Newbooks_photo')"></b-button>-->
          <!--                <b-button variant="tap" @click="AddContents('Newbooks_science')">공지사항</b-button>-->
        </div>
        <div>
            <div class = "rollimg" v-for="(item, boardNo) in board" :key="boardNo">
              <img class = "BoardImg" :src="item.boardImg" />
              <h4 class = "BoardTitle">{{ item.title }}</h4>
            </div>
          </div>
        </div>
    </section>
    <!-- 도서 검색 -->

    <!-- 배너 메뉴 -->
    <section class="bannermenu">
      <div class="itembox" v-for="(item, index) in mainbanner" :key="index" @click="gotoPage(item.url)">
        <span v-html="item.stitle"></span>
        <strong v-html="item.boardtit"></strong>
        <i class="bi" :class="item.iconname"></i>
      </div>
    </section>
  </section>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      board: [],
      hashdata: [
        { text: "서울", value: "서울" },
        { text: "부산", value: "부산" },
        { text: "강릉", value: "강릉" },
        { text: "맛집", value: "맛집" },
        { text: "관광지", value: "관광지" },
        { text: "축제", value: "축제" },
      ],
      keyword: "",
      mainbanner: [
        { stitle: "작성하기", maintit: "나만의 여행만들기", iconname: "bi-stickies", url: "/userBoardCreate.vue", },
        { stitle: "유저게시판", maintit: "게시판목록가기", iconname: "bi-book-half", url: "/userBoard.vue", },
        { stitle: "공지사항", maintit: "공지사항목록가기", iconname: "bi-facebook", url: "/notice.vue", },
      ],
    };
  },
  methods: {
    getName() { // 해당경로의 내용을 axios로 연결하여 get하겠다. // 8080;
      axios.get('http://localhost:5005/main')
          .then((res) => {
              this.board = res.data;
              console.log(this.board); // board의 정보를 받겠다
          })
    },
  },
  mounted() {
    console.log("마운트자리")
    this.getName();
  },
};
</script>
<style scoped>
.maintit span{
  color : black;
}
.maintit best{
  margin-bottom: 70px;
}

img {
  width: 250px;
  height: 200px;
  margin-left: 10px; /* 이미지 사이의 간격 조정 */
  margin-bottom: 10px;
  border: 2px solid rgba(89, 145, 255, 0);
  border-radius: 5px;
}
.rollimg{
  width: 300px;
  margin-bottom: 30px;
  float: left;
  text-align: center;
  margin-bottom: 5%;
}
.searchinput{
  width: 70%;
  background-color: white;
}
.inputarea{
  background-color: white;
}
.searchbtn{
  margin-left: 10px;
}
.bannermenu{
  margin-top: 10%;
  margin-bottom: 5%;
}
.tapcontent{
  margin-bottom: 200px;
}
</style>