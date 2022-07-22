<template>
    <h1>子：A組件</h1>
    <!-- 將 <div>這是傳送1</div> 傳送到 父組件 .main  -->
    <teleport to=".main">
        <div>這是傳送1</div>
    </teleport>

    <!-- 將 <div>這是傳送2</div> 傳送到 父組件 #container  -->
    <teleport to="#container">
        <div>這是傳送2</div>
    </teleport>
</template>

<script setup></script>
