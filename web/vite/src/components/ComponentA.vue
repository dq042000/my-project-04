<template>
    <div>
        <h1>A組件</h1>
        <button @click="btn">按鈕</button>
    </div>
</template>

<script setup>
let str = ref("這是A組件的資料");
const emit = defineEmits(["fn"]);

const btn = () => {
    emit("fn", str);
};
</script>
