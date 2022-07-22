<template>
    <h1>子：B組件</h1>
    {{ bNum }}
    <button @click="btn">按鈕</button>
</template>

<script setup>
const bNum = inject("changeNum"); // 接收父組件傳來的值
const btn = () => {
    bNum.value = 200;
};
</script>
