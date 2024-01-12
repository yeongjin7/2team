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
                    <router-link to="/login">로그인</router-link> / 
                    <router-link to="/member">회원가입</router-link>
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
import Login from '@/views/login.vue';

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
        };
    },
    methods: {
        goToPage(target) {
            if (this.$router.currentRoute.path !== target) {
                this.$router.push(target);
            }
        },
    },
};
</script>
<style>
  nav{
    margin-bottom: -20px;
  }
</style>