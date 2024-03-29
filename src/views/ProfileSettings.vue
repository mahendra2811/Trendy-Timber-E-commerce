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

.accordion-collapse,
.accordion-item {
    border: none !important;
    border-radius: 0px !important;
}

.btn.bg-success-subtle:hover {
    background-color: #b5cec3 !important;
}

.btn.bg-success-subtle:active {
    background-color: #b4e6d0 !important;
}

.form-control:focus {
    border: 1px solid #10ba71 !important;
}
</style>

<template>
    <!-- Header -->
    <GlobalNavbar />
    <!-- ..Header -->


    <main>
        <!-- MainBanner -->
        <section class="mainbanner bg-banner py-5 text-center">
            <div class="container py-4">
                <div class="row py-lg-4">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-bold display-5 opacity-80">Settings.</h1>
                    </div>
                </div>
            </div>
        </section>
        <!-- ../MainBanner -->


        <!-- profile-settings -->
        <div class="container col-lg-5 col-sm-12 my-5 py-5">
            <div class="settings-items accordion" id="settingsItems">
                <div class="header mb-3 px-1 py-1">
                    <h5 class="fw-bold opacity-80 text-black-emphasis">Account Settings</h5>
                    <p class="fw-medium text-body-tertiary">
                        Modify personal informations linked to your homello shopping
                        account
                    </p>
                </div>

                <!-- Profile-Settings-Item --username -->
                <div class="settings-item accordion-item username-item">
                    <div
                        class="itemcontent d-flex justify-content-between align-items-center py-2 mt-2 border-bottom accordion-header px-1 mb-0 gap-3">
                        <div class="item-desc">
                            <h5 class="fw-bold">Modify your username</h5>
                            <span class="d-block fw-normal text-body-secondary">
                                Click to modify the username diplayed on your profile and all product purchases
                                invoices.</span>
                        </div>
                        <button
                            class="collapsed item-btn btn btn-success bg-success-subtle text-success-emphasis rounded rounded-1 d-flex justify-content-between align-items-center gap-2"
                            data-bs-toggle="collapse" data-bs-target="#editUserName" aria-expanded="false"
                            aria-controls="editUserName" type="button"><span>Modify</span> <span
                                class="bi bi-pencil-square"></span></button>
                    </div>
                    <div class="item-form accordion-collapse collapse px-3 py-2 bg-light mt-0" id="editUserName"
                        data-bs-parent="#settingsItems">
                        <span class="d-block fs-5 fw-bold">Edit Form</span>
                        <span class="d-block fw-normal text-body-secondary">Enter your new username and click save.</span>
                        <div class="form">
                            <input type="text" name="nusername" id="nusername"
                                class="form-control border border-1 rounded rounded-0 my-2"
                                placeholder="Enter a new username...">
                            <button
                                class="btn btn-success bg-success-subtle btn-sm text-success-emphasis rounded rounded-1 px-2"
                                type="button">Save now</button>
                        </div>
                    </div>
                </div>
                <!-- ...Profile-Settings-Item --username -->

                <!-- Profile-Settings-Item --email -->
                <div class="settings-item accordion-item email-item">
                    <div
                        class="itemcontent d-flex justify-content-between align-items-center py-2 mt-2 border-bottom accordion-header px-1 mb-0 gap-3">
                        <div class="item-desc">
                            <h5 class="fw-bold">Edit your email address</h5>
                            <span class="d-block fw-normal text-body-secondary">
                                Click to modify your email address and add a new one to your account.</span>
                        </div>
                        <button
                            class="collapsed item-btn btn btn-success bg-success-subtle text-success-emphasis rounded rounded-1 d-flex justify-content-between align-items-center gap-2"
                            data-bs-toggle="collapse" data-bs-target="#editUserMail" aria-expanded="false"
                            aria-controls="editUserMail" type="button"><span>Modify</span> <span
                                class="bi bi-pencil-square"></span></button>
                    </div>
                    <div class="item-form accordion-collapse collapse px-3 py-2 bg-light mt-0" id="editUserMail"
                        data-bs-parent="#settingsItems">
                        <span class="d-block fs-5 fw-bold">Edit Form</span>
                        <span class="d-block fw-normal text-body-secondary">Enter a new email address and click save.</span>
                        <div class="form">
                            <input type="email" name="nmail" id="nmail"
                                class="form-control border border-1 rounded rounded-0 my-2" placeholder="username@mail.com">
                            <button
                                class="btn btn-success bg-success-subtle btn-sm text-success-emphasis rounded rounded-1 px-2"
                                type="button">Save now</button>
                        </div>
                    </div>
                </div>
                <!-- ...Profile-Settings-Item --email -->


                <!-- Profile-Settings-Item --password -->
                <div class="settings-item accordion-item password-item">
                    <div
                        class="itemcontent d-flex justify-content-between align-items-center py-2 mt-2 border-bottom accordion-header px-1 mb-0 gap-3">
                        <div class="item-desc">
                            <h5 class="fw-bold">Create a new password</h5>
                            <span class="d-block fw-normal text-body-secondary">
                                Click to modify your password and add a new one to your account.</span>
                        </div>
                        <button
                            class="collapsed item-btn btn btn-success bg-success-subtle text-success-emphasis rounded rounded-1 d-flex justify-content-between align-items-center gap-2"
                            data-bs-toggle="collapse" data-bs-target="#editUserPass" aria-expanded="false"
                            aria-controls="editUserPass" type="button"><span>Modify</span> <span
                                class="bi bi-pencil-square"></span></button>
                    </div>
                    <div class="item-form accordion-collapse collapse px-3 py-2 bg-light mt-0" id="editUserPass"
                        data-bs-parent="#settingsItems">
                        <span class="d-block fs-5 fw-bold">Edit Form</span>
                        <span class="d-block fw-normal text-body-secondary">Enter your new password and click to
                            save.</span>
                        <div class="form">
                            <input type="password" name="npass" id="npass"
                                class="form-control border border-1 rounded rounded-0 my-2" placeholder="Password">

                            <input type="password" name="confpass" id="confpass"
                                class="form-control border border-1 rounded rounded-0 my-2"
                                placeholder="Confirm New Password">
                            <button
                                class="btn btn-success bg-success-subtle btn-sm text-success-emphasis rounded rounded-1 px-2"
                                type="button">Save now</button>
                        </div>
                    </div>
                </div>
                <!-- ...Profile-Settings-Item --password -->


                <div class="header mb-3 mt-5 px-1 pt-3">
                    <h5 class="fw-bold opacity-80 text-black-emphasis">Profile Settings</h5>
                    <p class="fw-medium text-body-tertiary">
                        Modify the profile linked to your homello account
                    </p>
                </div>


                <!-- Profile-Settings-Item --profileimg -->
                <div class="settings-item accordion-item password-item mt-3">
                    <div
                        class="itemcontent d-flex justify-content-between align-items-center py-2 mt-2 border-bottom accordion-header px-1 mb-0 gap-3">
                        <div class="item-desc">
                            <h5 class="fw-bold">Change your profile image</h5>
                            <span class="d-block fw-normal text-body-secondary">
                                Click to modify the profile image on your shopping account.</span>
                        </div>
                        <button
                            class="collapsed item-btn btn btn-success bg-success-subtle text-success-emphasis rounded rounded-1 d-flex justify-content-between align-items-center gap-2"
                            data-bs-toggle="collapse" data-bs-target="#editUserImg" aria-expanded="false"
                            aria-controls="editUserImg" type="button"><span>Modify</span> <span
                                class="bi bi-pencil-square"></span></button>
                    </div>
                    <div class="item-form accordion-collapse collapse px-3 py-2 bg-light mt-0" id="editUserImg"
                        data-bs-parent="#settingsItems">
                        <span class="d-block fs-5 fw-bold">Edit Form</span>
                        <span class="d-block fw-normal text-body-secondary">Click to upload and save your new profile
                            image.</span>
                        <div class="form">
                            <input type="file" name="nimg" id="nimg"
                                class="form-control border border-1 rounded rounded-0 my-2"
                                placeholder="select a new profile image">
                            <button
                                class="btn btn-success bg-success-subtle btn-sm text-success-emphasis rounded rounded-1 px-2"
                                type="button">Save now</button>
                        </div>
                    </div>
                </div>
                <!-- ...Profile-Settings-Item --profileimg -->


                <!-- Profile-Settings-Item --deleteprof -->
                <div class="settings-item accordion-item password-item mt-3">
                    <div
                        class="itemcontent d-flex justify-content-between align-items-center py-2 mt-2 border-bottom accordion-header px-1 mb-0 gap-3">
                        <div class="item-desc">
                            <h5 class="fw-bold">Delete your Account</h5>
                            <span class="d-block fw-normal text-body-secondary">
                                Click to delete your homello account.</span>
                        </div>
                        <button
                            class="collapsed item-btn btn btn-danger bg-danger-subtle text-danger-emphasis rounded rounded-1 d-flex justify-content-between align-items-center gap-2"
                            data-bs-toggle="collapse" data-bs-target="#delUser" aria-expanded="false"
                            aria-controls="delUser" type="button"><span>Delete</span> <span
                                class="bi bi-trash3"></span></button>
                    </div>
                    <div class="item-form accordion-collapse collapse px-3 py-2 bg-light mt-0" id="delUser"
                        data-bs-parent="#settingsItems">
                        <span class="d-block fs-5 fw-bold">Confirm Account Deletion</span>
                        <span class="d-block fw-normal text-body-secondary">Please keep in mind that this action cant be
                            undone and all your account information will be lost.</span>
                        <div class="form">
                            <input type="password" name="confpass" id="confpass"
                                class="form-control border border-1 rounded rounded-0 my-2"
                                placeholder="Enter your password to confirm">
                            <button
                                class="btn btn-danger bg-danger-subtle btn-sm text-danger-emphasis rounded rounded-1 px-2"
                                type="button">Delete now now !</button>
                        </div>
                    </div>
                </div>
                <!-- ...Profile-Settings-Item --deleteprof -->

            </div>
        </div>
        <!-- profile-settings -->

    </main>
</template>

<script>
export default {
    name: "ProfileSettingsView"
}
</script>