<template>
  <div>
    <div id="map"></div> 
    <div id="place">
    <button class="placeBtn"  @click="displayMarker(markerPositions1, map_board, 'list1')">강릉 여행 1번</button>    
      <ul class="placeSub" v-show="showList1">
        <li class="placeList">
          <div class="placeSubList" v-for="item in map_board"  :key="item.id">
          <img class="gangrengImg" :src="item.mapImg" style="width: 100px; height: 50px;">
          <h4>{{ item.mapName }}</h4>
          <p>{{ item.mapCont }}</p>
          </div>
          <button @click="storagePlace(item, map_board)">저장하기</button>
          <button @click="closeList('list1')">목록닫기</button>
        </li>
      </ul>
 
      <button class="placeBtn" @click="displayMarker(markerPositions2, map_board2, 'list2')">강릉 여행 2번</button>
      <ul class="placeSub" v-show="showList2">
        <li class="placeList">
          <div class="placeSubList" v-for="item in map_board2"  :key="item.id">
          <img class="gangrengImg" :src="item.mapImg" style="width: 100px; height: 50px;">
          <h4>{{ item.mapName }}</h4>
          <p>{{ item.mapCont }}</p>
          </div>
          <button @click="storagePlace(item, map_board2)">저장하기</button>
          <button @click="closeList('list2')">목록닫기</button>
        </li>
      </ul>

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
      showList1:false,
      showList2:false,
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
        [37.7775486544885, 128.87721641370342], //오죽헌시립박물관
        [37.77808079274927, 128.88022618371667], // 강릉자수박물관
        [37.79773702104215, 128.897308410019], //강릉에디슨박물관 
        [37.7742622239505, 128.94322088751557], //환희컵박물관
        [37.70582245194149, 129.0094853242763],  //하슬라아트박물관
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
         
        })
        .catch((err) => {
          console.log('Error fetching data :' , err)
        })
    },

    storagePlace(item, mapData) {
      this.selectedMarkerData = item;
      this.$store.dispatch('storeData', mapData);
      console.log('Stored Data:', this.$store.getters.getStoredData);
    },
    closeList(listName){  
      if (listName === 'list1') {
        this.showList1 = false;
      } else if (listName === 'list2') {
        this.showList2 = false;
      }
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
    displayMarker(markerPositions, mapData, listName) {
      if (listName === 'list1') {
        this.showList1 = true;
        this.showList2 = false;
      } else if (listName === 'list2') {
        this.showList1 = false;
        this.showList2 = true;
      }
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

          const mapBoardData = mapData[index]; // Assuming map_board has corresponding data

            const infowindowContent = `
              <div style="padding: 10px;">
                <p>${mapBoardData.mapName}</p>
              </div>
            `;          
          // const infowindowContent = `<div style="padding:5px;">Marker ${index + 1}</div>`;

          const infowindow = new window.kakao.maps.InfoWindow({
            map: toRaw(this.map),
            position,
            content: infowindowContent,
            removable: true,
          });
          infowindow.open(toRaw(this.map), marker);

          kakao.maps.event.addListener(marker, "click", () => {

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
    },    

  },
};
</script>

<style scoped>
#map {
  /* display: none; */
  position: relative;
  width: 100%;
  height: 70vh;
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

#place {  
  /* position: absolute; */
  top: 10px; 
  right: 10px; 
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

}
.placeSub {
  position: absolute;
  top: 0;
  /* left: -200px; */
  background-color: white;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  z-index: 1000; 
}

.placeBtn {
  position: relative;
  float: right;
  margin-top: 10px;
}


.button-group {
  margin-top: 10px;
  position: relative;
}


</style>
