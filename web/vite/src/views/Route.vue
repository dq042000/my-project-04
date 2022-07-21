<template>
    <div>
        <router-link to="/">回首頁</router-link>
        <button @click="go">按鈕</button>
    </div>
</template>

<script setup>
// http://localhost:3000/#/route/?act=44445555
let router = new useRouter();
let route = new useRoute();
console.log(route.query.act);
let go = () => {
    router.push("/watch");
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
