<template>
    <div>
        <SlotA>
            <!-- 具名插槽 -->
            <!-- # 是 v-slot 的簡寫 -->
            <!-- #xxx 效果等同 v-slot:xxx -->
            <template #xxx> 這是xxx資料 </template>
            <template v-slot:yyy> 這是yyy資料 </template>

            <!-- 動態插槽 -->
            <template #[zzz]> 這是zzz資料 </template>

            <!-- 作用域插槽 -->
            <!-- #default="{data}" 效果等同 v-slot="{ data }" -->
            <template v-slot="{ data }"
                >{{ data.name }} ---> {{ data.age }}</template
            >
        </SlotA>
    </div>
</template>

<script setup>
import SlotA from "../components/SlotA.vue";

// 動態插槽
let zzz = ref("zzz");
</script>

<style></style>
