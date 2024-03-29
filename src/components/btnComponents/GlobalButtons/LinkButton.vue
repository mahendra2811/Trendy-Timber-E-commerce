<style scoped>
/* Style */
</style>

<template>
    <!-- LinkButton-Component -->
    <a :href="btnUrl" type="button" class="btn btn-default cursor-pointer fs-6 border-0 rounded rounded-0"
        :class="btnTheme + [outlined == 'true' ? ' outlined-btn' : '']">
        {{ btnLabel }}
        <span v-if="btnIcon">
            <i :class="`ms-1 bi bi-` + btnIcon"></i>
        </span>
    </a>
</template>

<script>
export default {
    name: "LinkButton",
    data() {
        return {

        }
    },
    props: {
        btnTheme: { type: String, default: "primary-btn" },
        btnLabel: { type: String, default: "Link button" },
        btnUrl: { type: String, default: "" },
        btnIcon: { type: String, default: null },
        outlined: { type: String, default: false }
    }
}
</script>
