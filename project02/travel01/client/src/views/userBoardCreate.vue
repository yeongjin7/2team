<template>
    <p>여행경로</p>
    <div class="container">             
        <section class="travelList">
            <div>
                
                <ul class="placeSelect">
                    <h3>장소선택</h3>
                    <li class="showPlace"></li>
                    <div class="submenu">
                        <li><b-button variant="tap active" @click="selectPlace('Place_Seoul')">서울</b-button></li>
                        <li><b-button variant="tap" @click="selectPlace('Place_Busan')">부산</b-button></li>
                        <li><b-button variant="tap" @click="selectPlace('Place_Gangreng')">강릉</b-button></li>
                    </div>
                </ul>
            </div>

            <div class="showPlace" v-for="(item, index) in Place" :key="index">
                <BButtonGroup class="checkPlace"
                v-model="selected" 
                :options="options" 
                @click="addToSelected(item)"
                >
                <span class="imgbox"><img :src="item.imgurl" /></span>
                <strong v-html="item.name"></strong><br>
                <span class="textbox" v-html="item.subdec"></span>
                </BButtonGroup>             
            </div>

        </section>
               
        <section class="travelList-s">
            <div class="pathSelect">
                <h3>경로 담는곳</h3>
            </div>
            
            <div class="storePath" v-for="(item, index) in selectedPlaces" :key="index">
                <BButtonGroup>
                <span class="imgbox"><img :src="item.imgurl" /></span>
                <strong v-html="item.name"></strong><br>
                <span class="textbox" v-html="item.subdec"></span>  
                <button class="deleteBtn" @click="deletePlace(index)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
                </svg>
                </button>
                </BButtonGroup>
            </div>

        </section>

        <!-- <div class="map_wrap"> -->
            <div id="map"></div>
            <!-- style="width:50%;height:100%;position:relative;overflow:hidden;" -->
            <!-- <div id="menu_wrap" class="bg_white">
                <div class="option">
                    <div>
                        <form onsubmit="searchPlaces(); return false;">
                            키워드 : <input type="text" value="이태원 맛집" id="keyword" size="15">
                            <button type="submit">검색하기</button>
                        </form>
                    </div>
                </div>
                <hr>
                <ul id="placesList"></ul>
                <div id="pagination"></div> -->
        <!-- </div> -->
    </div>
</template>

<script>

export default{
    name: "KakaoMap", // 컴포넌트 이름 지정
    data(){
        
        return{      
            map: null,
            markers: [],      
            Place: [],
            Place_Seoul : [
                { imgurl: "/images/books_image/book08.jpg", name: "된다! 엑셀 수식 & 함수", subdec: "매일 쓰는 엑셀이 매번 어렵게 느껴지는 건 너무 많은 기능을...", },
                { imgurl:'/images/books_image/book09.jpg', name:'일 잘하는 디자이너' , subdec:'일 잘하는 디자이너가 되는 69가지 방법으로 자신을 지키면서 일...' },
                { imgurl:'/images/books_image/book10.jpg', name:'된다! 아이패드 하루 24시간' , subdec:'아이패드로 하루 24시간, 365일을 알차게 보내는 방법..' },
                { imgurl:'/images/books_image/book11.jpg', name:'된다! 포토샵 디자인 수업' , subdec:'온라인 강의 최고 매출 바로 그분! 아윤 쌤의 강의...' }
            ],

            Place_Busan : [
                { imgurl: "/images/books_image/book15.jpg", name: "포토샵 보정&합성 디자인 사전", subdec: "포토샵 사진 보정, 합성 때문에 고민인가요? 한 권으로 상위...", },
                { imgurl:'/images/books_image/book16.jpg', name:'된다! 깨비의 DSLR...' , subdec:'카메라 초보도 3일이면 인물, 풍경 출사 갈 수 있다!...' },
                { imgurl:'/images/books_image/book17.jpg', name:'프로 사진가들의 아름다운...' , subdec:'아름다운 사진을 촬영하기 위한 구도와 카메라 설정 그리고 색과 ...' },
                { imgurl:'/images/books_image/book18.jpg', name:'프로 사진가들이 알려주는...' , subdec:'일본 프로 사진가들의 노하우를 모은 DCM 시리즈에 연재된 ...' }
            ],

            Place_Gangreng : [
                { imgurl: "/images/books_image/book01.jpg", name: "Do it! 웹 사이트 따라 만들기", subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...", },
                { imgurl:'/images/books_image/book02.jpg', name:'Do it! 첫 알고리즘' , subdec:'160가지 그림과 스토리텔링으로 이해한다! 자료구조부터 보안...' },
                { imgurl:'/images/books_image/book03.jpg', name:'Do it! C# 프로그래밍 입문' , subdec:'이 책은 기본이 충실하면서도 프로젝트 실습까지 챙긴 C# 입문서...' },
                { imgurl:'/images/books_image/book04.jpg', name:'IT 5분 잡학사전' , subdec:'IT 분야 직장에서 일하는 나 요즘 주변에 이상한 사람이...' }
            ],
            selected: [],
            selectedPlaces: [], // Must be an array reference!
        }
    },
    created() {
        this.Place = this.Place_it;
    },
    setup() {},
    mounted() {
// api 스크립트 소스 불러오기 및 지도 출력
    if (window.kakao && window.kakao.maps) {
      this.loadMap();
    } else {
      this.loadScript();
    }
  },
  unmounted() {},

    methods: {
        //버튼을 누를 때마다 나오는 데이터 값을 변경
        selectPlace(contents) {
            this.Place = this[contents];
            document.querySelector(".active").classList.remove("active");
            event.target.classList.add("active");

            this.selectedPlaces = []; // 데이터 받을 공간 
        },
        //check된 데이터 값을 경로로 이동
        addToSelected(place){
            if(this.selected.includes(place)){
            this.selectedPlaces = this.selectedPlaces.filter(p => p !== place);
            }
            else{
            this.selectedPlaces.push(place)
            }
        },
        //경로에 있던 데이터 값을 삭제
        deletePlace(index){
            this.selectedPlaces.splice(index, 1);
        },
        // api 불러오기
        loadScript() {
            const script = document.createElement("script");
            script.src =
            "//dapi.kakao.com/v2/maps/sdk.js?appkey=bb76daf7eebda4a900a718e9508e8360&autoload=false&libraries=services"; 
            script.onload = () => window.kakao.maps.load(this.loadMap); 

            document.head.appendChild(script);
        },
        // 맵 출력하기
        loadMap() {
            const container = document.getElementById("map"); 
            const options = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), 
            level: 3
            };

            this.map = new window.kakao.maps.Map(container, options); 
            this.loadMaker();
        },
        // 지정한 위치에 마커 불러오기
        loadMaker() {
            const markerPosition = new window.kakao.maps.LatLng(
            33.450701,
            126.570667
            );

            const marker = new window.kakao.maps.Marker({
            position: markerPosition,
            });

            marker.setMap(this.map);
        },
        // markerMap(){
        //     const mapContainer = document.getElementById('map');
        //     const mapOption = {
        //         center: window.kakao.maps.LatLng(37.566826, 126.9786567),
        //         level: 3
        //     }
        // }
    },
}
</script>

<style>
#map {
  width: 45%;
  height: 800px;
}

.travelList, .travelList-s{
    width: 20%;
    height: 100%;
    float: left;
    margin-left: 4px;
    border: solid 1px black;
}


.placeSelect {
    border-bottom: solid 1px black;
    text-align: center;
}

.pathSelect{
    border-bottom: solid 1px black;
    text-align: center;
}

.showPlace{
    border-bottom: solid 1px black;
}

.storePath{
    border-bottom: solid 1px black; 
}

.showPlace img {
    width: 100px;
}

.storePath img{
    width: 100px;
}

.deleteBtn{
    float: right;
}

.map_wrap{
    width: 50%;
    height: 100%;
    float: right;
    margin-left: 4px;
    border: solid 1px black;
}

</style>