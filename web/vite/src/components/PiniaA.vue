<template>
    <div>
        {{ changeNum }}
        {{ changeNum }}
        {{ changeNum }}
        <h1>子：A組件</h1>
        {{ name }}
        {{ num }}
        <button @click="changeName">修改名稱</button>
        <button @click="btn">+=操作</button>
        <button @click="reset">reset</button>
    </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useStore } from "../store";

const store = useStore();

let { name, num, changeNum } = storeToRefs(store);
const changeName = () => {
    // name.value = "張三";
    // num.value = 200;

    // 批量更新
    store.$patch((state) => {
        state.name = "張三三";
        state.num++;
    });
};

const btn = () => {
    store.upNum(200);
};

const reset = () => {
    store.$reset();
};
</script>
