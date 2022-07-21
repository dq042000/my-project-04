<template>
    <div>
        <h1>這是list3.vue組件</h1>
        <hr />
        子： {{ num }}
        <button @click="btn">按鈕</button>
    </div>
</template>

<script setup>
const props = defineProps({
    num: {
        type: Number,
        default: 100,
    },
});

const emit = defineEmits(["update:num"]);
const btn = () => {
    emit("update:num", 200);
};
</script>
