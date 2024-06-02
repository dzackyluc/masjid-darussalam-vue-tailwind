import { createRouter, createWebHistory } from 'vue-router';

import { isAuthenticated } from './auth'; 

const Index = () => import('../pages/Index.vue');
const About = () => import('../pages/About.vue');
const Zakat = () => import('../pages/Zakat.vue');
const Infaq = () => import('../pages/Infaq.vue');
const AdminIndex = () => import('../pages/Admin/AdminIndex.vue');
const AdminDashboard = () => import('../pages/Admin/AdminDashboard.vue');
const BlogAdmin = () => import('../pages/Admin/AdminBlog.vue');
const ActivitiesAdmin = () => import('../pages/Admin/AdminActivity.vue');
// const ReservasiAdmin = () => import('../pages/admin/Reservasi.vue');
const ZakatAdmin = () => import('../pages/Admin/AdminZakat.vue');

const Login = () => import('../pages/Auth/Login.vue');
const Register = () => import('../pages/Auth/Register.vue');

const InfaqAdmin = () => import('../pages/Admin/AdminInfaq.vue');

const router = createRouter({
    mode: 'history',
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Index,
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/register',
            component: Register,
        },
        {
            path: '/about',
            component: About,
        },
        {
            path: '/zakat',
            component: Zakat,
        },
        {
            path: '/infaq',
            component: Infaq,
        },

        

        // admin routes
        {
            path: '/admin',
            component: AdminIndex,
            meta: { requiresAuth: true },
            children: [
                {
                    path: 'dashboard',
                    component: AdminDashboard,
                    meta: { requiresAuth: true },
                },
                {
                    path: 'blogs',
                    component: BlogAdmin,
                    meta: { requiresAuth: true },
                },
                {
                    path: 'activities',
                    component: ActivitiesAdmin,
                    meta: { requiresAuth: true },
                },
                {
                    path: 'zakat',
                    component: ZakatAdmin,
                    meta: { requiresAuth: true },
                },
                {
                    path: 'infaq',
                    component: InfaqAdmin,
                    meta: { requiresAuth: true },
                }
            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isAuthenticated()) {
            next({ path: '/login' }); 
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;