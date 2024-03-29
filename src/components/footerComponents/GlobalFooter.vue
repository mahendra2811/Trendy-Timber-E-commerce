<style scoped>
/* Footer */
footer {
    background-color: #f8f8f8;
}

/* Footer-logo */
.logo-brand {
    font-size: 25px;
    font-weight: bold;
}
</style>

<template>
    <!-- Global-Footer-Component -->
    <footer class="footer mt-5">
        <div class="container py-5 pb-0">
            <div class="row">
                <div class="col-12 col-md">
                    <span class="logo logo-brand">Trendy Timber </span>
                    <small class="d-block mb-3 text-body-secondary">© 2017–2024</small>
                </div>

                <div class="col-6 col-md">
                    <h5 class="fw-semibold">Features</h5>
                    <ul class="list-unstyled text-small mt-3">
                        <li class="my-1"><a class="link-secondary text-decoration-none fw-medium color-black  link-primary"
                                href="#">Home Page</a></li>
                        <li class="my-1"><a class="link-secondary text-decoration-none fw-medium color-black  link-primary"
                                href="#">Furnitures</a></li>
                        <li class="my-1"><a class="link-secondary text-decoration-none fw-medium color-black  link-primary"
                                href="#">Our Services</a></li>
                        <li class="my-1"><a class="link-secondary text-decoration-none fw-medium color-black  link-primary"
                                href="#">Login / Register</a>
                        </li>
                    </ul>
                </div>

                <div class="col-6 col-md">
                    <h5 class="fw-semibold">Resources</h5>
                    <ul class="list-unstyled text-small mt-3">
                        <li class="my-1"><a class="link-secondary text-decoration-none fw-medium color-black  link-primary"
                                href="#">Business</a>
                        </li>
                        <li class="my-1"><a class="link-secondary text-decoration-none fw-medium color-black  link-primary"
                                href="#">Education</a></li>
                        <li class="my-1"><a class="link-secondary text-decoration-none fw-medium color-black  link-primary"
                                href="#">Government</a></li>
                        <!-- <li class="my-1"><a class="link-secondary text-decoration-none fw-medium color-black  link-primary"
                                href="#">Gaming</a>
                        </li> -->
                    </ul>
                </div>

                <div class="col-6 col-md">
                    <h5 class="fw-semibold">About Us</h5>
                    <ul class="list-unstyled text-small mt-3">
                        <li class="my-1"><a class="link-secondary text-decoration-none fw-medium color-black  link-primary"
                                href="#">About us</a>
                        </li>
                        <li class="my-1"><a class="link-secondary text-decoration-none fw-medium color-black  link-primary"
                                href="#">What we
                                do</a></li>
                        <li class="my-1"><a class="link-secondary text-decoration-none fw-medium color-black  link-primary"
                                href="#">FAQ Page</a>
                        </li>
                        <li class="my-1"><a class="link-secondary text-decoration-none fw-medium color-black  link-primary"
                                href="#">Contact
                                Us</a></li>
                    </ul>
                </div>
                <div class="col-6 col-md">
                    <h5 class="fw-semibold">Policy & Terms</h5>
                    <ul class="list-unstyled text-small mt-3">
                        <li class="my-1"><a class="link-secondary text-decoration-none fw-medium color-black  link-primary"
                                href="#">Terms &
                                Condition</a>
                        </li>
                        <li class="my-1"><a class="link-secondary text-decoration-none fw-medium color-black  link-primary"
                                href="#">Privacy
                                Policy</a>
                        </li>
                        <li class="my-1"><a class="link-secondary text-decoration-none fw-medium color-black  link-primary"
                                href="#">Our Store</a></li>
                        <li class="my-1"><a class="link-secondary text-decoration-none fw-medium color-black  link-primary"
                                href="#">Shopping
                                Guide</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div class="col-md-4 d-flex align-items-center">
                    <span class="mb-3 mb-md-0 text-body-secondary opacity-75 small fw-medium">Copyright &copy;2024 <a href="https://mahendra-pooniya.netlify.app/" >Mahendra singh puniya</a> 
                        All rights
                        reserved.</span>
                </div>

                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex color-dark">
                    <li class="ms-3"><a class="text-body-secondary" href="">
                            <span class="bi bi-github"></span>
                        </a></li>
                    <li class="ms-3"><a class="text-body-secondary" href="#"><span class="bi bi-twitter"></span></a></li>
                    <li class="ms-3"><a class="text-body-secondary" href="#"><span class="bi bi-instagram"></span></a></li>
                    <li class="ms-3"><a class="text-body-secondary" href="#">
                            <span class="bi bi-facebook"></span>
                        </a></li>

                </ul>
            </div>
        </div>

        <!-- Global-Footer-Component -->
    </footer>
</template>

<script>
export default {
    name: "GlobalFooter",
    data() {
        return {
            temp: ""
        }
    },
    props: {
        data: String
    }
}
</script>