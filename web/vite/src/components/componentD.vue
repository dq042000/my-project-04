<template>
    <!-- <input type="text" v-model="text.levels.text" /> -->
    <!-- <input type="text" v-model="text.label" /> -->
    <input type="text" :style="dynameStyle" v-model="text" />
</template>

<script setup>
import { ref, reactive } from "@vue/reactivity";
import { watch, watchEffect } from "@vue/runtime-core";

const text = ref("");

const dynameStyle = reactive({
    color: "red",
    fontSize: "14px",
    transition: "ease-in-out 0.2s",
});

watch(text, (newData) => {
    if (newData.length % 2 === 0) {
        dynameStyle.color = "skyblue";
        dynameStyle.fontSize = "20px";
    } else {
        dynameStyle.color = "red";
        dynameStyle.fontSize = "14px";
    }
});

// ref: 可以是物件，也可以是字串或是整數或是布林值
// const text = ref({
//     levels: {
//         text: "",
//     },
//     label: "123",
// });

// reactive: 一定要是物件
// const text = reactive({
//     levels: {
//         text: "",
//     },
// });

// watch
// newData: 變化後，新的值
// oldData: 原先舊的值
// watch(
//     [() => text.value.levels.text, () => text.value.label], // ref: text.value.levels.text ； reactive: text.levels.text
//     (newData, oldData) => {
//         console.log(newData, oldData);
//     }
// );

// watchEffect: 自動判斷有使用到的變數
// watchEffect(() => {
//     console.log(text.value.levels.text);
// });

// watchEffect: 停止監聽
// const stop = watchEffect(() => {
//     console.log(text.value.levels.text, text.value.label);
//     if (text.value.label == "stop") {
//         stop();
//     }
// });
</script>

<style></style>
