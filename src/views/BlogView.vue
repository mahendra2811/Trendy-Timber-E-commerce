<script setup>
// import_required_components
import GlobalNavbar from "@/components/headerComponents/GlobalNavbar.vue";
import NewsletterBanner from "@/components/footerComponents/NewsletterBanner.vue";
import GlobalFooter from "@/components/footerComponents/GlobalFooter.vue";
import BlogArticleCard from "@/components/bodyComponents//BlogArticleCard.vue";
</script>

 
<style scoped>
/* Blog_Styles */
.navbar {
    background-color: #fff !important;
}

.mainbanner {
    background-color: #f1f1f1 !important;
}

.bg-banner {
    position: relative;
    overflow: hidden;
}

.bg-banner .banner-img {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1 !important;
}

.bg-banner .banner-img img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    object-fit: cover;
    object-position: center;
}


.bg-banner .banner-blur {
    top: 0;
    left: 0;
    background: #04150f;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.5;
    z-index: -1 !important;
}

.album .col {
    max-width: 350px !important;
    overflow: hidden !important;
}

.album .col:hover .card-title {
    display: none !important;
}
</style>

<template>
    <!-- -->

    <!-- Header -->
    <GlobalNavbar />
    <!-- ..Header -->

    <main>
        <!-- MainBanner -->
        <section class="bg-banner py-5 text-center">
            <div class="banner-img">
                <img src="/assets/images/image05.jpg" alt="" srcset="">
            </div>
            <div class="banner-blur"></div>
            <div class="container py-4">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-bold display-3 text-white">Our Blog.</h1>
                    </div>
                </div>
            </div>
        </section>
        <!-- ../MainBanner -->

        <!-- ArticlesListBanner -->
        <div class="album py-5 my-5">
            <div class="container col-lg-9">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <!-- Row... -->


                    <div class="articleslist" v-for="a in 9">
                        <!-- ProductItem-Cards -->
                        <div class="col py-3">
                            <BlogArticleCard :title="article.tmpTitle" :date="article.tmpDate" category="Tutorials"
                                author="Admin" :img="article.tmpImg" class="col-11 col-lg-3" />
                        </div>
                    </div>


                    <!-- ..Row... -->
                </div>
            </div>
        </div>
        <!-- ..ArticlesListBanner -->


        <!-- Newsletter-banner -->
        <div class="container col-lg-9">
            <NewsletterBanner />
        </div>
        <!-- */Newsletter-banner -->


        <!-- Footer -->
        <GlobalFooter data="none" />
        <!-- */Footer -->
    </main>






    <!-- -->
</template> 


<script>
export default {
    name: "BlogView",
    data() {
        return {
            article: {
                tmpTitle: "This card has supporting text below as a natural lead-in to additional content",
                tmpDate: "Jan 04, 2024",
                tmpImg: "/assets/images/girl-customer-service-image.jpg"
            }
        }
    },
    methods: {
        setPageTitle() {
            document.title = "Homello | Blog";
        }
    },
    beforeMount() {
        this.setPageTitle()
    }
}
</script>