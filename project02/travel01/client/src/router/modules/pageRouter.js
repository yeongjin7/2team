const pageRouter = {
    path: "/",
    name: "layout",
    redirect: "/main", // index는 header footer 밖에 없으니 초기 화면에 필요한 페이지(main)를 불러온다.
    component: () => import("@/layout/index.vue"),
    
    children: [
        {
            path: "/main",
            name: "main",
            component: () => import("@/views/main.vue"),
        },
        {
            path: "/mypage",
            name: "mypage",
            component: () => import("@/views/mypage.vue"),
        },
        {
            path: "/notice",
            name: "notice",
            component: () => import("@/views/notice.vue"),
        },
        {
            path: "/userBoard",
            name: "userBoard",
            component: () => import("@/views/userBoard.vue"),
        },
        {
            path: "/boardDetail",
            name: "boardDetail",
            component: () => import("@/views/boardDetail.vue"),
        },
        {
            path: "/myTravel",
            name: "myTravel",
            component: () => import("@/views/myTravel.vue"),
        },
        {
            path: "/intro",
            name: "intro",
            component: () => import("@/views/intro.vue"),
        },
        {
            path: "/userBoardCreate",
            name: "userBoardCreate",
            component: () => import("@/views/userBoardCreate.vue"),
        },
        {
            path: "/login",
            name: "login",
            component: () => import("@/views/login.vue"),
        },
        {
            path: "/member",
            name: "member",
            component: () => import("@/views/member.vue"),
        },
        {
            path: "/dataDisplay",
            name: "dataDisplay",
            component: () => import("@/views/dataDisplay.vue"),
        },
        {
            path: "/search",
            name: "search",
            component: () => import("@/views/search.vue"),
        },
        {
            path: "/KaKaoMap",
            name: "KaKaoMap",
            component: () => import("@/views/KaKaoMap.vue"),
        },
        {
            path: "/admin",
            name: "admin",
            component: () => import("@/views/admin.vue"),
        },
    ],
};
export default pageRouter;