<template>
    <header>
        <div class="topmenu">
            <div class="contentbox">
                <div class="logo">
                    <button v-on:click="goToPage('/main')">
                        <img src="/images/airplane.png" alt="logo" />
                    </button>
                </div>
                <div class="system">
                    <input type="text" class="searchBar" placeholder="검색어를 입력하세요."><i class="bi bi-search" id="searchBar_btn"></i>
                    <router-link to="/login" v-show="logout">로그인 / </router-link> 
                    <router-link to="/member" v-show="logout">회원가입</router-link>
                    <router-link to="/main" v-show="loginTrue" @click="cookieFin">로그아웃 / </router-link>  
                    <router-link to="/mypage" v-show="loginTrue">마이페이지</router-link>
                </div>
            </div>
        </div>
        
        <nav>
            <div class="contentbox">
                <ul>
                    <li
                        v-for="(item, index) in menulists"
                        :key="index"
                        v-on:click="goToPage(item.link)"
                    >
                        <button v-html="item.menutext"></button>
                    </li>
                </ul>
            </div>
        </nav> 
    </header>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            // 메뉴명 배열
            menulists: [
                { menutext: "소개", link: "/intro" },
                { menutext: "공지사항", link: "/notice" },
                { menutext: "게시판", link: "/userBoard" },
                { menutext: "나만의 여행", link: "/myTravel"},
                { menutext: "마이페이지", link: "/mypage" },
            ],
            logout: true,
            loginTrue: false,
        };
    },
    methods: {
        goToPage(target) {
            if (this.$router.currentRoute.path !== target) {
                this.$router.push(target);
            }
        },

        cookieFind(){
            axios.get('http://localhost:5005/cookieFind', { withCredentials: true })
            .then((res)=>{
                    if(res.data.success){
                        this.logout = false;
                        this.loginTrue = true;
                    }
                })
        }, 
        cookieFin(){
            axios.get('http://localhost:5005/cookieFin', { withCredentials: true })
            .then((res)=>{
                    if(res.data.success){
                        this.logout = true;
                        this.loginTrue = false;
                        alert('로그아웃이 완료되었습니다.');
                    }
                })
        }, 
    },
    
    
mounted(){
            this.cookieFind();
    },
};
</script>
<style>
  nav{
    margin-bottom: -20px;
  }
</style>