<template>
    <div class="pure-img">
        <img v-if="options.property.icon.length > 0"
            :style="{ height: options.property.height, width: options.property.width, 'border-radius': options.property.radius + 'px' }"
            :src="imgSrc" />
        <div v-else class="empty">
            在右侧编辑区添加图片<br />建议宽度375px
        </div>
    </div>
</template>
<script>
import { blobToDataURL } from '../../edit/utils';

export default {
    name: "PureImg",
    data() {
        return {
            imgSrc: '',
        }
    },
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
    watch: {
        options: {
            handler(newVal) {
                const { property = {} } = newVal || {};
                const { icon = [] } = property;
                const { url = 'blob:#3' } = icon[0];
                blobToDataURL(url, (val) => {
                    this.imgSrc = val;
                    console.log('======this.imgSrc======', this.imgSrc)
                });
            },
            deep: true
        },
    },
};
</script>

<style scoped lang="less">
.pure-img {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .empty {
        background: #f4dbb6;
        color: #FFF;
        width: 100%;
        height: 180px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
    }

    img {
        max-width: 100%;
    }
}
</style>