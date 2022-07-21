<template>
    <div>這是子組件 ===> {{ msg }}</div>
</template>

<script setup>
defineProps({
    msg: {
        type: String,
        default: "還沒接收到父傳過來的資料",
    },
});
</script>
