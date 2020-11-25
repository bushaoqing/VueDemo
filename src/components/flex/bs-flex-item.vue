<template>
    <div class="bs--flex_item-wrap" :style="{
        'flex': flex
    }">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'BsFlexItem',

    props: {
        flex: {
            type: String,
            default: 'auto'
        }
    }
}
</script>

<style scoped>
    .bs--flex_item-wrap {
        display: flex;
        background: #eee;
        margin-left: 8px;
    }
</style>