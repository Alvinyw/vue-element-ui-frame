<template>
    <div class="img">
        <el-carousel :indicator-position="options.property.showArrow ? '' : 'none'" :interval="2000" arrow="always">
            <el-carousel-item v-for="item in imagesAry" :key="item.uid">
                <h3 v-if="imagesAry.length < 1">图片{{ item }}</h3>
                <img v-else :src="item.url" />
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>

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
            imagesAry: [],
        }
    },
    watch: {
        options: {
            handler(newVal) {
                const { property = {} } = newVal || {};
                const { imgs = [] } = property;
                this.imagesAry = imgs || 3;
            },
            deep: true
        },
    },
    mounted() {
        // const { property = {} } = this.options || {};
        // const { imgs = [] } = property;
        // this.imagesAry = imgs || 3;
    },
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
    .el-carousel__item {
        text-align: center;

        h3 {
            color: #475669;
            font-size: 18px;
            opacity: 0.75;
            line-height: 250px;
            text-align: center;
            margin: 0;
        }

        img {
            height: 100%;
        }

        &:nth-child(2n) {
            background-color: #99a9bf;
        }

        &:nth-child(2n+1) {
            background-color: #d3dce6;
        }
    }
}
</style>