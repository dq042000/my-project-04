<template>
    <h1>子：C組件</h1>
    {{ num }}
    <button @click="favBtn(1)">按鈕</button>
</template>

<script>
import { fav } from "../mixins/mixin.js";
export default {
    data() {
        return {
            str: "您好",
        };
    },
    mixins: [fav],
};
</script>
