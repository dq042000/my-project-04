<template>
    <!-- v-on 也可以寫成 @ -->
    <button v-on:click="changeView(1)">顯示單向綁定</button>
    <button v-on:click="changeView(2)">顯示雙向綁定</button>
    <button v-on:click="changeView(3)">沒畫面</button>
    <!-- <button @:click="changeView(1)">顯示單向綁定</button> -->
    <!-- <button @:click="changeView(2)">顯示雙向綁定</button> -->

    <!-- v-if 和 v-show -->
    <div class="container-1" v-if="view === 1">
        <p>資料綁定（單向綁定）</p>
        <p>{{ data }}</p>
    </div>

    <div class="container-2" v-else-if="view === 2">
        <p>資料綁定（雙向綁定）</p>
        <input type="text" v-model="text" />
        <p>{{ text }}</p>
    </div>

    <div v-else>沒畫面</div>

    <!-- <div class="container-1" v-show="view === 1">
        <p>資料綁定（單向綁定）</p>
        <p>{{ data }}</p>
    </div>

    <div class="container-2" v-show="view === 2">
        <p>資料綁定（雙向綁定）</p>
        <input type="text" v-model="text" />
        <p>{{ text }}</p>
    </div>

    <div v-show="view !== 1 && view !== 2">沒畫面</div> -->
</template>

<script setup>
import { ref } from "@vue/reactivity";

const data = "Hello Vue";
const text = ref("123");
const view = ref(1);
const changeView = (index) => {
    view.value = index;
};
</script>

<style>
.container-1 {
    border: 2px red solid;
}

.container-2 {
    border: 2px skyblue solid;
}
</style>
