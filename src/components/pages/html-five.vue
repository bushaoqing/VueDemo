<template>
    <div>
        <button @click="goBack">Go Back</button>
        <h2>欢迎来到 H5 页面</h2>


    </div>
</template>

<script>
export default {
    name: 'HtmlFive',

    methods: {
        goBack () {
            this.$router.go(-1)
        }
    }
}
</script>
