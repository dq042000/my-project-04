import { createStore } from "vuex";
import user from "./modules/user";
import persistedState from "vuex-persistedstate";

export default createStore({
    // state: {
    //     num: 10,
    //     sum: 10,
    //     str: "這是store資料",
    // },
    // getters: {
    //     total(state) {
    //         return state.num + state.sum;
    //     },
    // },
    // mutations: {
    //     changeNum(state, val) {
    //         state.num = val;
    //     },
    // },
    // actions: {
    //     changeBtn() {
    //         alert(1);
    //     },
    // },
    modules: {
        user,
    },
    plugins: [
        persistedState({
            key: "test123",
            paths: ["user"],
        }),
    ],
});
