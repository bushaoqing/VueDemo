<template>
    <table width="100%" align="center">
        <h2>{{ 'Table' }}</h2>
        <tr>
            <th>用户</th>
            <th>金额</th>
            <th>用户</th>
            <th>金额</th>
            <th>用户</th>
            <th>金额</th>
        </tr>
        <tr>
            <td rowspan="3">aa</td>
            <td colspan="2">111</td>
            <!-- <td>aa</td> -->
            <td>111</td>
            <td>aa</td>
            <td>111</td>
        </tr>
        <tr>
            <!-- <td>aa</td> -->
            <td>111</td>
            <td>aa</td>
            <td>111</td>
            <td>aa</td>
            <td>111</td>
        </tr>
        <tr>
            <!-- <td>aa</td> -->
            <td>111</td>
            <td>aa</td>
            <td>111</td>
            <td>aa</td>
            <td>111</td>
        </tr>
        <tr>
            <td>aa</td>
            <td>111</td>
            <td>aa</td>
            <td>111</td>
            <td>aa</td>
            <td>111</td>
        </tr>
        <tr>
            <td>aa</td>
            <td>111</td>
            <td>aa</td>
            <td>111</td>
            <td>aa</td>
            <td>111</td>
        </tr>
    </table>
</template>

<script>
export default {
    name: 'Table'
}
</script>

<style>
    table {
        border-collapse:collapse;
    }
    th, td {
        padding: 4px 6px;
        border: 1px solid #ddd;
    }
</style>
