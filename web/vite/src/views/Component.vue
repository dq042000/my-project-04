<!-- ---父組件 傳 子組件----------------------------------- -->
<!-- <template>
    <div>
        <ComponentList :msg="msg"></ComponentList>
    </div>
</template>

<script setup>
import ComponentList from "../components/ComponentList.vue";
let msg = ref("這是父傳過來的資料");
</script> -->

<!-- ---子組件 傳 父組件----------------------------------- -->
<!-- <template>
    <div>
        <ComponentList2 @fn="changeHome"></ComponentList2>
    </div>
</template>

<script setup>
import ComponentList2 from "../components/ComponentList2.vue";
const changeHome = (n) => {
    console.log(n.value);
};
</script> -->

<!-- ---父子組件雙向資料----------------------------------- -->
<!-- <template>
    <div>
        <ComponentList3 v-model:num="num"></ComponentList3>
    </div>
</template>

<script setup>
import ComponentList3 from "../components/ComponentList3.vue";
let num = ref(1);
</script> -->

<!-- ---兄弟組件之間的傳值----------------------------------- -->
<!--
    父組件 有 A組件、B組件，A組件的按鈕按下去會先傳給 父組件，父組件再傳給 B組件
-->
<template>
    <ComponentA @fn="changeFn"></ComponentA>
    <ComponentB :str="str"></ComponentB>
</template>

<script setup>
import ComponentA from "../components/ComponentA.vue";
import ComponentB from "../components/ComponentB.vue";

let str = ref("");
const changeFn = (n) => {
    str.value = n.value;
};
</script>
