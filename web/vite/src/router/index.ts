import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Basic from "@/views/Basic.vue";
import Component from "@/views/Component.vue";
import Vuex from "@/views/Vuex.vue";
import Route from "@/views/Route.vue";
import Watch from "@/views/Watch.vue";
import Slot from "@/views/Slot.vue";
import Teleport from "@/views/Teleport.vue";
import Tabs from "@/views/Tabs.vue";
import Asynchronous from "@/views/Asynchronous.vue";
import Mixin from "@/views/Mixin.vue";
import ProviedInject from "@/views/ProviedInject.vue";
import Pinia from "@/views/Pinia.vue";
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
    {
        path: "/slot",
        name: "Slot",
        component: Slot,
        meta: {},
    },
    {
        path: "/teleport",
        name: "Teleport",
        component: Teleport,
        meta: {},
    },
    {
        path: "/tabs",
        name: "Tabs",
        component: Tabs,
        meta: {},
    },
    {
        path: "/asynchronous",
        name: "Asynchronous",
        component: Asynchronous,
        meta: {},
    },
    {
        path: "/mixin",
        name: "Mixin",
        component: Mixin,
        meta: {},
    },
    {
        path: "/proviedInject",
        name: "ProviedInject",
        component: ProviedInject,
        meta: {},
    },
    {
        path: "/pinia",
        name: "Pinia",
        component: Pinia,
        meta: {},
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRouterMap as RouteRecordRaw[],
});

// 開始進入新路由之前 (全域)
// https://book.vue.tw/CH4/4-4-navigation-guards.html#beforeeach-%E5%85%A8%E5%9F%9F
//
// 我們可以直接在 router.beforeEach 註冊對應的 callback
// 這樣當「每一個」路由要進入之前，都會先經過這裡
router.beforeEach((to, from) => {
    NProgress.start();
    // console.log("to:", to);
    // console.log("from:", from);
});

// 當路由跳轉結束後 (全域)
// https://book.vue.tw/CH4/4-4-navigation-guards.html#aftereach-%E5%85%A8%E5%9F%9F
//
// 在路由跳轉結束後才會觸發。
// 它的 callback 函式只有 to 、 from 不會有 next 參數
// ，因此不會影響路由的跳轉。
//
// 但是多了一個 failure 參數用來表示路由跳轉失敗。
//
// 所以我們可以使用 router.afterEach 來搭配像是 GA 追蹤一類的工具，
// 來記錄使用者的瀏覽紀錄。
router.afterEach(() => {
    NProgress.done();
});

export default router;
