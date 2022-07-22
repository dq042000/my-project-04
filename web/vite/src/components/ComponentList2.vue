<template>
    <div>
        這是 子組件 傳給 父組件 ===> {{ num }}
        <button @click="changeNum">按鈕</button>
    </div>
</template>

<!-- <script>
export default {
    data() {
        return {
            num: 10,
        };
    },
    methods: {
        changeNum() {
            this.$emit("fn", this.num);
        },
    },
};
</script> -->

<!-- <script>
export default {
    setup(props, { emit }) {
        let num = ref(100);
        const changeNum = () => {
            emit("fn", num);
        };
        return {
            num,
            changeNum,
        };
    },
};
</script> -->

<script setup lang="ts">
let num = ref("這是子傳過去");

const emit = defineEmits(["fn"]);

const changeNum = () => {
    emit("fn", num);
};
</script>
