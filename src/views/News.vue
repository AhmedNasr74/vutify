<template>
    <div class="news container">
        <div v-if="this.articls.length > 0">
            <h1 class="text-center">OUR NEWS</h1>
            <div
                class="article"
                v-for="(art, index) of this.articls"
                :key="index"
            >
                {{ index + " - " + art.title }}
            </div>
        </div>
        <div v-else class="loading">
            <div class="sk-chase">
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
const sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};
export default {
    name: "News",
    data: () => {
        return {
            articls: {}
        };
    },
    mounted: function() {
        axios
            .get(
                "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=85626eadec2a4f178995ecfb19f50c23"
            )
            .then(response => {
                sleep(500).then(() => {
                    //do stuff
                    this.articls = response.data.articles;
                });
            });
    }
};
</script>
<style lang="scss">
.loading {
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}
</style>
