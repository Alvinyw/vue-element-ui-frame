<template>
    <div class="img">
        <el-carousel :interval="2000" arrow="always">
            <el-carousel-item v-for="item in 2" :key="item">
                <h3>图片{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    name: "Img",
    props: {
        options: {
            type: Object,
            required: false,
            default: () => ({
                property: {},
                value: ''
            }),
        },
    },
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters(["templateInfo", "currentComType"]),
        // headerNav() {
        //     const { headerNav = {} } = this.templateInfo;
        //     return headerNav;
        // },
    },
    watch: {

    },
    mounted() {
        // console.log('========this.options=========', this.options)
    },
    methods: {

    }
};
</script>

<style lang="less">
.img {
    .el-carousel__container {
        height: 250px;
    }
}
</style>

<style scoped lang="less">
.img {
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 250px;
        text-align: center;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
}
</style>