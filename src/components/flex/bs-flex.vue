<template>
    <div class="bs--flex_wrap" :style="{
        'flex-direction': flexDirection
    }">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'BsFlex',

    props: {
        flexDirection: {
            type: String,
            default: 'row'
        }
    }
}
</script>

<style scoped>
    .bs--flex_wrap {
        display: flex;
        margin-top: 8px;
    }
</style>