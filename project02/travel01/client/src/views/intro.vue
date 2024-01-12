<template>
    <section>
        
        <section class = "introMain">
            <h1>Travel01은</h1><br>
            <strong class = "introDt1">여행 계획을 짜는 것이 두려운 사람들을 위한,<br>
            본인의 여행을 많은 사람들과 공유하고 싶은 사람들에 의한</strong>
            <h4 class = "introDt2">"여행 일정을 공유하고 소통하는 페이지" 입니다.</h4>
        </section>

        <section>
            <div class = "introImg">
                <div class = "overlay">
                    <div class = "overlaytxt">여행 계획을 짜는 게 어렵고 막막하다고요?</div>
                </div>
            </div>
        </section>

        <section class = "introMain">
            <h2>이제는 걱정하지 마세요.<br><br>이곳은 여행을 사랑하는 사람들이 모여있는 곳이니까요.</h2>
        </section>

        <section class = "introPic">
            <div>
                <img class="room-img" :src="imgSrc[0]" alt="image" />
            </div>
                <h2 class = "introMain">다른 사람들이 올린 여행 일정을 보며<br>
                나에게 맞는 일정을 즐겨찾기 해보세요!</h2>
        </section>

        <section class = "introMain">
            <h2>즐겨찾기한 일정을 수정하여<br>
            나만의 일정으로 만들 수 있습니다.</h2>
        </section>


        <section class = "introPic">
            <div>
                <!--일정 수정하는 사진이 들어갈 자리 입니다.-->
                <!--원하는 사진을 client/public/images/travels_image에 넣어주세요-->
                <img class="room-img" :src="imgSrc[0]" alt="image" />
            </div>
        </section>

        <section>
            <h2 class = "introMain">이제 당신이 여행을 떠나실 차례입니다.</h2>
            <router-link :to="{ path: 'myTravel' }" class="custom-link" data-text="나만의 일정 만들기"></router-link>
        </section>
    
    </section>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: ["/images/travels_image/slide_img.JPG", ""],
      isHovered: false,
    };
  },
  methods: {
    MakeSchedule(){
        console.log('hello')
    }
  }
}

</script>


<style scoped>
.introMain {    
    text-align: center; 
    color: #272727;
    margin-top: 110px;
    margin-bottom: 110px;
    margin-left: 45px;
}
.introDt1 {
    font-size: 28px;
    color:black;
    background-color: rgb(231, 231, 231);
}
.introDt2 {
    margin: 20px;
    color: #272727;

}

.introImg {
    background-image: url(C:\git-work\2team\project02\travel01\client\public\images\travels_image\intro_img.jpg);
    background-size: cover;
    width: 1224px;
    height: 647px;
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 0 auto;
}

/* 사진위에 어두운 화면을 살짝 띄워 글씨 잘 보이게 하기 */
.overlay {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.35);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}
.overlaytxt {
    z-index: 1;
    text-align: center;   
    font-size: 40px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

.introPic {
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 0 auto;
}

/* 버튼 */
.custom-link {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  text-align: center;
  font-family: sans-serif;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: #ccc;
  display: inline-block;
  position: relative;   
  margin-top: 40px;
  margin-bottom: 70px;
}

.custom-link:before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background: #ff005e;
  color: #fff;
  transition: 0.5s;
  transform-origin: bottom;
  transform: translateY(-100%) rotateX(90deg);
}

.custom-link:hover:before {
  transform: translateY(0) rotateX(0deg);
}

.custom-link:after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background: #ea004f;
  color: #fff;
  transition: 0.5s;
  transform-origin: top;
  transform: translateY(0) rotateX(0deg);
}

.custom-link:hover:after {
  transform: translateY(100%) rotateX(90deg);
}


</style>