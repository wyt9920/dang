<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {}
    }
</script>

<style>
    #app {
        margin: 0;
        padding: 0;
    }

    * {
        padding: 0;
        margin: 0;
    }

    a{
        text-decoration: none;
    }

    ::-webkit-scrollbar {
        display: none;
    }
</style>
