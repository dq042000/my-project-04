<template>
    <h1>Computed 計算屬性</h1>

    <p><input type="text" v-model="text" /></p>
    <p><input type="number" v-model="num" /></p>
    <h3>{{ numFormat }}</h3>

    <p><input type="text" v-model="fullName" /></p>
    <h3>{{ firstName }}</h3>
    <h3>{{ latsName }}</h3>
</template>

<script setup>
import { computed, ref } from "vue";

const firstName = ref("John");
const latsName = ref("Doe");

const fullName = computed({
    get() {
        return `${firstName.value} ${latsName.value}`;
    },
    set(newName) {
        const [newFirstName, newLatsName] = newName.split(" ");
        firstName.value = newFirstName;
        latsName.value = newLatsName;
    },
});

const text = ref("Hello World");
const num = ref(0);

const numFormat = computed(() => {
    console.log("change");
    if (Number.isNaN(num.value * 100)) return num.value;
    return `${num.value * 100}%`;
});

// const numFormat = () => {
//     console.log("change");
//     if (Number.isNaN(num.value * 100)) return num.value;
//     return `${num.value * 100}%`;
// };
</script>

<style></style>
