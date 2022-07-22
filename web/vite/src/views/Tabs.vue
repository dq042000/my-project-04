<template>
    <!-- 動態組件 -->
    <ul>
        <li
            v-for="(item, index) in tabList"
            :key="index"
            @click="change(index)"
        >
            {{ item.name }}
        </li>
    </ul>
    <keep-alive>
        <component :is="currentComponent.com"></component>
    </keep-alive>
</template>

<script setup>
import TabsA from "../components/TabsA.vue";
import TabsB from "../components/TabsB.vue";
import TabsC from "../components/TabsC.vue";

// reactive 是一個響應式資料，組件沒必要響應，需要用 markRaw() 包住組件
let tabList = reactive([
    { name: "A準備好面試題", com: markRaw(TabsA) },
    { name: "B準備好簡歷", com: markRaw(TabsB) },
    { name: "C準備好項目", com: markRaw(TabsC) },
]);

let currentComponent = reactive({
    com: tabList[0].com,
});

const change = (idx) => {
    currentComponent.com = tabList[idx].com;
};
</script>

<style></style>
