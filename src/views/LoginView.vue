<style scoped>
nav,
.mainbanner {
    background-color: #ffffff !important;
}

input.form-control:focus,
input.form-check-input:focus {
    background-color: #ffffff !important;
    border: 1px solid #0b9768 !important;
}

input.form-check-input:checked {
    background-color: #0b9768 !important;
    border: 1px solid #0b9768 !important;
    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0) !important;
}

input.form-check-input {
    cursor: pointer;
    box-shadow: none !important;
}

button:active {
    background-color: #214e4e !important;
}

.line {
    height: 2px;
    background-color: #e8ecf0;
}

.formbx {
    min-width: 390px !important;
}

.btndark:active {
    background-color: #1a1a1a !important;
}
</style>

<template>
    <!-- Header -->
    <GlobalNavbar />
    <!-- ..Header -->

    <!-- MainBanner -->
    <main class="form-signin w-100 m-auto pt-5">
        <div class="formbx col-lg-4 col-10 mx-auto p-lg-5 container mt-lg-0 mt-4">
            <form class="w-100 form">

                <h1 class="display-6 mb-1 fw-bold d-flex align-items-center justify-content-center" align="center">Welcome
                    back !
                </h1>
                <p class="w-80 mb-4 mx-auto d-flex align-items-center justify-content-center opacity-50" align="center">Sign
                    in to your account and start shopping </p>

                <div class="form-floating my-3">
                    <input type="email" class="form-control bg-light rounded rounded-0" id="floatingEmail"
                        placeholder="name@example.com">
                    <label for="floatingEmail" class="text-muted">Email address</label>
                </div>
                <div class="form-floating my-3">
                    <input type="password" class="form-control bg-light rounded rounded-0" id="floatingPassword"
                        placeholder="Password">
                    <label for="floatingPassword" class="text-muted">Password</label>
                </div>

                <div class="form-check text-start my-3">
                    <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                        Remember me
                    </label>
                </div>
                <button
                    class="btn btn-light primary-btn w-100 py-2 text-white d-flex align-items-center justify-content-center rounded-0"
                    type="submit">Login</button>
            </form>

            <p class="mt-3 text-body-tertiary fw-medium">Password forgotten
                ?
                <router-link to="/recover">
                    <span class="text-success opacity-100 "><ins>click here</ins></span>
                </router-link>.

            </p>

            <div class="formbtns mt-3 pt-3 d-flex justify-content-evenly align-items-center gap-4">
                <span class="w-100 d-flex line my-1 rounded rounded-3"></span>
                <span class="lead fw-semibold">OR</span>
                <span class="w-100 d-flex line my-1 rounded rounded-3"></span>
            </div>

            <router-link to="/register">
                <LinkButton btn-theme="dark-btn" btn-label="Create an account" btn-icon="person-plus" outlined="false"
                    class="py-2 btndark btn-lg my-3 w-100" />
            </router-link>

        </div>
    </main>
    <!-- ../MainBanner -->
</template>

<script>
import GlobalNavbar from "@/components/headerComponents/GlobalNavbar.vue";
import LinkButton from "@/components/btnComponents/GlobalButtons/LinkButton.vue";

export default {
    name: "LoginView",
    components: {
        GlobalNavbar,
        LinkButton
    },
    methods: {
        setPageTitle() {
            document.title = "Homello | Login ";
        }
    },
    beforeMount() {
        this.setPageTitle()
    }
}
</script>