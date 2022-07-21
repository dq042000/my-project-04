<template>
    <div>
        <h1>B組件</h1>
        {{ str }}
    </div>
</template>

<script setup>
const props = defineProps({
    str: {
        type: String,
        default: "沒資料",
    },
});
</script>
