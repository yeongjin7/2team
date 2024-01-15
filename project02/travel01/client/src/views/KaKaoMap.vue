<template>
    <div>
      <h4>카카오 맵 보기</h4>
      <div id="map"></div>
    </div>
  </template>
  <style scoped>
  #map {
    width: 80%;
    height: 400px;
    position: relative;
    float: right;
  }
  </style>
  <script>
  export default {
    name: "KaKaoMap", // 컴포넌트 이름 지정
  
    data() {
      return {
        // map 객체 설정
        map: null,
      };
    },
    setup() {},
    created() {},
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
          this.$options
        );
  
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
  
        marker.setMap(this.map);
      },
    },
  };
  </script>