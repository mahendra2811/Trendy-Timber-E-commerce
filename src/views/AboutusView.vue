<script setup>
import BasicNavbar from '@/components/headerComponents/BasicNavbar.vue';
import LinkButton from '@/components/btnComponents/GlobalButtons/LinkButton.vue';
import CustomersReviewsBanner from '@/components/bodyComponents/CustomersReviewsBanner.vue';
import NewsletterBanner from '@/components/footerComponents/NewsletterBanner.vue';
import GlobalFooter from '@/components/footerComponents/GlobalFooter.vue';
</script>

<style scoped> /* -- */
 .img-wrap img {
     border-radius: 20px;
 }

 .img-fluid {
     max-width: 100%;
     height: auto;
 }

 img,
 svg {
     vertical-align: middle;
 }

 #features .col-lg-6,
 #sidebanner .col-lg-6 {
     position: relative !important;
 }

 #features .grid-sm {
     position: absolute;
     z-index: 1 !important;
     -webkit-transform: translate(-30%, -55%);
     -ms-transform: translate(-30%, -55%);
     transform: translate(-30%, -55%);
     overflow: hidden;
     width: 50%;
 }

 #sidebanner .grid-sm {
     position: absolute;
     z-index: 1 !important;
     -webkit-transform: translate(20%, -55%);
     -ms-transform: translate(20%, -55%);
     transform: translate(20%, -55%);
     overflow: hidden;
     width: 45%;
     right: 0px !important;
 }

 #features .grid-sm img,
 #sidebanner .grid-sm img {
     width: 100%;
     max-width: 100%;
     height: 100%;
     object-fit: cover;
 }

 #features .grid-lg,
 #sidebanner .grid-lg {
     z-index: 1 !important;
     overflow: hidden;
     width: 100%;
 }

 #features .grid-lg img,
 #sidebanner .grid-lg img {
     max-width: 100%;
     width: 100%;
     height: 100%;
     object-fit: cover;
 }

 #features .icon {
     position: relative;
 }

 #features .icon::after {
     top: 0px;
     width: 35px;
     height: 35px;
     content: "";
     opacity: 0.3;
     border-radius: 50% !important;
     position: absolute;
     background-color: #357979;
     display: block;
     -webkit-transform: translate(35%, 25%);
     -ms-transform: translate(35%, 25%);
     transform: translate(35%, 25%);
     z-index: -1;
 }



 #sidebanner .img-wrap::before {
     z-index: -1 !important;
     position: absolute;
     content: "";
     width: 255px;
     height: 217px;
     background-image: url("/assets/images/dots-yellow.svg");
     background-repeat: no-repeat;
     background-size: contain;
     -webkit-transform: translate(-15%, -40%);
     -ms-transform: translate(-15%, -40%);
     transform: translate(-15%, -40%);
     left: 0px !important;
 }

 #features .img-wrap::before {
     position: absolute;
     content: "";
     width: 255px;
     height: 217px;
     background-image: url("/assets/images/dots-light.svg");
     background-repeat: no-repeat;
     background-size: contain;
     -webkit-transform: translate(25%, -25%);
     -ms-transform: translate(25%, -25%);
     transform: translate(25%, -25%);
     z-index: -1;
     right: 0px !important;
 }


 *,
 ::after,
 ::before {
     box-sizing: border-box;
 }

 #team .text-u a {
     padding-bottom: 2px;
     border-bottom: 2px solid #1b1a21;
 }

 #team .text-u a .bi {
     display: none;
     opacity: 0;
     transition: 0.2s ease-in;
 }

 #team .text-u a:hover .bi {
     opacity: 1;
     display: initial;
 }

 #team .text-u a:hover {
     border-bottom: 3px solid #1b1a21;
 }
</style>

<template>
    <!-- Navbar -->
    <BasicNavbar active="about" />
    <!-- */Navbar -->

    <!-- Header-Banner -->
    <header class="py-5 bg-color-primary text-white">
        <div class="container px-0 mt-5 py-5 my-5">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-xxl-8 preload-rs">
                    <div class="text-center my-5">
                        <h1 class="fw-bolder mb-3">
                            Our mission is to make highquality home and office
                            furnitures easily accesible for everyone.
                        </h1>
                        <p class="lead fw-normal text-white-50 mb-4">Trendy Timber Store was built on the idea that high quality,
                            functional and good looking and products should be available and affordable to everyone. Use our
                            platform to search and purchase high quality products.</p>
                        <LinkButton btn-theme="secondary-btn" btn-label="Start shopping Now" btn-url=""
                            btn-icon="arrow-right" outlined="false" class="btn-lg mt-3" />
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- ../Header-Banner -->

    <!-- Features-header -->
    <section class="py-5 my-5" id="features">
        <div class="container px-4 pb-5 mb-5 mt-3">
            <div class="row justify-content-between align-items-center">
                <!-- Container -->

                <!-- text-bx -->
                <div class="col-lg-5 ps-0 ms-0 preload-rs s-anim">
                    <div class="header">
                        <h1 class="h1 fw-bolder">Why Choose Us</h1>
                        <p class="fw-normal lead mb-3">At Trendy Timber, we guarantee top-notch service and satisfaction, ensuring an exceptional shopping experience for every customer.</p>
                    </div>
                    <div class="row gx-5">
                        <div class="col-6 col-md-6 mb-5 mb-lg-0 my-4">
                            <span class="icon h1 fw-bolder mb-3 d-block"><i class="bi bi-truck"></i>
                            </span>
                            <h2 class="h5 fw-bolder">Fast & Free Shipping</h2>
                            <p>Get your furniture delivered to your doorstep quickly and at no extra cost.</p>
                        </div>
                        <div class="col-6 col-md-6 mb-5 mb-lg-0 my-4">
                            <span class="icon h1 fw-bolder mb-3 d-block"><i class="bi bi-bag-check"></i>
                            </span>
                            <h2 class="h5 fw-bolder">Easy to Shop</h2>
                            <p>Browse and purchase furniture effortlessly with our user-friendly platform , With detailed product descriptions </p>
                        </div>
                        <div class="col-6 col-md-6 mb-5 mb-lg-0 my-4">
                            <span class="icon h1 fw-bolder mb-3 d-block"><i class="bi bi-headset"></i>
                            </span>
                            <h2 class="h5 fw-bolder">24/7 Customer Support</h2>
                            <p>Receive assistance anytime, day or night, with our round-the-clock customer support.</p>
                        </div>
                        <div class="col-6 col-md-6 mb-5 mb-lg-0 my-4">
                            <span class="icon h1 fw-bolder mb-3 d-block"><i class="bi bi-arrow-repeat"></i>
                            </span>
                            <h2 class="h5 fw-bolder">Hassle Free Returns</h2>
                            <p> Shop with confidence knowing that returns are easy and stress-free. </p>
                        </div>
                    </div>
                </div>

                <!-- img-bx -->
                <div class="col-lg-6 mt-5 mt-lg-0 preload-rs s-anim">
                    <div class="img-wrap">
                        <div class="img-grid grid-lg ">
                            <img src="/assets/images/image01.jpg" alt="Image" class="img-fluid">
                        </div>
                        <div class="img-grid grid-sm">
                            <img src="/assets/images/img-grid-6.jpg" alt="Image" class="img-fluid">
                        </div>
                    </div>
                </div>

                <!-- ..Container -->
            </div>
        </div>
    </section>
    <!-- ..Features-header -->


    <!-- Lg-Side-Img-Banner -->
    <section class="py-5 my-5" id="sidebanner">
        <div class="container px-5 py-5 my-5">
            <div class="row gx-5 align-items-center">
                <div class="col-lg-6 me-lg-5">
                    <div class="img-wrap">
                        <div class="img-grid grid-lg mx-auto preload-rs s-anim">
                            <img src="/assets/images/img-grid-1.jpg" alt="Image" class="img-fluid">
                        </div>
                        <div class="img-grid grid-sm mx-auto">
                            <img src="/assets/images/img-grid-2.jpg" alt="Image" class="img-fluid">
                        </div>
                    </div>
                </div>

                <div class="col-lg-5 mt-5 mt-lg-0 pt-5 pt-lg-0 preload-rs s-anim">
                    <h2 class="fw-bolder">Our Commitment to Sustainability</h2>
                    <p class="lead fw-normal text-muted mb-0">At Trendy Timber, we're not just passionate about furniture; we're committed to sustainability. We source our materials responsibly, prioritize eco-friendly manufacturing practices, and strive to minimize our environmental footprint at every step. By choosing Trendy Timber, you're not only investing in high-quality furniture but also supporting our efforts to create a more sustainable future for generations to come.</p>
                </div>
            </div>
        </div>
    </section>
    <!-- ../Lg-Side-Img-Banner -->


    <!-- Team-member-banner -->
    <br>
    <section class="mt-5 py-5 bg-light" id="team">
        <div class="container px-5 my-5 py-5">
            <div class="text-center">
                <h2 class="fw-bolder">Our Team</h2>
                <p class="lead fw-normal text-muted mb-5">Meet the dedicated individuals who bring Trendy Timber to life. From visionary leaders to talented designers and customer support specialists, our team is committed to providing you with the best shopping experience possible.</p>
            </div>
            <div class="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                <div class="col mb-5 mb-xl-0 preload-rs s-anim">
                    <div class="text-center">
                        <img class="img-fluid rounded-circle mb-4 px-4" src="/assets/images/person-1.png"
                            alt="Homello-img...">
                        <h5 class="fw-bolder">Ravina</h5>
                        <span class="d-block position mb-4 text-black-50">Co-Founder, Trendy Timber</span>
                        <p class="mb-0 fw-semibold text-u"><a href="#" class="more dark">View Profile <span
                                    class="bi bi-arrow-right ms-2"></span></a>
                        </p>
                    </div>
                </div>
                <div class="col mb-5 mb-xl-0 preload-rs s-anim">
                    <div class="text-center">
                        <img class="img-fluid rounded-circle mb-4 px-4" src="/assets/images/person_2.jpg"
                            alt="Homello-img...">
                        <h5 class="fw-bolder">Karina</h5>
                        <span class="d-block position mb-4 text-black-50">Co-Founder, Trendy Timber</span>
                        <p class="mb-0 fw-semibold text-u"><a href="#" class="more dark">View Profile <span
                                    class="bi bi-arrow-right ms-2"></span></a>
                        </p>
                    </div>
                </div>
                <div class="col mb-5 mx-xl-0 preload-rs s-anim">
                    <div class="text-center">
                        <img class="img-fluid rounded-circle mb-4 px-4" src="/assets/images/person_4.jpg"
                            alt="Homello-img...">
                        <h5 class="fw-bolder">Ranjeet</h5>
                        <span class="d-block position mb-4 text-black-50">Co-Founder, Trendy Timber</span>
                        <p class="mb-0 fw-semibold text-u"><a href="#" class="more dark">View Profile <span
                                    class="bi bi-arrow-right ms-2"></span></a>
                        </p>
                    </div>
                </div>

                <div class="col mb-5 mb-xl-0 preload-rs s-anim">
                    <div class="text-center">
                        <img class="img-fluid rounded-circle mb-4 px-4" src="/assets/images/person_3.jpg"
                            alt="Homello-img...">
                        <h5 class="fw-bolder">Lakshman</h5>
                        <span class="d-block position mb-4 text-black-50">Co-Founder, Trendy Timber</span>
                        <p class="mb-0 fw-semibold text-u"><a href="#" class="more dark">View Profile <span
                                    class="bi bi-arrow-right ms-2"></span></a>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- Team-member-banner -->

    <!-- Customers-Testimonials -->
    <CustomersReviewsBanner class="preload-rs s-anim" />
    <!-- */Customers-diials -->



    <!-- Newsletter-banner -->
    <NewsletterBanner />
    <!-- */Newsletter-banner -->



    <!-- Footer -->
    <GlobalFooter data="none" />
    <!-- */Footer -->

    <!---->
</template>

<script>
export default {
    name: "AboutusView",
    data() {
        return {}
    },
    methods: {
        setPageTitle() {
            document.title = "About Us | Trendy Timber";
        },
    },
    beforeMount() {
        this.setPageTitle()
    }
}
</script>