import { createRouter, createWebHistory } from 'vue-router';

const Index = () => import('../pages/Index.vue');
const About = () => import('../pages/About.vue');
const Zakat = () => import('../pages/laporanZakat.vue');
const Infaq = () => import('../pages/laporanInfaq.vue');

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Index,
        },
        {
            path: '/about',
            component: About,
        },
        {
            path: '/laporanzakat',
            component: Zakat,
        },
        {
            path: '/laporaninfaq',
            component: Infaq,
        },
        
    ]
});

export default router;