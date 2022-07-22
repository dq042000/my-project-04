<template>
    <div class="main">這是main</div>
    <div id="container">這是container</div>

    <!-- 必須傳送到有這個dom的內容(順序)-->
    <TeleportA></TeleportA>
</template>

<script setup>
import TeleportA from "../components/TeleportA.vue";
</script>

<style></style>
