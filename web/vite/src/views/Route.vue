<template>
    <div>
        <router-link to="/">回首頁</router-link>
        <button @click="go">按鈕</button>
    </div>
</template>

<script setup>
let router = new useRouter();
let route = new useRoute();
console.log(route.query.act);
let go = () => {
    route.push("/watch");
};
</script>

<!-- <script>
export default {
    setup() {
        // let uses = useRouter();
        // let go = () => {
        //     uses.push("/watch");
        // };

        let uses = new useRouter();
        let go = () => {
            uses.push("/watch");
        };
        return { go };
    },
};
</script> -->

<style></style>
