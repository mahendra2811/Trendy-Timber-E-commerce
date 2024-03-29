<script setup>
import LinkButton from '../btnComponents/GlobalButtons/LinkButton.vue';

</script>

<style scoped>
/* Image Banner-Style */
.mdImgBanner {
    position: relative;
}

/* BannerCaption */
.mdImgBanner .bannerCaption {
    position: relative;
    z-index: 2 !important;
}

.mdImgBanner .bannerImage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1 !important;
    overflow: hidden !important;
}

/* Banner-Img Img*/
.mdImgBanner .bannerImage img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2 !important;
    background-color: #f8f8f8;
}
</style>

<template>
    <!-- Medium-Image-Component -->
    <div class="mdImgBanner w-100 m-2">

        <div class="bannerCaption p-5">
            <h3 class="fs-2 fw-semibold">{{ bannerTitle }}</h3>
            <p class="fs-5">{{ bannerDescription }}</p>
            <LinkButton btn-theme="primary-btn" :btn-label="btnLabel" :btn-url="bannerLink" btn-icon="arrow-right"
                outlined="false" class="btn-lg mt-4" />
            <br><br>
        </div>
        <div class="bannerImage">
            <img :src="bannerImage" alt="" />
        </div>

    </div>

    <!-- */Medium-Image-Component ../../src-->
</template>

<script>
export default {
    name: "MediumImageBanner",
    data() {
        return {
        }
    },
    props: {
        bannerImage: { type: String, default: "/assets/images/sli-h1.webp" },
        bannerTitle: { type: String, default: "Image Banner Title" },
        bannerDescription: { type: String, default: "Description text goes here..." },
        bannerLink: { type: String },
        btnLabel: { type: String, default: "Discover now" }
    }
}
</script>