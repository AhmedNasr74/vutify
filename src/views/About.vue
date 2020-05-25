<template>
    <div class="about container">
        <h1>This is an {{ (pageName + "jjjjj") | upper }}</h1>
        <p>{{ pageDesc }}</p>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            pageName: "About US",
            pageDesc: "About US Page Desc"
        };
    }
};
</script>
