<template>
    <div id="app">
        <AppHeader />
        <router-view />
    </div>
</template>
<script>
import AppHeader from "@/components/global/AppHeader.vue";
export default {
    name: "App",
    components: {
        AppHeader
    }
};
</script>
