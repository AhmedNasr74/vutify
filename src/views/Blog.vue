<template>
    <div class="our-blog">
        <div class="container">
            <h2 class="text-center mt-2">Our Blog</h2>
            <div class="row">
                <div class="col-md-4">
                    <BlogSidebare />
                </div>
                <div class="col-md-8">
                    <BlogPosts />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BlogPosts from "@/components/Blog/BlogPosts";
import BlogSidebare from "@/components/Blog/BlogSidebare";
export default {
    name: "blog",
    components: {
        BlogPosts,
        BlogSidebare
    }
};
</script>
