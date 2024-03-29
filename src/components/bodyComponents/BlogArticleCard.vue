<style scoped>
/* CardImg-top */
.card-img-top {
    position: relative;
    overflow: hidden;
}

/* CardImgTop Img */
.card-img-top img {
    object-fit: cover;
    object-position: center !important;
    max-width: 100%;
    width: 100%;
    height: 100%;
}
</style>

<!-- latest from our blog thing used here we will add our blog data to explain this  -->
<template>
    <!-- Blog-Article Card -->
    <a href="">
        <div class="card border border-0">

            <div class="card-img-top w-100 rounded rounded-0">
                <img :src="img" alt="" srcset="">
            </div>

            <div class="card-body py-3 px-1">
                <p class="card-title fw-bold">{{ title }}</p>
                <p class="card-text">
                    <small class="text-body-secondary fw-medium small">
                        <span class="color-black-dark">{{ date }}</span>
                        <span class="mx-2 opacity-50 fs-5">/</span>

                        <span class="">
                            <span class="opacity-75">in </span>
                            <span class="color-black"> {{ category }}</span>
                        </span>
                        <span class="mx-2 opacity-50 fs-5">/</span>
                        <span class=""><span class="opacity-75">by </span>
                            <span class="color-primary">Admin</span>

                        </span>
                    </small>
                </p>
            </div>

        </div>
    </a>

    <!-- */Blog-Article-Cards -->
</template>


<script>
export default {
    name: "BlogArticleCard",
    data() {
        return {

        }
    },
    props: {
        title: String,
        date: String,
        category: String,
        author: String,
        img: String
    }
}
</script>