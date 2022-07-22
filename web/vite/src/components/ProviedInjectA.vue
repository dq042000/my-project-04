<template>
    <h1>子：A組件</h1>
    {{ aNum }}
    <hr />
    <ProviedInjectB></ProviedInjectB>
</template>

<script setup>
import ProviedInjectB from "../components/ProviedInjectB.vue";
const aNum = inject("changeNum"); // 接收父組件傳來的值
</script>
