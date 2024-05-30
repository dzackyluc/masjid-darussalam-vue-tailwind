import { createRouter, createWebHistory } from 'vue-router';

const Index = () => import('../pages/Index.vue');
const About = () => import('../pages/About.vue');
const Zakat = () => import('../pages/Zakat.vue');
const AdminIndex = () => import('../pages/Admin/AdminIndex.vue');
const AdminDashboard = () => import('../pages/Admin/AdminDashboard.vue');
const BlogAdmin = () => import('../pages/Admin/AdminBlog.vue');
// const ActivitiesAdmin = () => import('../pages/admin/Activities.vue');
// const ReservasiAdmin = () => import('../pages/admin/Reservasi.vue');
// const ZakatAdmin = () => import('../pages/admin/Zakat.vue');
// const InfaqAdmin = () => import('../pages/admin/Infaq.vue');

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

        // admin routes
        {
            path: '/admin',
            component: AdminIndex,
            children: [
                {
                    path: 'dashboard',
                    component: AdminDashboard,
                },
                {
                    path: 'blogs',
                    component: BlogAdmin,
                },
                // {
                //     path: 'activities',
                //     component: ActivitiesAdmin,
                // },
                // {
                //     path: 'reservasi',
                //     component: ReservasiAdmin,
                // },
                // {
                //     path: 'zakat',
                //     component: ZakatAdmin,
                // },
                // {
                //     path: 'infaq',
                //     component: InfaqAdmin,
                // },


            ]
        }
    ]
});

export default router;