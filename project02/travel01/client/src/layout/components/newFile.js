import axios from 'axios';

export default (await import('vue')).defineComponent({
data() {
return {
menulists: [
{ menutext: "소개", link: "/intro" },
{ menutext: "공지사항", link: "/notice" },
{ menutext: "게시판", link: "/userBoard" },
{ menutext: "나만의 여행", link: "/myTravel" },
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

cookieFind() {
axios.get('http://localhost:5005/cookieFind', { withCredentials: true })
.then((res) => {
if (res.data.success) {
this.logout = false,
this.loginTrue = false,
                    ;
}
}
);
}
},
mounted() {
this.cookieFind();
},
});
