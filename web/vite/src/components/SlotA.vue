<template>
    <div>
        <!-- 具名插槽 -->
        <h1>子：A組件</h1>
        <header>
            <div>頭部</div>
            <slot name="xxx"></slot>
            <slot name="zzz"></slot>
        </header>
        <hr />
        <footer>
            <div>底部</div>
            <slot name="yyy"></slot>
        </footer>
        <hr />

        <!-- 作用域插槽 -->
        <section>
            <div>中間</div>
            <div v-for="item in list" :key="item.id">
                <slot :data="item"></slot>
            </div>
        </section>
        <hr />
    </div>
</template>

<script setup>
let list = ref([
    { id: 1, name: "李一", age: 26 },
    { id: 2, name: "李二", age: 31 },
    { id: 3, name: "李三", age: 25 },
    { id: 4, name: "李四", age: 22 },
    { id: 5, name: "李五", age: 41 },
    { id: 6, name: "李六", age: 46 },
    { id: 7, name: "李七", age: 36 },
    { id: 8, name: "李八", age: 38 },
    { id: 9, name: "李九", age: 29 },
]);
</script>
