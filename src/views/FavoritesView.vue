<script setup>
// import_required_components
import GlobalNavbar from "@/components/headerComponents/GlobalNavbar.vue";
import LinkButton from "@/components/btnComponents/GlobalButtons/LinkButton.vue";
</script>

<style scoped>
.navbar,
.mainbanner {
    background-color: #f1f1f1 !important;
}
</style>

<template>
    <!-- Header -->
    <GlobalNavbar />
    <!-- ..Header -->

    <!-- MainBanner -->
    <section class="mainbanner bg-banner py-5 text-center">
        <div class="container py-4">
            <div class="row py-lg-4">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-bold display-5 opacity-80">Favorites products.</h1>
                </div>
            </div>
        </div>
    </section>
    <!-- ../MainBanner -->


    <!-- Products-List -->
    <div class="container col-lg-10 col-sm-11 my-5 py-5">
        <!-- Title::: -->
        <div class="row mt-3 text-center py-1 border-bottom border-black">
            <div class="col-sm-2 fw-semibold p-3 themed-grid-col">Image</div>
            <div class="col-sm-2 fw-semibold p-3 themed-grid-col">Product</div>
            <div class="col-sm-2 fw-semibold p-3 themed-grid-col">Price</div>
            <div class="col-sm-2 fw-semibold p-3 themed-grid-col">Quantity</div>
            <div class="col-sm-2 fw-semibold p-3 themed-grid-col">Total</div>
            <div class="col-sm-2 fw-semibold p-3 themed-grid-col">Options</div>
        </div>
        <!-- ...Title::: -->

        <div v-for="item in 2">
            <!-- Product-Item -->
            <div class="product-item row text-center border-bottom d-flex align-items-stretch justify-content-between">
                <div class="col-sm-2 fw-semibold p-3 themed-grid-col d-flex justify-content-center align-items-center">
                    <img src="/assets/images/product-3.png" class="w-50" alt="Product-img">
                </div>
                <div class="col-sm-2 fw-semibold p-3 themed-grid-col d-flex justify-content-center align-items-center">
                    Chair-product {{ item }}</div>
                <div class="col-sm-2 fw-semibold p-3 themed-grid-col d-flex justify-content-center align-items-center">
                    15$
                </div>
                <div class="col-sm-2 fw-semibold p-3 themed-grid-col d-flex justify-content-center align-items-center">
                    <div class="d-flex justify-content-between align-items-stretch gap-1">
                        <input type="text" name="" class="form-control" value="1" id="">
                        <button class="btn btn-light border" type="button"><span class="bi bi-plus-lg"></span></button>
                        <button class="btn btn-light border" type="button"><span class="bi bi-dash-lg"></span></button>
                    </div>
                </div>
                <div class="col-sm-2 fw-semibold p-3 themed-grid-col d-flex justify-content-center align-items-center">
                    45$
                </div>
                <div class="col-sm-2 fw-semibold p-3 themed-grid-col d-flex justify-content-center align-items-center">

                    <button class="btn btn-light border rounded rounded-0 me-1" type="button"><span
                            class="cursor-p bi bi-trash3 "></span></button>
                    <button class="btn btn-light border rounded rounded-0 ms-1" type="button"><span
                            class="bi bi-plus-lg"></span>
                        <span>Add to
                            cart</span></button>
                </div>
            </div>
            <!-- ...Product-Item -->
        </div>

        <!-- Body-cotent-footer -->
        <div class="content-footer mt-5 pt-3">

            <div class="row d-flex justify-content-between ">
                <!-- CART-FOOTER -->

                <!-- Cart-btns -->
                <div class="cart-btn col-lg-5">
                    <div
                        class="btns-bx d-flex justify-content-center gap-2 align-items-center w-100 cart-bx-content my-3 my-lg-1">
                        <button
                            class="rounded rounded-0 py-2 fw-semibold my-3
                        btn btn-light border border-1 bg-body-tertiary d-flex justify-content-center gap-2 align-items-center w-100"
                            type="button">
                            <span class="me-2">Delete All Favorites</span>
                            <span class="bi bi-trash3"></span>
                        </button>
                        <LinkButton btn-theme="dark-btn" btn-label="Continue Shopping" btn-url="" btn-icon="cart-check"
                            outlined="false" class="py-2 btn-lg my-3 w-100" />
                    </div>


                </div>
                <!-- ...Cart-btns -->




                <!-- ...CART-FOOTER -->
            </div>


        </div>
        <!-- ..BodyContent-footer -->



    </div>
    <!-- ..Products-List -->
</template>

<script>
export default {
    name: "FavoritesView",
    methods: {
        setPageTitle() {
            document.title = "Homello | Favorites";
        }
    },
    beforeMount() {
        this.setPageTitle()
    }
}
</script>