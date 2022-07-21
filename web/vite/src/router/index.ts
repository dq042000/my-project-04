import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Basic from "@/views/Basic.vue";
import Component from "@/views/Component.vue";
import Vuex from "@/views/Vuex.vue";
import Route from "@/views/Route.vue";
import Watch from "@/views/Watch.vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import NProgress from "nprogress";

export const constantRouterMap: AppRouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {},
    },
    {
        path: "/basic",
        name: "Basic",
        component: Basic,
        meta: {},
    },
    {
        path: "/component",
        name: "Component",
        component: Component,
        meta: {},
    },
    {
        path: "/vuex",
        name: "Vuex",
        component: Vuex,
        meta: {},
    },
    {
        path: "/route",
        name: "Route",
        component: Route,
        meta: {},
    },
    {
        path: "/watch",
        name: "Watch",
        component: Watch,
        meta: {},
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRouterMap as RouteRecordRaw[],
});

// 路由守衛
router.beforeEach(() => {
    NProgress.start();
});

router.afterEach(() => {
    NProgress.done();
});

export default router;
