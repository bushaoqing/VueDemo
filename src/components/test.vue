<template>
    <div>
        <bs-flex class="sf-flex" flex-direction="row-reverse">
            <bs-flex-item v-for="(i, index) in count" 
                          :key="index">
                {{ i }}
            </bs-flex-item>
        </bs-flex>
        <bs-flex class="sf-flex">
            <bs-flex-item v-for="(i, index) in count2" 
                          :key="10 + index">
                {{ 10 + i }}
            </bs-flex-item>
        </bs-flex>
        <bs-flex class="sf-flex">
            <bs-flex-item>
                <div class="test__div">{{ 'aaa' }}</div>
            </bs-flex-item>
            <bs-flex-item flex="0 0 120px">
                {{ 'bbb' }}
            </bs-flex-item>
        </bs-flex>
        <bs-flex class="sf-flex">
            <bs-flex-item v-for="(i, index) in count2" 
                          :key="10 + index">
                {{ 10 + i }}
            </bs-flex-item>
        </bs-flex>
    </div>
</template>

<script>
    export default {
        name: 'Test',

        data () {
            return {
                count: [1,2,3,4],
                count2: [1,2,3]
            };
        }
    }
</script>

<style scoped>
    .test__div {
        height: 200px;
        background: pink;
    }
</style>
