<style scoped>
/* Product-Card-Design */
.product-card {
  position: relative;
}

.product-card:hover .cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #265a5a;
  filter: opacity(0.5);
  transition: 0.5s ease-in-out;
  z-index: 2 !important;
}

.product-card .addtocard {
  position: absolute;
  top: 45px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3 !important;
  opacity: 0;
}

.product-card:hover .addtocard {
  animation: revealLogo 0.3s ease-in 0.1s 1 normal both;
}

@keyframes revealLogo {
  0% {
    top: 45px;
    opacity: 0;
  }

  100% {
    top: 0px;
    opacity: 1;
  }
}

.product-card .addtocard .btn {
  border-radius: 50% !important;
  width: 45px;
  height: 45px;
}

.product-card .addtocard .btn .bi {
  font-size: 25px;
  color: white;
}

/* Product-card-img */
.product-card .card-img {
  width: 100%;
  max-height: 100%;
  overflow: hidden;
  position: relative;
  background: #dcdbe0 !important;
}


/* Product-card */
.product-card .card-img img {
  width: 100%;
  max-width: 100%;
  height: auto !important;
  object-fit: cover;
}
</style>

<template>
  <!-- Product-card-item -->
  <div class="product-card">
    <div class="card-img py-4 cursor-p">
      <span class="addtocard d-flex  flex-column justify-content-center align-items-center">
        <button type="button" class="btn btn-success d-flex justify-content-center align-items-center"><span
            class="bi bi-plus-lg mx-auto d-block"></span></button>
        <span class="text-white mt-3 d-block">Add to cart</span>
      </span>
      <div class="cover"></div>
      <img :src="productImage" alt="" />
    </div>
    <a href="">
      <div class="card-body py-3 d-flex flex-column align-items-between justify-content gap-2">
        <span class="product-info d-flex justify-content-between align-items-center">
          <span class="product-category opacity-50 small">{{ productCategory }}</span>
          <span class="product-rating small">
            <span class="bi bi-heart fs-5 opacity-50"></span>
          </span>
        </span>
        <span class="product-name fs-6 fw-semibold">
          {{ productTitle }}</span>
        <span class="product-price fs-6">
          <span class="act-price color-primary fw-bold">${{ productPrice }}</span>

          <span class="cans-price ms-3" v-if="productDiscount"><s>${{ productDiscount }}</s></span>

        </span>
      </div>
    </a>
  </div>
  <!-- /Product-card-item -->
</template>

<script>
export default {
  name: "ProductItemCard",
  data() {
    return {
    }
  },
  props: {
    productId: { type: String },
    productTitle: { type: String, default: "Product Title" },
    productCategory: { type: String, default: "Category" },
    productPrice: { type: String, default: "100" },
    productDiscount: { type: String, default: "" },
    productImage: { type: String, default: "@/../src/assets/images/product-3.png" }
  }
}
</script>