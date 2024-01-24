<template>
  <footer>
    <section class = "footerSUM">
      <div class="botinfo">
        <div v-for="bottomCate in bottomInfo" :key="bottomCate">
          <router-link :to="{ path: '/' }" class="custom-link"> {{ bottomCate }} </router-link>
          <!-- 해당 부분에 모달로 넘어가게끔 만들어야 함-->
        </div>
      </div>
      <div class="footerinfo">
        <div class="footer-logo"><img src="/images/airplane.png" /></div>
        <!--여기 버튼 부분 margin으로 간격 줘야하는데 css가 안 먹음-->
        <div class="footer-sub">
          <address>
            서울시 관악구 남부순환로 1820,에그엘로우14층 <span>Tel 02-6020-0055</span>
          </address>
          <p>Email : githrd@email.com</p>
          <p>Copyright 2017 (주)글로벌아이티정보기술. ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>

export default {
  data() {
    return{
      bottomInfo: [' 개인정보취급방침 ', ' 이용약관 ', ' 저자신청 ', ' 역자신청 '],
    }
  },
}
</script>

<style>
#wrap {
  position: relative;
  flex: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 200px;
}
footer{
  text-align: center;
  width: 100%;
  bottom: 0;
  position: absolute;
  height: 160px;
  line-height: 5px;
}
.botinfo {
  position: relative;
  display: flex;
  justify-content: center;
  line-height : normal;

}
</style>