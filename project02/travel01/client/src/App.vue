<template>
  <div id="appPage">
  <router-view/>
  <kakaoMap />
  </div>
</template>

<script>
import userBoardCreate from "./views/userBoardCreate.vue"

export default{
  name: "App",
  components: {
    userBoardCreate,
  },
};
</script>