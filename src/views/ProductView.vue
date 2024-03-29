<script setup>
import LinkButton from '@/components/btnComponents/GlobalButtons/LinkButton.vue';
import GlobalNavbar from "@/components/headerComponents/GlobalNavbar.vue";
import ProductItemCard from '@/components/productsComponent/ProductItemCard.vue';
import CustomersReviewsBanner from '@/components/bodyComponents/CustomersReviewsBanner.vue';
import NewsletterBanner from '@/components/footerComponents/NewsletterBanner.vue';
import GlobalFooter from '@/components/footerComponents/GlobalFooter.vue';
</script>

<style scoped>
.navbar,
.mainbanner {
    background-color: #f1f1f1 !important;
}

.w-80 {
    width: 80%;
}

.product-img img {
    width: 100%;
    max-width: 100%;
    height: auto;
    scale: initial;
    transition: 0.4s ease-in-out;
    object-fit: cover;
}

.product-img {
    position: relative;
}

.product-img .card-img-top:hover {
    cursor: pointer;
    scale: 1.2;
    z-index: 8 !important;
}

.img-cards .img-card {
    background-color: #f1f0f0;
    overflow: hidden;
    position: relative;
}

.img-cards .img-card:hover {
    cursor: pointer;
    background-color: #dedede;
}

.img-cards .img-card:hover img {
    cursor: pointer;
    scale: 1.2;
    z-index: 8 !important;
}
</style>

<template>
    <!--   Header -->
    <GlobalNavbar />
    <!-- ..Header -->

    <!--  MainBanner -->
    <div class="mainbanner">
        <section class="py-3">
            <div class="container px-4 px-lg-5 my-5">
                <div class="row gx-4 gx-lg-5 align-items-stretch">
                    <div class="col-md-6 product-img">
                        <img class="card-img-top w-100 mb-5 mb-md-0" src="/assets/images/product-3.png" alt="@.">
                        <div class="img-cards mt-4 d-flex justify-content-evenly align-items-stretch gap-3">
                            <div class="img-card p-3 border col-3"><img src="/assets/images/product-3.png" alt="" /></div>
                            <div class="img-card p-3 border col-3"><img src="/assets/images/product-3.png" alt="" /></div>
                            <div class="img-card p-3 border col-3"><img src="/assets/images/product-3.png" alt="" /></div>
                            <div class="img-card p-3 border col-3"><img src="/assets/images/product-3.png" alt="" /></div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-5 mt-lg-0">
                        <div class="small mb-1 opacity-75">CATEGORY</div>
                        <h1 class="display-5 fw-bolder">Product Name</h1>
                        <p class="lead fw-normal mt-4 mb-3 opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                            Praesentium.
                            Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis deftus delectus
                            ipsam minima ea iste laborum vero?</p>

                        <div class="fs-1 mb-5 d-flex gap-1 flex-column align-items-start">
                            <span class="fw-bold">$45.00</span>
                            <span class="fs-6 fw-semibold d-block opacity-75">regular price <span
                                    class="text-decoration-line-through fw-bold">$40.00</span></span>
                        </div>

                        <div class="d-flex my-3 gap-2 prod-link fw-normal align-items-center">
                            <!-- Label -->
                            <span class="label text-success"><span class="bi bi-box2"></span></span>
                            <!-- Link -->
                            <span class="link fw-semibold small ms-1"><a href="" class="">
                                    <span class="text-black"> IN STOCK, ORDER IT NOW ONLINE <br>
                                        <span class="text-decoration-underline opacity-50 small-xl">WITH FAST
                                            DELIVERY</span></span></a></span>
                        </div>

                        <div class="d-flex my-3 gap-2 prod-link fw-normal  fw-normal align-items-center">
                            <!-- Label -->
                            <span class="label"><span class="bi bi-star text-danger"></span></span>
                            <!-- Link -->
                            <span class="link fw-semibold opacity-75 small"><a href="" class="">
                                    <span class="text-danger">4.8 (20)</span>
                                    <span class="text-decoration-underline text-black"> WRITE A REVIEW</span></a></span>
                        </div>

                        <div class="d-flex my-3 gap-2 small prod-link fw-normal  fw-normal align-items-center">
                            <!-- Label -->
                            <span class="label"><span class="bi bi-heart"></span></span>
                            <!-- Link -->
                            <span class="link fw-semibold"><a href="" class="text-black-50">ADD TO WISHLIST</a></span>
                        </div>

                        <div class="d-flex mt-5">
                            <input class="form-control text-center me-3 border border-success shadow-none"
                                id="inputQuantity" type="num" value="1" style="max-width: 3rem">

                            <!-- LinkButton -->
                            <LinkButton btn-theme="primary-btn" btn-label="Add to Cart" btn-url="" btn-icon="cart"
                                outlined="false" class="btn-lg fw-semibold w-50" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>
    <!-- ..MainBanner -->


    <!-- Related-Products -->
    <div class="tranding-products-bx py-4 my-4">
        <div class="container my-4 py-4">
            <div class="bx-header border-top py-4 mb-4 d-flex justify-content-between flex-wrap align-items-center">
                <span class="fs-2 fw-bold">Related Products</span>
                <span
                    class="banner-nav fs-6 fw-medium opacity-80 d-flex justify-content-evenly mt-3 mt-lg-0 align-items-center flex-wrap">
                </span>
            </div>
            <div class="content row row-cols-2 row-cols-lg-5 d-flex justify-content-between align-items-stretch">
                <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello" product-price="73.23"
                    product-discount="" product-image="/assets/images/product-4.png" class="col-6 col-lg-2 mx-lg-0 mx-0" />
                <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello" product-price="73.23"
                    product-discount="" product-image="/assets/images/product-5.png" class="col-6 col-lg-2 mx-lg-0 mx-0" />
                <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello" product-price="73.23"
                    product-discount="" product-image="/assets/images/product-6.png" class="col-6 col-lg-2 mx-lg-0 mx-0" />
                <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello" product-price="73.23"
                    product-discount="" product-image="/assets/images/product-7.png" class="col-6 col-lg-2 mx-lg-0 mx-0" />
                <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello" product-price="73.23"
                    product-discount="" product-image="/assets/images/product-5.png" class="col-6 col-lg-2 mx-lg-0 mx-0" />
            </div>
        </div>
    </div>
    <!-- ...Related-products -->

    <!-- Customers-Testimonials -->
    <CustomersReviewsBanner class="preload-rs s-anim" />
    <!-- */Customers-diials -->

    <!-- Related-Products -->
    <div class="tranding-products-bx py-4 my-4">
        <div class="container my-4 py-4">
            <div class="bx-header border-top py-4 mb-4 d-flex justify-content-between flex-wrap align-items-center">
                <span class="fs-2 fw-bold">Popular in shop</span>
                <span
                    class="banner-nav fs-6 fw-medium opacity-80 d-flex justify-content-evenly mt-3 mt-lg-0 align-items-center flex-wrap">
                </span>
            </div>
            <div class="content row row-cols-2 row-cols-lg-5 d-flex justify-content-between align-items-stretch">
                <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello" product-price="73.23"
                    product-discount="" product-image="/assets/images/product-4.png" class="col-6 col-lg-2 mx-lg-0 mx-0" />
                <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello" product-price="73.23"
                    product-discount="" product-image="/assets/images/product-5.png" class="col-6 col-lg-2 mx-lg-0 mx-0" />
                <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello" product-price="73.23"
                    product-discount="" product-image="/assets/images/product-6.png" class="col-6 col-lg-2 mx-lg-0 mx-0" />
                <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello" product-price="73.23"
                    product-discount="" product-image="/assets/images/product-7.png" class="col-6 col-lg-2 mx-lg-0 mx-0" />
                <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello" product-price="73.23"
                    product-discount="" product-image="/assets/images/product-5.png" class="col-6 col-lg-2 mx-lg-0 mx-0" />
            </div>
        </div>
    </div>
    <!-- ...Related-products -->

    <!-- Newsletter-banner -->
    <NewsletterBanner />
    <!-- */Newsletter-banner -->



    <!-- Footer -->
    <GlobalFooter data="none" />
    <!-- */Footer -->


    <!--  -->
</template>


<script>
export default {
    name: "ProductView",
    methods: {
        setPageTitle() {
            document.title = "Homello | Product Name";
        }
    },
    beforeMount() {
        this.setPageTitle()
    }
}
</script>