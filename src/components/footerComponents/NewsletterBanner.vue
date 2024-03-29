<style scoped></style>

<template>
    <!-- NewsLetter Component -->
    <div class="newletter-banner my-5 py-5 preload-rs">

        <!-- Container -->
        <div class="container">
            <div class="banner-bx bg-color-secondary p-5 row row-cols-1 row-cols-lg-2 align-items-center">

                <div class="content col-11 col-lg-4">
                    <h3 class="fw-semibold">Our Newsletter</h3>
                    <p class="fs-5 opacity-80">Subscribe to our newsletter and get discount 50% off </p>
                </div>
                <div class="formbx col-11 col-lg-8">
                    <form action="" class="formbx d-flex bg-white p-2">
                        <input type="email" name="" id="" class="form-control fw-medium border border-0 w-100"
                            placeholder="Your email address">
                        <button type="submit" class="btn btn-default border border-0">
                            <span class="bi bi-arrow-right"></span>
                        </button>

                    </form>
                </div>


            </div>
        </div>
    </div>
    <!-- */Newsletter-component -->
</template>

<script>
export default {
    name: "NewsletterBanner",
    data() {
        return {
        }
    }
}
</script>