<template>
    <p>여행경로</p>            
        <div class="map-area">
            <div class="seachBox">
                <div>
                    <input type="text" v-model="search.keyword" @keyup.enter="searchPlaces" />
                </div>
            </div>
            <KaKaoMap ref="kakaoMap" class="kmap" 
            :latitude="37.39843974939604" :longitude="127.10972941510465"
            :options="mapOption" />
        </div>
        <div class="place" 
        v-for="result in search.results" 
        :key="result.id" 
        @click="showPlace(result)"
        >
        <span>{{ result.place_name }}</span>
        <div class="addr">{{ result.address_name }}</div>
    </div>
    
</template>

<script>
import KaKaoMap from "./KaKaoMap.vue"

export default{
    components : {
        KaKaoMap,
    },
    
    // name: "KakaoMap", // 컴포넌트 이름 지정
    data(){
        return{
            map: [],
            marker:[],
            mapOption:{
                center:{
                    latitude:'',                    
                    longitude:'',
                },
                level: 8,
            },
            // harbors: [],
            // markers: null,
            search:{
                keyword: '',
                pgn: null,
                results: [],
            },
            markers: [],
        };
    },

 mounted(){},

    methods: {
        searchPlaces($event){
            // console.log($event.target.value);
            const keyword = $event.target.value.trim();
            if (keyword.length === 0){
                return;
            }
            const ps = new window.kakao.maps.services.Places();
            ps.keywordSearch(keyword, (data, status, pgn) => {
                // console.log(data);
                // console.log(status);
                // console.log(pgn);
                this.search.keyword = keyword;
                this.search.pgn = pgn;
                this.search.results = data;
            });
        },
        showOnMap(harbor){
            this.mapOption.center = {
                lat: harbor.lat,
                lng: harbor.lng,
            };
        },
        showPlace(place){
             console.log(place)
             this.mapOption.center = {
                lat: place.y,
                lng: place.x,
             }
             this.createMarker(place.y, place.x, place.place_name);
        },
       
        createMarker(lat, lng, title) {
            console.log("Marker data:", this.markerData);
            const marker = new window.kakao.maps.Marker({
                position: new window.kakao.maps.LatLng(lat, lng),
                title: title,
            });
            this.$nextTick(() => {
            marker.setMap(this.$refs.kakaoMap.map);
            });
            this.markers.push(marker);
        },
    },
}
</script>

<style>
.map-area{
    display: flex;
    
}
.seachBox{
    border-bottom: solid 1px black;
    position: relative;
    top: 0;
    left: 0%;
    height:600px;
    z-index: 10000;
    background-color: #ffffffaa;
    width:300px;
    display: flex;
    flex-direction: column;
}
.seachBox span{
    font-size: 10px;
}
</style>