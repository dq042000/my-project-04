<template>
    <input type="text" v-model="msg" />
    <input type="text" v-model="str" />
    <input type="text" v-model="obj.arr" />
</template>

<script setup>
let msg = ref("這是一個資料msg");
let str = ref("這是一個資料str");
let obj = reactive({
    a: 1,
    arr: ["a", "b", "c"],
});

watch(
    msg,
    (newVal, oldVal) => {
        console.log(newVal, oldVal);
    },
    {
        immediate: true,
    }
);
</script>

<script>
export default {
    setup() {
        // let msg = ref("這是一個資料msg");
        // let str = ref("這是一個資料str");
        // let obj = reactive({
        //     a: 1,
        //     arr: ["a", "b", "c"],
        // });
        // 監聽一個
        // watch(
        //     msg,
        //     (newVal, oldVal) => {
        //         console.log(newVal, oldVal);
        //     },
        //     {
        //         immediate: true,
        //     }
        // );
        // 監聽多個
        // watch(
        //     [msg, str],
        //     (newVal, oldVal) => {
        //         console.log(newVal, oldVal);
        //     },
        //     {
        //         immediate: true,
        //     }
        // );
        // 監聽 "對象" 中 "某個對象"
        // watch(
        //     () => obj.arr,
        //     (newVal, oldVal) => {
        //         console.log(newVal, oldVal);
        //     }
        // );
        // 立即執行監聽
        // watchEffect(() => {
        //     console.log(msg.value);
        // });
        // return {
        //     msg,
        //     str,
        //     obj,
        // };
    },
};
</script>

<style></style>
