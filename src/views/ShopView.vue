<script setup>
import LinkButton from '@/components/btnComponents/GlobalButtons/LinkButton.vue';
import GlobalNavbar from "@/components/headerComponents/GlobalNavbar.vue";
import MediumImageBanner from '@/components/bodyComponents/MediumImageBanner.vue';
import ProductItemCard from '@/components/productsComponent/ProductItemCard.vue';
import BlogArticlesBanner from '@/components/bodyComponents/BlogArticlesBanner.vue';
import NewsletterBanner from '@/components/footerComponents/NewsletterBanner.vue';
import GlobalFooter from '@/components/footerComponents/GlobalFooter.vue';
</script>

<style scoped>
.navbar,
.mainbanner {
    background-color: #f1f1f1 !important;
}

#mainbanner .carousel-indicators .btn-indicator {
    width: 15px;
    height: 15px;
    border-radius: 50% !important;
    margin: 8px;
    background-color: #265a5a;
}


#mainbanner .carousel-img .img {
    max-width: 100%;
    width: 100%;
    height: auto;
}

.mainbanner .carousel-control {
    width: auto;
    opacity: 1.0 !important;
}

.mainbanner .carousel-control .bi {
    color: #0c0c0c !important;
    font-size: 40px;
    display: block;
}

.carousel-item .btn-lg,
.btnLight {
    border: 0px solid transparent !important;
    font-size: 18px !important;
}

.mainbanner .carousel-img {
    position: relative;
}

.mainbanner .carousel-img img {
    z-index: 2;
}

.mainbanner .carousel-img::after {
    top: 0;
    left: 0;
    width: 400px !important;
    height: 400px !important;
    content: ".";
    opacity: 0.2;
    border-radius: 50% !important;
    position: absolute;
    background-color: #357979;
    display: block;
    -webkit-transform: translate(15%, 38%);
    -ms-transform: translate(15%, 38%);
    transform: translate(15%, 38%);
    z-index: 1;
}

.newproducts-banner .carousel-item {
    padding-left: 40px;
    padding-right: 40px;
}

.newproducts-banner .carousel-control-prev,
.newproducts-banner .carousel-control-next {
    max-width: 40px !important;
}

.newproducts-banner .carousel-btn .btn {
    width: 40px;
    height: 40px;
    border-radius: 50% !important;
    font-size: 20px;
}

.newproducts-banner .carousel-control-prev .btn {
    position: absolute !important;
    left: -19% !important;
}

.newproducts-banner .carousel-control-next .btn {
    position: absolute !important;
    right: -19% !important;
}

/* Products-carousel */
@media only screen and (max-width:992px) {
    .products-bx .products-list div {
        width: 50% !important;
        margin-left: auto;
        margin-right: auto;
    }

    .products-bx .products-list div:last-child {
        display: none !important;
    }
}

.banner-nav .banner-nav-item {
    padding: 0px 15px 0px 15px;
}

.banner-nav .banner-nav-item.active {
    opacity: 0.6;
}
</style>

<template>
    <!-- Header -->
    <GlobalNavbar />
    <!-- ..Header -->

    <!-- Main -->
    <main>

        <!-- Main-Lg-Banner -->
        <div class="mainbanner">
            <div id="mainbanner" class="carousel slide mb-6 pointer-event" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#mainbanner" data-bs-slide-to="0" class="active btn-indicator"
                        aria-label="Slide 1" aria-current="true"></button>

                    <button type="button" data-bs-target="#mainbanner" data-bs-slide-to="1" aria-label="Slide 2"
                        class="btn-indicator"></button>

                    <button type="button" data-bs-target="#mainbanner" data-bs-slide-to="2" aria-label="Slide 3"
                        class="btn-indicator"></button>
                </div>
                <div class="carousel-inner">

                    <div class="carousel-item active w-100">
                        <div
                            class="container col-11 col-lg-9 carousel-content d-flex justify-content-evenly align-items-stretch">
                            <div class="carousel-textbx preload-r s-anim text-black text-start d-flex flex-column align-items-start
                                justify-content-center col-lg-6 gap-4">
                                <h1 class="display-4 fw-semibold">Eco Solar Prowered Room Lamp</h1>

                                <!-- LinkButton -->
                                <LinkButton btn-theme="dark-btn" btn-label="Discover Product Now" btn-url=""
                                    btn-icon="arrow-right" outlined="true" class="btn-lg fw-semibold ps-0" />

                            </div>
                            <div class="carousel-img preload-rs s-anim col-lg-6 d-flex flex-column align-items-start
                                justify-content-center">
                                <img src="/assets/images/product-10.png" class="img img-fluid" alt="" />
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item w-100">

                        <div
                            class="container col-11 col-lg-9 carousel-content d-flex justify-content-evenly align-items-stretch">
                            <div class="carousel-textbx preload-r s-anim text-black text-start d-flex flex-column align-items-start
                                justify-content-center col-lg-6 gap-4">
                                <h1 class="display-4 fw-semibold">Chanel Chair High Quality Wood Made</h1>

                                <!-- LinkButton -->
                                <LinkButton btn-theme="dark-btn" btn-label="Discover Product Now" btn-url=""
                                    btn-icon="arrow-right" outlined="true" class="btn-lg fw-semibold ps-0" />

                            </div>
                            <div class="carousel-img preload-rs s-anim col-lg-6 d-flex flex-column align-items-start
                                justify-content-center">
                                <img src="/assets/images/product-7.png" class="img" alt="" />
                            </div>
                        </div>


                    </div>

                    <div class="carousel-item w-100">

                        <div
                            class="container col-11 col-lg-9 carousel-content d-flex justify-content-evenly align-items-stretch">
                            <div class="carousel-textbx preload-r s-anim text-black text-start d-flex flex-column align-items-start
                                justify-content-center col-lg-6 gap-4">
                                <h1 class="display-4 fw-semibold">Mordern Minimalist Jaguar WallFrame</h1>

                                <!-- LinkButton -->
                                <LinkButton btn-theme="dark-btn" btn-label="Discover Product Now" btn-url=""
                                    btn-icon="arrow-right" outlined="true" class="btn-lg fw-semibold ps-0" />

                            </div>
                            <div class="carousel-img preload-rs s-anim col-lg-6 d-flex flex-column align-items-start
                                justify-content-center">
                                <img src="/assets/images/product-9.png" class="img" alt="" />
                            </div>
                        </div>


                    </div>
                </div>

                <button class="carousel-control carousel-control-prev" type="button" data-bs-target="#mainbanner"
                    data-bs-slide="prev">
                    <span class="bi bi-chevron-left" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control carousel-control-next" type="button" data-bs-target="#mainbanner"
                    data-bs-slide="next">
                    <span class="bi bi-chevron-right" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <!-- ..Main-Lg-Banner -->

        <!-- Double-Product-Image-Banner -->
        <!-- Double - Images-Banner -->
        <div class="middle-image-banner">
            <div class="container p-4">
                <div class="row row-cols-1 row-cols-lg-2 align-items-stretch">
                    <div class="col mx-0 preload-rs ">
                        <MediumImageBanner class="w-100 mx-0" banner-title="Apparels Collection"
                            banner-description="Homello Furniture" banner-image="/assets/images/sli-h1.webp" />
                    </div>
                    <div class="col mx-0 preload-rs ">
                        <MediumImageBanner class="w-100 mx-0" banner-title="Chair Collection"
                            banner-description="Homello Furniture" banner-image="/assets/images/slide-3.png" />
                    </div>
                </div>
            </div>
        </div>
        <!-- */Double - Images-Banner -->
        <!-- ...Double-Product-Image-Banner -->


        <!-- New-Products Banner-display -->
        <div class="newproducts-banner my-4 py-4">
            <div class="container px-4 py-5 my-5">
                <div class="row row-cols-1 row-cols-lg-2 align-items-center">

                    <!-- Banner-Description -->
                    <div class="banner-desc col-12 col-lg-4 ps-lg-0 mb-lg-0 mb-5">
                        <h3 class="fs-2 fw-semibold">New in our store</h3>
                        <p class="fs-4">Discover some of our newest premium furnitures, at the cheapest rates possible </p>

                        <!-- LinkButton -->
                        <LinkButton btn-theme="dark-btn" btn-label="Discover Product Now" btn-url="" btn-icon="arrow-right"
                            outlined="true" class="btn-lg btnLight fw-semibold ps-0" />
                    </div>
                    <!-- */Banner-Description -->

                    <!-- Products-Box -->
                    <div class="products-bx col-12 col-lg-8 px-0">
                        <div id="newProductsCarousel" class="carousel slide container mx-0 p-0" data-bs-ride="carousel">

                            <!-- Carousel-Inner -->
                            <div class="carousel-inner mx-0 w-100">
                                <!-- ProductItem-Carousel -->
                                <div class="carousel-item active">
                                    <div
                                        class="products-list row row-cols-1 row-cols-lg-3 d-flex justify-content  align-items-stretch">

                                        <ProductItemCard product-title="Ergonomic Chair" product-category="Homello"
                                            product-price="45.87" product-discount=""
                                            product-image="/assets/images/product-3.png" class="col-11 col-lg-4 d-block" />
                                        <ProductItemCard product-title="Nordic Chair" product-category="Homello"
                                            product-price="67.00" product-discount=""
                                            product-image="/assets/images/product-1.png" class="col-11 col-lg-4 d-block" />
                                        <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello"
                                            product-price="73.23" product-discount=""
                                            product-image="/assets/images/product-2.png" class="col-11 col-lg-4 d-block" />
                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <div
                                        class="products-list row row-cols-1 row-cols-lg-3 d-flex justify-content align-items-stretch">
                                        <ProductItemCard product-title="Ergonomic Chair" product-category="Homello"
                                            product-price="45.87" product-discount=""
                                            product-image="/assets/images/product-3.png" class="col-11 col-lg-4 d-block" />
                                        <ProductItemCard product-title="Nordic Chair" product-category="Homello"
                                            product-price="67.00" product-discount=""
                                            product-image="/assets/images/product-1.png" class="col-11 col-lg-4 d-block" />
                                        <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello"
                                            product-price="73.23" product-discount=""
                                            product-image="/assets/images/product-2.png" class="col-11 col-lg-4 d-block" />
                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <div
                                        class="products-list row row-cols-1 row-cols-lg-3 d-flex justify-content align-items-stretch">
                                        <ProductItemCard product-title="Ergonomic Chair" product-category="Homello"
                                            product-price="45.87" product-discount=""
                                            product-image="/assets/images/product-3.png" class="col-11 col-lg-4 d-block" />
                                        <ProductItemCard product-title="Nordic Chair" product-category="Homello"
                                            product-price="67.00" product-discount=""
                                            product-image="/assets/images/product-1.png" class="col-11 col-lg-4 d-block" />
                                        <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello"
                                            product-price="73.23" product-discount=""
                                            product-image="/assets/images/product-2.png" class="col-11 col-lg-4 d-block" />
                                    </div>
                                </div>

                            </div>
                            <!-- ../Carousel-Inner -->

                            <span class="carousel-btn opacity-100 carousel-control-prev" type="button"
                                data-bs-target="#newProductsCarousel" data-bs-slide="prev">
                                <span
                                    class="btn text-white bg-color-primary d-flex justify-content-center align-items-center">
                                    <span class="bi bi-arrow-left" aria-hidden="true"></span>
                                </span>
                            </span>
                            <span class="carousel-btn opacity-100 carousel-control-next" type="button"
                                data-bs-target="#newProductsCarousel" data-bs-slide="next">
                                <span
                                    class="btn text-white bg-color-primary d-flex justify-content-center align-items-center">
                                    <span class="bi bi-arrow-right" aria-hidden="true"></span>
                                </span>
                            </span>

                        </div>
                    </div>
                    <!-- */Products-Box -->


                </div>
            </div>
        </div>
        <!-- ...endProductSlider -->


        <!-- Trending Product List -->
        <div class="tranding-products-bx">
            <div class="container">
                <div
                    class="bx-header border-top py-4 mb-4 d-flex justify-content-between flex-wrap align-items-center preload ">
                    <span class="fs-2 fw-semibold">Best selling</span>
                    <span
                        class="banner-nav fs-6 fw-medium opacity-80 d-flex justify-content-evenly mt-3 mt-lg-0 align-items-center flex-wrap">
                        <a href="" class="link-primary"><span class="banner-nav-item active">All Products</span></a>
                        <a href="" class="link-primary"><span class="banner-nav-item">Accessories</span></a>
                        <a href="" class="link-primary"><span class="banner-nav-item">Chair</span></a>
                        <a href="" class="link-primary"><span class="banner-nav-item">Decoration</span></a>
                        <a href="" class="link-primary"><span class="banner-nav-item">Furniture</span></a>
                        <a href="" class="link-primary"><span class="banner-nav-item">Tables</span></a>
                    </span>
                </div>
                <div class="content row row-cols-1 row-cols-lg-4 align-items-stretch">
                    <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello" product-price="73.23"
                        product-discount="" product-image="/assets/images/product-4.png"
                        class="col-6 col-lg-3 preload-rs mx-auto" />
                    <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello" product-price="73.23"
                        product-discount="" product-image="/assets/images/product-5.png"
                        class="col-6 col-lg-3 preload-rs mx-auto" />
                    <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello" product-price="73.23"
                        product-discount="" product-image="/assets/images/product-6.png"
                        class="col-6 col-lg-3 preload-rs mx-auto" />
                    <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello" product-price="73.23"
                        product-discount="" product-image="/assets/images/product-7.png"
                        class="col-6 col-lg-3 preload-rs mx-auto" />
                </div>
            </div>
        </div>
        <!-- */Trending-Product-List -->


        <!-- addBanner -->
        <div class="addBanner my-5 py-5">
            <div class="container">
                <MediumImageBanner banner-title="50% OFF Interior Collection"
                    banner-description="Free shipping over 115$ for international orders"
                    banner-image="/assets/images/sli-h1.webp" class="py-5 mx-auto preload-rs" />
            </div>
        </div>
        <!-- */addBanner -->



        <!-- Latest arrivals Product List -->
        <div class="tranding-products-bx">
            <div class="container">
                <div class="bx-header border-top py-4 mb-4 d-flex justify-content-between align-items-center">
                    <span class="fs-2 fw-semibold">Latest Arrivals</span>
                </div>
                <div class="content row row-cols-1 row-cols-lg-4 align-items-stretch">
                    <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello" product-price="73.23"
                        product-discount="" product-image="/assets/images/product-8.png"
                        class="col-6 col-lg-3 preload-rs mx-auto " />
                    <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello" product-price="73.23"
                        product-discount="" product-image="/assets/images/product-9.png"
                        class="col-6 col-lg-3 preload-rs mx-auto " />
                    <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello" product-price="73.23"
                        product-discount="" product-image="/assets/images/product-10.png"
                        class="col-6 col-lg-3 preload-rs mx-auto " />
                    <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello" product-price="73.23"
                        product-discount="" product-image="/assets/images/product-11.png"
                        class="col-6 col-lg-3 preload-rs mx-auto " />
                </div>
            </div>
        </div>
        <!-- */Latest-arrivals-Product-List -->


        <div class="mt-5 pt-5"></div>


        <!-- Blog-Articles -->
        <BlogArticlesBanner class="preload" />
        <!-- */Blog-Articles -->



        <!-- Footer -->
        <GlobalFooter data="none" />
        <!-- */Footer -->

    </main>
    <!-- ..Main -->

    <!-- ... -->
</template>

<script>
export default {
    name: "ShopView",
    methods: {
        setPageTitle() {
            document.title = "Homello | Shop";
        }
    },
    beforeMount() {
        this.setPageTitle()
    }
}
</script>