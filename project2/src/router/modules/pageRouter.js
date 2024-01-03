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
    ],
};
export default pageRouter;