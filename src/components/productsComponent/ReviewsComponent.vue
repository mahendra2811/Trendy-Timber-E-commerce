<style scoped>
/* Review-img */
.review-img {
    max-width: 80px !important;
    width: 75px;
    height: 75px !important;
    border-radius: 50% !important;
    object-fit: cover;
}
</style>

<template>
    <!-- Reviews-Component -->
    <div class="review-item my-3 text-center mx-auto mb-5 pb-3">

        <p class="opacity-80 my-3">
            {{ revText }}
        </p>

        <img :src="revImg" class="mx-auto  review-img mt-3" alt="" />

        <span class="fw-semibold d-block small mt-3">
            {{ revName }}
        </span>
        <span class="fw-semibold d-block small opacity-50 small">{{ revLocation }}</span>


    </div>
</template>


<script>
export default {
    name: "ReviewsComponent",
    data() {
        return {
        }
    },
    props: {
        revImg: { type: String, default: "@/../src/assets/images/person-1.png" },
        revName: { type: String, default: "Maria Homello" },
        revLocation: { type: String, default: "Country, Town" },
        revText: { type: String, default: "Customer review comes here..." }
    }
}
</script>