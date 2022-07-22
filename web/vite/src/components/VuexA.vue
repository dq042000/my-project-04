<template>
    {{ userInfo }}
    <button @click="btn">修改info</button>
    <h1>子：A組件</h1>
</template>

<script setup>
import { useStore } from "vuex";

let store = useStore();
let userInfo = computed(() => store.state.user.userInfo);

const btn = () => {
    store.commit("changeInfo", 300);
};
</script>

<!-- <script setup>
import { useStore } from "vuex";

let store = useStore();
let num = computed(() => store.state.num);
let total = computed(() => store.getters.total);
const btn = () => {
    // store.commit("changeNum", 300);
    store.dispatch("changeBtn");
};
</script> -->
