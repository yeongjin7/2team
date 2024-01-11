<template>
    <section class = "introPage">
        <section class = "intromain">
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

        <section>
            <section class = "intromain">
            <h2>이제는 걱정하지 마세요.<br><br>이곳은 여행을 사랑하는 사람들이 모여있는 곳이니까요.</h2>
            </section>
        </section>

        
        <section>
            <section class = "intromain">
                <!-- <div>
                    <img :src="img" alt="">
                </div> -->
            <h2>다른 사람들이 올린 여행 일정을 보며<br>나에게 맞는 일정을 즐겨찾기 해보세요!</h2>
            </section>
        </section>

        <section>
            <section class = "intromain">
            <!--일정 수정하는 사진이 들어갈 자리 입니다.-->
            <h2>즐겨찾기한 일정을 나만의 일정으로 재탄생 시킬 수 있습니다.</h2>
            </section>
        </section>
        
    </section>
</template>

<script>

// export default {
//         data : () => ({
//         img : require('C:/git-work/miniproject2/2team/project02/travel01/client/public/images/airplane.png')
//    })
// }
</script>


<style scoped>
.intromain {    
    text-align: center; 
    color: #272727;
    margin: 110px;
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
    background-image: url(C:\Users\JMH\Desktop\img\introIMG.jpg);
    background-size: cover;
    width: 1224px;
    height: 647px;
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 0 auto;
}
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

</style>