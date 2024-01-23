<template>
  <div>
    <h2>게시판 만들기</h2>

    <!-- Button to toggle visibility -->
    <div>
      <div class="loadingBtn">
        <button @click="loadData">불러오기</button>
      </div>
    <div v-if="showStoredData && storedData && storedData.length > 0">
      <div class="loadPlace" 
      v-for="item in storedData" :key="item.id">
        <div>
          <img class="loadPlaceImg" :src="item.mapImg">
          <p>{{ item.mapName }}</p>
          <p>{{ item.mapCont }}</p>
        </div>
      </div>
    </div>
  
  </div>
  </div>
</template>

<script>
export default {
  computed: {
    storedData() {
      return this.$store.getters.getStoredData;
    },
  },
  data() {
    return {
      showStoredData: false, // Flag to control visibility
    };
  },
  methods: {
    loadData() {
      this.showStoredData = !this.showStoredData;
    },
  },
};
</script>

<style>

  .loadPlaceImg{
    width:300px;
    height: 300px;
    /* display: none; */
  }
</style>