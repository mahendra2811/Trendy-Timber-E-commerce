<style scoped>
/* navbar-brand (Logo) */
.navbar-brand {
    font-size: 25px;
    font-weight: bold;
    letter-spacing: 1px;
}

header .navbar {
    background-color: #f1f1f1 !important;
    color: #0a0a0a !important;
}

.nav-link .bi {
    font-size: 19px;
}

.brand-lg {
    display: none !important;
}

.nav-item .label {
    margin-top: -3px;
}

@media only screen and (min-width: 992px) {
    .brand-sm {
        display: none !important;
    }

    .brand-lg {
        display: block !important;
    }

    .nav-item .label {
        display: none;
    }
}
</style>

<template>
    <!-- Global-nav -->
    <header>
        <nav class="navbar navbar-expand-lg navbar-default bg-default navlight" aria-label="Gloabl navbar">
            <div class="container">
                <a href="" class="navbar-brand brand-sm fw-bold fs-2 me-0">Trendy Timber</a>
                <button class=" navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="navbar-collapse d-lg-flex collapse" id="navbarsExample11" style="">
                    <a href="" class="navbar-brand fw-bold fs-2 col-lg-3 me-0 brand-lg">Trendy Timber</a>
                    <ul
                        class="navbar-nav col-lg-6 justify-content-lg-center align-items-sm-start align-items-lg-center flex-grow-1 gap-lg-3 gap-2">
                        <span v-for="navlink in navLinksList">
                            <li class="nav-item">
                                <a :class="`nav-link lead fw-semibold ` + isIndexActive(navlink)" aria-current="page"
                                    :href="`/` + navlink.url">{{
                                        navlink.label }}</a>
                            </li>
                        </span>
                    </ul>
                    <div class="d-lg-flex col-lg-3 justify-content-lg-end mt-3 mt-lg-0">
                        <ul
                            class="navbar-nav d-flex col-12 justify-content-lg-center align-items-sm-start align-items-lg-center flex-grow-1 gap-1">
                            <li class="nav-item">
                                <a class="nav-link" href="/search"><span class="icon"><i class="bi bi-search"></i></span>
                                    <span class="label ms-2">Search</span>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/favorites"><span class="icon"><i class="bi bi-heart"></i></span>
                                    <span class="label ms-2">Liked list</span>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/cart"><span class="icon"><i class="bi bi-cart"></i></span>
                                    <span class="label ms-2">Cart</span>
                                </a>
                            </li>

                            <LinkButton btn-theme="ms-lg-4 px-2 primary-btn opacity-100" btn-label="Login / Register"
                                btn-url="/register" btn-icon="person" outlined="false" class="nav-link" />
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <!-- ..Global-nav -->
</template>


<script>
import LinkButton from '../btnComponents/GlobalButtons/LinkButton.vue';

export default {
    name: "GlobalNavbar",
    data() {
        return {
            navLinksList: [
                {
                    tag: "home",
                    isActive: true,
                    url: "home",
                    label: "Home"
                },
                
                {
                    tag: "about",
                    isActive: false,
                    url: "about",
                    label: "About"
                },
                {
                    tag: "shop",
                    isActive: false,
                    url: "shop",
                    label: "Shop"
                },
                {
                    tag: "blog",
                    isActive: false,
                    url: "blog",
                    label: "Blog"
                },
                {
                    tag: "contact",
                    isActive: false,
                    url: "contact",
                    label: "Contact"
                }
            ]
        }
    },
    props: {
        active: {
            type: String,
            default: "home"
        }
    },
    methods: {
        isIndexActive(e) {
            return e.tag == this.active ? " active" : "";
        }
    },
    components: {
        LinkButton
    }
}
</script>
