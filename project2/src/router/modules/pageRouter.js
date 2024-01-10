// const withPrefix = (prefix, routes) =>
//     routes.map((route) => {
//     route.path = prefix + route.path;
//     return route;
// });

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
            path: "/notice",
            name: "notice",
            component: () => import("@/views/notice.vue"),
        },
    ],
};
export default pageRouter;