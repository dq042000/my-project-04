<script setup lang="ts"></script>
<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/basic">Basic</router-link> |
        <router-link to="/component">Component</router-link> |
        <router-link to="/vuex">Vuex</router-link> |
        <router-link to="/route">Route</router-link> |
        <router-link to="/watch">Watch</router-link> |
        <router-link to="/slot">Slot</router-link> |
        <router-link to="/teleport">Teleport</router-link> |
        <router-link to="/tabs">Tabs</router-link>
    </div>
    <router-view />
</template>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

#seperate {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
</style>
