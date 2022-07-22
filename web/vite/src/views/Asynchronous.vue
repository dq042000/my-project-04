<template>
    <!-- 非同步組件 -->
    <AsynchronousA></AsynchronousA>
    <AsynchronousB></AsynchronousB>
    <div ref="target">
        <Suspense v-if="targetIsVisible">
            <template #default>
                <AsynchronousC></AsynchronousC>
            </template>
            <template #fallback> 載入中.... </template>
        </Suspense>
    </div>
    <Suspense>
        <template #default>
            <AsynchronousD></AsynchronousD>
        </template>
        <template #fallback> 載入中.... </template>
    </Suspense>
</template>

<script setup>
import { useIntersectionObserver } from "@vueuse/core";
import AsynchronousA from "../components/AsynchronousA.vue";
import AsynchronousB from "../components/AsynchronousB.vue";

const AsynchronousC = defineAsyncComponent(() =>
    import("../components/AsynchronousC.vue")
);

const AsynchronousD = defineAsyncComponent(() =>
    import("../components/AsynchronousD.vue")
);

const target = ref(null);
const targetIsVisible = ref(false);
// 當使用者訪問到組件再去載入該組件
const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
    // console.log(isIntersecting);
    if (isIntersecting) {
        targetIsVisible.value = isIntersecting;
    }
});
</script>

<style></style>
