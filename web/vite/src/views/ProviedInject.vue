<template>
    <div>Provide / Inject</div>
    <ProviedInjectA></ProviedInjectA>
</template>

<script setup>
import ProviedInjectA from "../components/ProviedInjectA.vue";
let num = ref(100);
provide("changeNum", num); // 傳值
</script>

<style></style>
