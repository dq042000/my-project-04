<template>
    <p class="test-cls" :key="test">{{ test }}</p>
    <!-- <p v-for="(value, key, index) in dataList" :key="key">
        <span v-show="key !== 'key3'">
            {{ index }}. {{ key }} - {{ value }}
        </span>
    </p> -->
</template>

<script setup>
import { ref } from "@vue/reactivity";
const test = ref(1);
const dataList = { key1: "a", key2: "b", key3: "c", key4: "d" };
setTimeout(() => {
    test.value = "apple!";
}, 2000);
</script>

<style>
.test-cls {
    font-size: 40px;
    animation: openln 1s ease-in-out;
}
@keyframes openln {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
