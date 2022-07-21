<!-- <template>
    <div>
        <List :msg="msg"></List>
        <List2 @fn="changeHome"></List2>
    </div>
</template>

<script setup>
import List from "../components/List.vue";
import List2 from "../components/List2.vue";

// 父 傳 子
let msg = ref("這是父傳過來的資料");

// 子 傳 父
const changeHome = (n) => {
    this.str = n.value;
};
</script> -->

<!-- ---父子組件雙向資料----------------------------------- -->
<template>
    <div>
        <List3 v-model:num="num"></List3>
    </div>
</template>

<script setup>
import List3 from "../components/List3.vue";
let num = ref(1);
</script>
