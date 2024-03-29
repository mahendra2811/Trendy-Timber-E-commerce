<style scoped></style>

<template>
    <!-- Blog-article-Component -->
    <div class="tranding-products-bx">
        <div class="container">
            <div class="bx-header border-top py-4 mb-4 d-flex justify-content-between align-items-center">
                <span class="fs-2 fw-semibold">Latest from our blog</span>
                <span class="banner-nav fs-6 fw-medium opacity-80 d-flex justify-content-between align-items-center">
                    <a href="" class="link-primary"><span class="banner-nav-item">View all <span
                                class="bi bi-arrow-right ms-2"></span></span></a>
                </span>
            </div>

            <div class="content row row-cols-1 row-cols-lg-4  align-items-stretch justify-content-evenly">
                <!-- ProductItem-Cards -->
                <BlogArticleCard :title="tmpTitle1" :date="tmpDate1" category="Tutorials" author="Admin"
                    img="/assets/cloud/article-img-01.jpg" class="col-11 d-block col-lg-3" />
                <BlogArticleCard :title="tmpTitle2" :date="tmpDate2" category="Tutorials" author="Admin"
                    img="/assets/cloud/article-img-02.jpg" class="col-11 d-block col-lg-3" />
                <BlogArticleCard :title="tmpTitle3" :date="tmpDate3" category="Tutorials" author="Admin"
                    img="/assets/cloud/article-img-03.jpg" class="col-11 d-block col-lg-3" />
                <BlogArticleCard :title="tmpTitle4" :date="tmpDate4" category="Tutorials" author="Admin"
                    img="/assets/cloud/article-img-01.jpg" class="col-11 d-block col-lg-3" />
                <!-- */ProductItem-Cards -->
            </div>
        </div>
    </div>

    <!-- */BlogArticles-Component -->
</template>

<script>
import BlogArticleCard from './BlogArticleCard.vue';

export default {
    name: "BlogArticlesBanner",
    data() {
        return {
            tmpTitle1: "Discover the Top 10 Interior Design Trends of 2024! From minimalist decor to eco-friendly furnishings, explore the latest trends shaping modern homes.",
            tmpDate1: "dec 04, 2023",
            tmpTitle2: "Transform Your Outdoor Space: Tips for Creating a Stylish and Functional Patio. Explore ideas for maximizing your outdoor living area and creating a cozy retreat.",
            tmpDate2: "Nov. 04, 2023",
            tmpTitle3: "The Art of Mixing Patterns: How to Create a Harmonious Look. Learn the secrets to combining different patterns and textures to add visual interest to your home decor.",
            tmpDate3: "Mar. 04, 2024",
            tmpTitle4: "Small Space Solutions: Creative Ideas for Decorating Compact Apartments. Discover clever storage solutions and space-saving furniture to maximize your living area.",
            tmpDate4: "Apr 08, 2024",
        }
    },
    components: {
        BlogArticleCard
    }
}
</script>