<template>
    <h1>子：B組件</h1>
    {{ num }}
    <button @click="favBtn">
        {{ fav ? "收藏中..." : "收藏" }}
    </button>
</template>

<script setup>
import mixin from "../mixins/mixin.js";
let { num, fav, favBtn } = mixin();
</script>
