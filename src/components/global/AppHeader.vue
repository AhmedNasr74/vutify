<template>
    <div class="header">
        <div class="container">
            <div class="logo">
                Ahmed Nasr
            </div>
            <ul class="cusom-nav text-right">
                <router-link to="/" tag="li" exact><a>Home</a></router-link>
                <router-link to="/about" tag="li"><a>About</a></router-link>
                <router-link to="/blog" tag="li"><a>Blog</a></router-link>
                <router-link to="/news" tag="li"><a>News</a></router-link>
                <router-link to="/help" tag="li"><a>Help</a></router-link>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: "AppHeader"
};
</script>
<style lang="scss" scoped>
.header {
    background-color: #333;
    overflow: hidden;
    color: #fff;
    .logo {
        font-size: 24px;
        padding: 20px;
        float: left;
        width: 200px;
    }
    .cusom-nav {
        // float: left;
        width: calc(100%-200px);
        margin: 0;
        li {
            list-style: none;
            display: inline-block;
            padding: 20px;
            font-size: 18px;
            a {
                text-decoration: none;
                color: #fff;
            }
        }
        .router-link-active a {
            color: #42b983 !important;
        }
    }
}
</style>
