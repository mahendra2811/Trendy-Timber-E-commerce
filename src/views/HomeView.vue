<style scoped>
@media only screen and (max-width: 1015px) {
  .main .mainbanner {
    margin-top: 72px !important;
  }
}

.main .mainbanner {
  margin-top: 78px;
  background: #265a5a !important;
}

.mainbanner .banner-image {
  position: relative;
}

.mainbanner .main-banner-img {
  top: -100px;
  left: -50px;
  width: auto;
  position: absolute;
}

@media only screen and (max-width:1395px) {
  .mainbanner .main-banner-img {
    top: 0px;
    margin-right: auto !important;
    margin-left: auto !important;
    max-width: 100%;
    height: auto;
    position: initial !important;
  }
}


.icon-img {
  max-width: 30%;
  height: auto;
}

.carousel-btn {
  max-width: 45px;
}

.carousel-btn .btn {
  width: 40px;
  height: 40px;
  border-radius: 50% !important;
  font-size: 20px;
}

.newproducts-banner .carousel-item {
  padding-left: 50px;
  padding-right: 50px;
}

.banner-nav .banner-nav-item {
  padding: 0px 15px 0px 15px;
}

.banner-nav .banner-nav-item.active {
  opacity: 0.6;
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
</style>


<template>
  <!-- Navbar -->
  <BasicNavbar active="home" />
  <!-- */Navbar -->

  <!-- Main  -->
  <main class="main">

    <!-- Main-Banner -->
    <div class="mainbanner mb-0 py-5 my-5 d-flex align-items-center">
      <div class="container py-5 my-5">
        <div class="bannercontent text-white row row-cols-1 row-cols-lg-2 align-items-stretch gap-5">

          <div class="content col-11 col-lg-5 px-lg-0">
            <div class="preload-r w-100">
              <h1 class="display-3 fw-semibold">Modern & Unique Home Furnitures.</h1>
              <p class="lead opacity-75">Fill your home with furniture that brings you
                comfort as soon as you walk in the door..</p>
              <LinkButton btn-theme="secondary-btn" btn-label="Explore Now" btn-url="" btn-icon="arrow-right"
                outlined="false" class="btn-lg mt-3" />
            </div>
          </div>

          <!-- Banner-Image -->
          <div class="banner-image col-11 col-lg-6 px-lg-0 preload-l">
            <img src="/assets/images/couch.png" class="main-banner-img mx-auto" alt="">
          </div>

        </div>
      </div>

    </div>
    <!-- */Main-Banner -->

    <!-- Double - Images-Banner -->
    <div class="middle-image-banner bg-color-primary">
      <br><br>
      <div class="container bg-color-secondary p-4">
        <div class="row row-cols-1 row-cols-lg-2 align-items-stretch">
          <div class="col mx-0">
            <MediumImageBanner class="w-100 mx-0 preload-rs s-anim" banner-title="Apparels Collection"
              banner-description="Homello Furniture" banner-image="/assets/images/sli-h1.webp" />
          </div>
          <div class="col mx-0">
            <MediumImageBanner class="w-100 mx-0 preload-rs s-anim" banner-title="Chair Collection"
              banner-description="Homello Furniture" banner-image="/assets/images/slide-2.png" />
          </div>
        </div>
      </div>
    </div>
    <!-- */Double - Images-Banner -->

    <!-- PositivePoints-Banner -->
    <div class="positive-points bg-color-secondary">
      <div class="container px-4 py-5">
        <div class="row g-4 py-2 row-cols-1 row-cols-lg-4">

          <div class="feature preload-rs s-anim col p-5 color-primary" align="center">
            <img class="icon-img" src="/assets/images/icon-1-delivery.png" alt="" srcset="">
            <p class="fs-5 mt-2 fw-semibold">FREE DELIVERY</p>
            <span class="fw-semibold color-black">Free delivery for all products</span>
          </div>
          <div class="feature preload-rs s-anim col p-5 color-primary" align="center">
            <img class="icon-img" src="/assets/images/icon-1-save-the-world.png" alt="" srcset="">
            <p class="fs-5 mt-2 fw-semibold">ECOFRIENDLY</p>
            <span class="fw-semibold color-black">Ecofriendly and premium furnitures</span>
          </div>
          <div class="feature preload-rs s-anim col p-5 color-primary" align="center">
            <img class="icon-img" src="/assets/images/icon-1-return-on-investment.png" alt="" srcset="">
            <p class="fs-5 mt-2 fw-semibold">MONEY RETURN</p>
            <span class="fw-semibold color-black">Money return for all registred clients</span>
          </div>

          <div class="feature preload-rs s-anim col p-5 color-primary" align="center">
            <img class="icon-img" src="/assets/images/icon-1-support.png" alt="" srcset="">
            <p class="fs-5 mt-2 fw-semibold">SUPPORT 24/7</p>
            <span class="fw-semibold color-black">Available customer support</span>
          </div>
        </div>
        <span class="d-block pb-2 border-1 border-secondary opacity-25 border-bottom col-11 mx-auto"></span>
        <div class="col-lg-9 mx-auto mt-5" align="center">
          <p class="display-5 fw-semibold color-primary preload">
            There's something amazing about our environmentally friendly materials,
            and it's not just how amazing they look.</p>
        </div>
      </div>
    </div>
    <!-- */PositivePoints-Banner -->


    <!-- New-Products Banner-display -->
    <div class="newproducts-banner my-5 py-5">
      <div class="container px-4 py-5 my-5">
        <div class="row row-cols-1 row-cols-lg-2 align-items-center">

          <!-- Banner-Description -->
          <div class="banner-desc col-12 col-lg-4 ps-lg-0 mb-lg-0 mb-5">
            <h3 class="fs-2 fw-semibold">New in our store</h3>
            <p class="fs-4">Discover some of our newest premium furnitures, at the cheapest rates possible </p>

            <!-- LinkButton -->
            <LinkButton btn-theme="secondary-btn" btn-label="Discover Now" btn-url="" btn-icon="arrow-right"
              outlined="false" class="btn-lg my-3" />
          </div>
          <!-- */Banner-Description -->

          <!-- Products-Box -->
          <div class="products-bx col-12 col-lg-8">
            <div id="newProductsCarousel" class="carousel slide container" data-bs-ride="carousel">

              <!-- Carousel-Inner -->
              <div class="carousel-inner w-100">
                <!-- ProductItem-Carousel -->
                <div class="carousel-item active">
                  <div class="products-list row row-cols-1 row-cols-lg-3 d-flex justify-content align-items-stretch">

                    <ProductItemCard product-title="Ergonomic Chair" product-category="Homello" product-price="45.87"
                      product-discount="" product-image="/assets/images/product-3.png" class="col-11 col-lg-4 d-block" />
                    <ProductItemCard product-title="Nordic Chair" product-category="Homello" product-price="67.00"
                      product-discount="" product-image="/assets/images/product-1.png" class="col-11 col-lg-4 d-block" />
                    <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello" product-price="73.23"
                      product-discount="" product-image="/assets/images/product-2.png" class="col-11 col-lg-4 d-block" />
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="products-list row row-cols-1 row-cols-lg-3 d-flex justify-content align-items-stretch">
                    <ProductItemCard product-title="Ergonomic Chair" product-category="Homello" product-price="45.87"
                      product-discount="" product-image="/assets/images/product-3.png" class="col-11 col-lg-4 d-block" />
                    <ProductItemCard product-title="Nordic Chair" product-category="Homello" product-price="67.00"
                      product-discount="" product-image="/assets/images/product-1.png" class="col-11 col-lg-4 d-block" />
                    <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello" product-price="73.23"
                      product-discount="" product-image="/assets/images/product-2.png" class="col-11 col-lg-4 d-block" />
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="products-list row row-cols-1 row-cols-lg-3 d-flex justify-content align-items-stretch">
                    <ProductItemCard product-title="Ergonomic Chair" product-category="Homello" product-price="45.87"
                      product-discount="" product-image="/assets/images/product-3.png" class="col-11 col-lg-4 d-block" />
                    <ProductItemCard product-title="Nordic Chair" product-category="Homello" product-price="67.00"
                      product-discount="" product-image="/assets/images/product-1.png" class="col-11 col-lg-4 d-block" />
                    <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello" product-price="73.23"
                      product-discount="" product-image="/assets/images/product-2.png" class="col-11 col-lg-4 d-block" />
                  </div>
                </div>

              </div>
              <!-- ../Carousel-Inner -->

              <span class="carousel-btn carousel-control-prev" type="button" data-bs-target="#newProductsCarousel"
                data-bs-slide="prev">
                <span class="btn text-white bg-success d-flex justify-content-center align-items-center">
                  <span class="bi bi-arrow-left" aria-hidden="true"></span>
                </span>
              </span>
              <span class="carousel-btn carousel-control-next" type="button" data-bs-target="#newProductsCarousel"
                data-bs-slide="next">
                <span class="btn text-white bg-success d-flex justify-content-center align-items-center">
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
        <div class="bx-header border-top py-4 mb-4 d-flex justify-content-between flex-wrap align-items-center">
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
            class="col-6 col-lg-3 mx-auto preload-rs s-anim" />
          <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello" product-price="73.23"
            product-discount="" product-image="/assets/images/product-5.png"
            class="col-6 col-lg-3  mx-auto preload-rs s-anim" />
          <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello" product-price="73.23"
            product-discount="" product-image="/assets/images/product-6.png"
            class="col-6 col-lg-3  mx-auto preload-rs s-anim" />
          <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello" product-price="73.23"
            product-discount="" product-image="/assets/images/product-7.png"
            class="col-6 col-lg-3  mx-auto preload-rs s-anim" />
        </div>
      </div>
    </div>
    <!-- */Trending-Product-List -->


    <!-- addBanner -->
    <div class="addBanner my-5 py-5">
      <div class="container">
        <MediumImageBanner banner-title="50% OFF Interior Collection"
          banner-description="Free shipping over 115$ for international orders" banner-image="/assets/images/sli-h1.webp"
          class="py-5 mx-auto preload-rs s-anim" />
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
            class="col-6 col-lg-3  mx-auto preload-rs s-anim" />
          <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello" product-price="73.23"
            product-discount="" product-image="/assets/images/product-9.png"
            class="col-6 col-lg-3  mx-auto preload-rs s-anim" />
          <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello" product-price="73.23"
            product-discount="" product-image="/assets/images/product-10.png"
            class="col-6 col-lg-3  mx-auto preload-rs s-anim" />
          <ProductItemCard product-title="Kruzo Aero Chair" product-category="Homello" product-price="73.23"
            product-discount="" product-image="/assets/images/product-11.png"
            class="col-6 col-lg-3  mx-auto preload-rs s-anim" />
        </div>
      </div>
    </div>
    <!-- */Latest-arrivals-Product-List -->

    <!-- Customers-Testimonials -->
    <CustomersReviewsBanner class="preload-rs s-anim" />
    <!-- */Customers-diials -->


    <!-- Blog-Articles -->
    <BlogArticlesBanner />
    <!-- */Blog-Articles -->

    <!-- Newsletter-banner -->
    <NewsletterBanner />
    <!-- */Newsletter-banner -->



    <!-- Footer -->
    <GlobalFooter data="none" />
    <!-- */Footer -->
  </main>
  <!-- */Main  -->
</template>

<script>
import LinkButton from '@/components/btnComponents/GlobalButtons/LinkButton.vue';
import BasicNavbar from '@/components/headerComponents/BasicNavbar.vue';
import CustomersReviewsBanner from '@/components/bodyComponents/CustomersReviewsBanner.vue';
import MediumImageBanner from '@/components/bodyComponents/MediumImageBanner.vue';
import ProductItemCard from '@/components/productsComponent/ProductItemCard.vue';
import BlogArticlesBanner from '@/components/bodyComponents/BlogArticlesBanner.vue';
import NewsletterBanner from '@/components/footerComponents/NewsletterBanner.vue';
import GlobalFooter from '@/components/footerComponents/GlobalFooter.vue';

export default {
  name: "HomeView",
  data() {
    return {
    }
  },
  methods: {
    setPageTitle() {
      document.title = "Homello | Home";
    }
  },
  components: {
    BasicNavbar,
    LinkButton,
    MediumImageBanner,
    ProductItemCard,
    CustomersReviewsBanner,
    BlogArticlesBanner,
    NewsletterBanner,
    GlobalFooter
  },
  beforeMount() {
    this.setPageTitle()
  }
}
</script>