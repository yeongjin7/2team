<template>
  <div>
    <div id="map"></div> 
  
  
  <div id="place">
    <button class="placeBtn"  @click="displayMarker(markerPositions1)">강릉 여행 1번</button>    
      <ul class="placeSub" v-show="showList">
        <li class="placeList">
          <div class="placeSubList" v-for="item in map_board"  :key="item.id">
          <img class="gangrengImg" :src="item.mapImg" style="width: 100px; height: 50px;">
          <h4>{{ item.mapName }}</h4>
          <p>{{ item.mapCont }}</p>
          </div>
          <button @click="storagePlace">저장하기</button>
        </li>
      </ul>
      <button class="placeBtn" @click="displayMarker(markerPositions2)">강릉 여행 2번</button>
      <div>
        <div v-for="item in map_board2" :key="item.id">
        <h4>{{ item.mapName }}</h4>
        <p>{{ item.mapCont }}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";
import { toRaw } from "vue";
export default {
  name: "KakaoMap",
  data() {
    return {
      map_board:[],
      map_board2:[],
      showList:false,
      // test_board:{        
      //   test_name:"", 
      //   test_cont:"",
      //   test_lat:"",
      //   test_lng:"",
      // },
      // test_board2:{        
      //   test_name:"", 
      //   test_cont:"",
      //   test_lat:"",
      //   test_lng:"",
      // },
      // storagePlace:[],

      infowindows: [],
      markers: [],
      markerPositions1: [
        [37.77376110521633, 128.89255522941988], //강릉컬링센터
        [37.79008285768792, 128.9078329222055], //강릉녹색도시체험센터
        [37.77932076711184, 128.89705534769914], //강릉올림픽뮤지엄
        [37.79142529933595, 128.9094884673363], //허균허난설원기념공원
        [37.75590269299039, 128.89749178104333], //강릉월화거리
      ],
      markerPositions2: [
        [37.499590490909185, 127.0263723554437],
        [37.499427948430814, 127.02794423197847],
        [37.498553760499505, 127.02882598822454],
        [37.497625593121384, 127.02935713582038],
        [37.49629291770947, 127.02587362608637],
        [37.49754540521486, 127.02546694890695],
        [37.49646391248451, 127.02675574250912],
      ],
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=bb76daf7eebda4a900a718e9508e8360&autoload=false&libraries=services";
      document.head.appendChild(script);
    }
    this.getPlace(),
    this.getPlace2() 
  },
  methods: {
    getPlace(){
      axios.get('http://localhost:5005/KaKaoMap')
        .then((res) => {
          console.log("test");
          this.map_board = res.data
          // this.test_board.test_name = res.data.name;
          // this.test_board.test_cont = res.data.cont;
          console.log(this.test_board)
        })
        .catch((err) => {
          console.log('Error fetching data :' , err)
        })
    },
    getPlace2(){
      axios.get('http://localhost:5005/KaKaoMap/other')
        .then((res) => {
          console.log("test2");
          this.map_board2 = res.data
          console.log(this.test_board2)
        })
        .catch((err) => {
          console.log('Error fetching data :' , err)
        })
    },
    storagePlace(){
      axios.post('http://localhost:5005/storagePlace', {})
       .then((res)=> {
        if(res.data.success){
          alert("성공적으로 저장되었습니다.")
          this.storagePlaceData.stName = '';
          this.storagePlaceData.stCont = '';
          this.qnaEditBtn = false;
        }
    })
    },
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 5,
      };

      // 지도 객체를 등록합니다.
      // 지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new kakao.maps.Map(container, options);
    },
    changeSize(size) {
      const container = document.getElementById("map");
      container.style.width = `${size}px`;
      container.style.height = `${size}px`;
      toRaw(this.map).relayout();
    },
    displayMarker(markerPositions) {
      // Clear existing markers and infowindows
      this.markers.forEach((marker) => marker.setMap(null));
      this.markers = [];
      this.infowindows.forEach((infowindow) => infowindow.close());
      this.infowindows = [];

      const positions = markerPositions.map(
        (position) => new window.kakao.maps.LatLng(...position)
      );

      if (positions.length > 0) {
        this.markers = positions.map((position, index) => {
          const marker = new window.kakao.maps.Marker({
            map: toRaw(this.map),
            position,
          });

          const infowindowContent = `<div style="padding:5px;">Marker ${index + 1}</div>`;

          const infowindow = new window.kakao.maps.InfoWindow({
            map: null,
            position,
            content: infowindowContent,
            removable: true,
          });

          kakao.maps.event.addListener(marker, "click", () => {
            // Close all other infowindows before opening the current one
            this.infowindows.forEach((iw) => iw.close());
            infowindow.open(toRaw(this.map), marker);
          });

          this.infowindows.push(infowindow);

          return marker;
        });

        const bounds = positions.reduce(
          (bounds, latlng) => bounds.extend(latlng),
          new window.kakao.maps.LatLngBounds()
        );

        toRaw(this.map).setBounds(bounds);
      }
      this.showList = true;
    },    
    toggleShow(){
        this.show = !this.show;
    },
 
  },
};
</script>

<style scoped>
#map {
  /* display: none; */
  position: absolute;
  width: 400px;
  height: 400px;
}

.placeList{
  position: relative;
  float: right;
  display: flex;
  flex-direction: column;
}

.placeSubList {
  position: relative;
  float: right;
  display: flex;
  flex-direction: column;
}

.place {
  display: none;
}

.placeBtn {
  position: relative;
  float: right;
  margin-top: 10px;
  /* Remove the following line */
  /* display: block; */
}

.placeBtn .place {
  position: relative;
  float: right;
  margin-top: 10px;
}

.button-group {
  margin: 10px 0px;
}

button {
  margin: 0 3px;
}

</style>
