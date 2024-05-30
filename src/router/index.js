import { createRouter, createWebHistory } from 'vue-router';

const Index = () => import('../pages/Index.vue');
const About = () => import('../pages/About.vue');
const Zakat = () => import('../pages/Zakat.vue');

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
            path: '/zakat',
            component: Zakat,
        },
    ]
});

export default router;