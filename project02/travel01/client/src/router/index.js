import pageRouter from "./modules/pageRouter";
import { createRouter , createWebHistory } from 'vue-router'
import { createApp } from 'vue';
import App from '../App.vue';
createApp(App).mount('#app');

export const router  = new createRouter({
    history: createWebHistory(),
    routes: [ pageRouter ]
});
export default router;