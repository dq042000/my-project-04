<template>
    <!-- 非同步組件 -->
    <div>
        <h1>D組件</h1>
        {{ list }}
    </div>
</template>

<script setup>
import axios from "axios";

let list = ref([]);
let res = await axios.get(
    "http://testapi.xuexiluxian.cn/api/slider/getSliders"
);
list.value = res.data.data.list;
</script>
