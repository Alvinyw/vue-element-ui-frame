<template>
    <el-container class="edit-index">
        <el-header class="sec-hd">
            <el-row class="lt"><el-button>返回</el-button></el-row>
            <el-row class="rt"><el-button>保存</el-button><el-button type="primary">应用</el-button></el-row>
        </el-header>
        <el-main class="sec-main">
            <el-row class="lt"></el-row>
            <el-row class="md"></el-row>
            <el-row class="rt"></el-row>
        </el-main>
    </el-container>
</template>
<script>
export default {
    name: "EditIndex",
    data() {
        return {

        }
    },
};
</script>

<style scoped lang="less">
.edit-index {
    .sec-hd {
        height: 59px;
        width: 100%;
        background: #fff;
        box-shadow: #eee 5px 5px 8px 6px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
    }

    .sec-main {
        background-color: #ebedf0;
        height: calc(100vh - 60px);
        position: relative;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;

        .lt {
            width: 320px;
            min-height: 100%;
            background-color: #fff;
        }

        .md {}

        .rt {
            width: 320px;
            min-height: 100%;
            background-color: #fff;
        }
    }
}
</style>