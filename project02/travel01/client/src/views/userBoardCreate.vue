<template>
    <p>여행경로</p>            
        <div class="map-area">
            <div class="seachBox">
                <div>
                    <input type="text" v-model="search.keyword" @keyup.enter="searchPlaces" />
                </div>
            </div>
            <KaKaoMap class="kmap" :options="mapOption" />
        </div>
        <div class="place" v-for="result in search.results" :key="result.id" @click="showPlace(result)">
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
            mapOption:{
                center:{
                    lat:"",                    
                    lng:"",
                },
                level: 8,
            },
            search:{
                keyword: '',
                pgn: null,
                results: [],
            },
            selectedPlace: null,
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
        // showOnMap(harbor){
        //     this.mapOption.center = {
        //         lat: harbor.lat,
        //         lng: harbor.lng,
        //     };
        // },
        showPlace(place){
             console.log(place)
            
        if(place && place.y && place.x){
            this.mapOption.center = {
                lat: place.y,
                lng: place.x,
                }
            }
        },
    },
}
</script>

<style>
/* #map {
  width: 80%;
  height: 800px;
  float: right;
} */
.container{
    height: 100%;
}

.place {
float: left;
}
.place h4{
    float: left;

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
    width: 100%;
    height: 100%;
    float: right;
    margin-left: 4px;
    border: solid 1px black;
}

</style>