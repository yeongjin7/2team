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
                    <b-button variant="tap active" @click="mounted">인기순</b-button>
                    <b-button variant="tap" @click="AddContents('Newbooks_work')">신규순</b-button>
<!--                <b-button variant="tap" @click="AddContents('Newbooks_photo')"></b-button>-->
                    <b-button variant="tap" @click="AddContents('Newbooks_science')">공지사항</b-button>
                </div>
<!--                <div class="rollimg" v-for="(item, index) in main" :key="index">-->
<!--                  <span class="imgbox"><img :src="item.img" /></span>-->
<!--                  <strong v-html="main.name"></strong>-->
<!--                  &lt;!&ndash;<span class="textbox" v-html="item.subdec"></span>&ndash;&gt;-->
<!--                </div>-->
                  <h4>{{main.name}}{{main.img}}</h4>
            </div>
        </section>
        <!-- 도서 검색 -->
        
        <!-- 배너 메뉴 -->
        <section class="bannermenu">
            <div class="itembox" v-for="(item, index) in mainbanner" :key="index" @click="gotoPage(item.url)">
                <span v-html="item.stitle"></span>
                <strong v-html="item.maintit"></strong>
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
          main: {
            img : "",
            name: "",
          },
            // Newbooks: [],
            // Newbooks_it: [
            //     { imgurl:"/images/books_image/book01.jpg", name:"가자 유니버셜로!", },
            //     { imgurl:'/images/books_image/book02.jpg', name:'Do it! 첫 알고리즘' , subdec:'160가지 그림과 스토리텔링으로 이해한다! 자료구조부터 보안...' },
            //     { imgurl:'/images/books_image/book03.jpg', name:'Do it! C# 프로그래밍 입문' , subdec:'이 책은 기본이 충실하면서도 프로젝트 실습까지 챙긴 C# 입문서...' },
            //     { imgurl:'/images/books_image/book04.jpg', name:'IT 5분 잡학사전' , subdec:'IT 분야 직장에서 일하는 나 요즘 주변에 이상한 사람이...' },
            //     { imgurl:'/images/books_image/book05.jpg', name:'Do it! SQL 입문' , subdec:'20년간 글로벌 기업에서 데이터베이스 전문가로 근무한 저자의...' },
            //     { imgurl:'/images/books_image/book06.jpg', name:'Do it! 클론 코딩 줌' , subdec:'클론 코딩 시리즈 3탄, 노마드 코더의 동영상 무료 공개! ...' },
            //     { imgurl:'/images/books_image/book07.jpg', name:'Do it! 오토캐드 2023' , subdec:'5년 연속 베스트셀러! 평면도 그리기부터 치수 문제 해결까지!...' }
            // ],
            // Newbooks_work: [
            //     { imgurl: "/images/books_image/book08.jpg", name: "된다! 엑셀 수식 & 함수", subdec: "매일 쓰는 엑셀이 매번 어렵게 느껴지는 건 너무 많은 기능을...", },
            //     { imgurl:'/images/books_image/book09.jpg', name:'일 잘하는 디자이너' , subdec:'일 잘하는 디자이너가 되는 69가지 방법으로 자신을 지키면서 일...' },
            //     { imgurl:'/images/books_image/book10.jpg', name:'된다! 아이패드 하루 24시간' , subdec:'아이패드로 하루 24시간, 365일을 알차게 보내는 방법..' },
            //     { imgurl:'/images/books_image/book11.jpg', name:'된다! 포토샵 디자인 수업' , subdec:'온라인 강의 최고 매출 바로 그분! 아윤 쌤의 강의...' },
            //     { imgurl:'/images/books_image/book12.jpg', name:'된다! 하루 5분 노션 활용법' , subdec:'2015년 첫 출간 이후 매년 개정되며 ‘맥북 분야 1위’를...' },
            //     { imgurl:'/images/books_image/book13.jpg', name:'된다! 저작권 문제 해결 ' , subdec:'25년간 저작권을 다뤄온 판사 출신 변호사의 구체적인...' },
            //     { imgurl:'/images/books_image/book14.jpg', name:'된다! 7일 실무 엑셀 ' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' }
            // ],
            // Newbooks_photo: [
            //     { imgurl: "/images/books_image/book15.jpg", name: "포토샵 보정&합성 디자인 사전", subdec: "포토샵 사진 보정, 합성 때문에 고민인가요? 한 권으로 상위...", },
            //     { imgurl:'/images/books_image/book16.jpg', name:'된다! 깨비의 DSLR...' , subdec:'카메라 초보도 3일이면 인물, 풍경 출사 갈 수 있다!...' },
            //     { imgurl:'/images/books_image/book17.jpg', name:'프로 사진가들의 아름다운...' , subdec:'아름다운 사진을 촬영하기 위한 구도와 카메라 설정 그리고 색과 ...' },
            //     { imgurl:'/images/books_image/book18.jpg', name:'프로 사진가들이 알려주는...' , subdec:'일본 프로 사진가들의 노하우를 모은 DCM 시리즈에 연재된 ...' },
            //     { imgurl:'/images/books_image/book19.jpg', name:'프로 사진가들의 사진 보정...' , subdec:'일본 최고 사진가의 노하우가 담긴 잡지, DCM 시리즈의...' },
            //     { imgurl:'/images/books_image/book20.jpg', name:'프로 사진가들이 사용하는...' , subdec:'이 책은 일본의 프로 사진가들이 사진을 촬영할 때 노출을...' }
            // ],
            // Newbooks_science: [
            //     { imgurl: "/images/books_image/book21.jpg", name: "블록체인 무엇인가?", subdec: "이 책은 과장된 소문에 휘둘리지도, 비트코인에 집중하지도 않는...", },
            //     { imgurl:'/images/books_image/book22.jpg', name:'빅데이터, 승리의 과학' , subdec:'2012년, 혼전을 거듭한 미국 대통령 선거에서 민주당...' },
            //     { imgurl:'/images/books_image/book23.jpg', name:'데이터는 어떻게 자산이...' , subdec:'데이터는 4차 산업혁명의 원동력으로서...' },
            //     { imgurl:'/images/books_image/book24.jpg', name:'기계는 어떻게 생각하는가?' , subdec:'구글 엔지니어링 팀 수석 리더인 숀 게리시는 컴퓨터...' },
            //     { imgurl:'/images/books_image/book25.jpg', name:'데이터 과학, 무엇을 하는가?' , subdec:'미국 제너럴 모터스부터 한국의 대기업 통신회사 및...' },
            //     { imgurl:'/images/books_image/book26.jpg', name:'빅데이터의 다음 단계는...' , subdec:'이 책, <예측 분석이다>에서는 도대체 어떻게 이러한...' }
            //
            // ],
            settings: {
                // slidesToShow: 5, // 화면에 나타날 슬라이드 개수
                // arrows: true, // 버튼 사용 여부
                // dots: false, // 하단 버튼 사용 여부
                // infinite: true, // 슬라이드 반복 여부
                // responsive: [
                //     // 반응형 옵션
                //     {
                //         breakpoint: 767, // 브라우저 크기가 767 이하일 때
                //         settings: {
                //             slidesToShow: 4,
                //         },
                //     },
                //     {
                //         breakpoint: 414, // 브라우저 크기가 464 이하일 때
                //         settings: {
                //             slidesToShow: 2,
                //         },
                //     },
                // ],
            },
            hashdata: [
                { text: "서울", value: "서울" },
                { text: "부산", value: "부산" },
                { text: "강릉", value: "강릉" },
                { text: "맛집", value: "맛집" },
                { text: "관광지", value: "관광지" },
                { text: "축제", value: "축제" },
            ],
            booksname: [
                {
                    cata: "html",
                    books: [
                        { booktit: "Do it! 웹 사이트 따라 만들기", author: "김윤미" },
                        { booktit: "Do it! HTML+CSS+자바스크립트 웹 표준의 정석", author: "고경희" },
                        { booktit: "Do it! 반응형 웹 만들기", author: "김운아" },
                        { booktit: "Do it! 인터랙티브 웹 페이지 만들기", author: "최성일" },
                    ],
                },
                {
                    cata: "vue",
                    books: [
                        { booktit: "Do it! vue.js 입문", author: "장기효" },
                    ],
                },
                {
                    cata: "javascript",
                    books: [
                        { booktit: "Do it! 프로그래시브 웹앱 만들기", author: "김응석" },
                        { booktit: "Do it! 모던 자바스크립트 프로그래밍의 정석", author: "고경희" },
                    ],
                },
            ],
            keyword: "",
            mainbanner: [
                { stitle: "작성하기", maintit: "나만의 여행만들기", iconname: "bi-stickies", url: "/userBoardCreate.vue", },
                { stitle: "유저게시판", maintit: "게시판목록가기", iconname: "bi-book-half", url: "/userBoard.vue", },
                { stitle: "공지사항", maintit: "공지사항목록가기", iconname: "bi-facebook", url: "/notice.vue", },
            ],
        };
    },
    created() {
        this.Newbooks = this.Newbooks_it;
    },
    
    methods: {
        getName() { // 해당경로의 내용을 axios로 연결하여 get하겠다. // 8080;
          axios.get('http://localhost:5005/main_db')
              .then(res => {
                console.log("여기란다!");
                if (res.data && res.data.img && res.data.name) {
                  // 응답 데이터가 존재하고 img와 name이 존재할 때에만 할당
                  this.main.img = res.data.img;
                  this.main.name = res.data.name;
                  console.log(this.main.name);
                } else {
                  console.error('Invalid response format:', res.data);
                  console.log(res)
                }
              })
        },
        mounted() {
          this.getName();
        },
        // AddContents(contents) {
        //     this.Newbooks = this[contents];
        //     document.querySelector(".active").classList.remove("active");
        //     event.target.classList.add("active");
        // },
        // gotoPage(url) {
        //     if (url == "/notice") {
        //         this.$router.push(url);
        //     } else {
        //         window.open(url, "_blank");
        //     }
        // },
        // viewmore(event) {
        //     if (event.target.parentElement.classList.value.indexOf("full") > -1) {
        //         event.target.parentElement.classList.remove("full");
        //     } else {
        //         event.target.parentElement.classList.add("full");
        //     }
        // },
    },
    computed: {
        autocomplate() {
            const resultlists = this.booksname.filter((item) => {
                if (item.cata.match(this.keyword))
                return item; // item 반환
            });
            return resultlists;
        },
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