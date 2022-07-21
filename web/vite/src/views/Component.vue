<!-- ---父組件 傳 子組件----------------------------------- -->
<!-- <template>
    <div>
        <List :msg="msg"></List>
    </div>
</template>

<script setup>
import List from "../components/List.vue";
let msg = ref("這是父傳過來的資料");
</script> -->

<!-- ---子組件 傳 父組件----------------------------------- -->
<!-- <template>
    <div>
        <List2 @fn="changeHome"></List2>
    </div>
</template>

<script setup>
import List2 from "../components/List2.vue";
const changeHome = (n) => {
    console.log(n.value);
};
</script> -->

<!-- ---父子組件雙向資料----------------------------------- -->
<!-- <template>
    <div>
        <List3 v-model:num="num"></List3>
    </div>
</template>

<script setup>
import List3 from "../components/List3.vue";
let num = ref(1);
</script> -->

<!-- ---兄弟組件之間的傳值----------------------------------- -->
