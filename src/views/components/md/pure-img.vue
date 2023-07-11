<template>
    <div class="pure-img">
        <img v-if="options.property.icon.length > 0 && imgSrc"
            :style="{ height: options.property.height, width: options.property.width, 'border-radius': options.property.radius + 'px' }"
            :src="imgSrc" />
        <div v-else class="empty">
            在右侧编辑区添加图片<br />建议宽度375px
        </div>
    </div>
</template>
<script>

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
            async handler(newVal) {
                const { property = {} } = newVal || {};
                const { icon = [] } = property;
                if (icon.length > 0) {
                    this.imgSrc = await this.$lib.urlToBase64(icon[0].url);
                } else {
                    this.imgSrc = '';
                }
                console.log('========this.imgSrc-2=======', this.imgSrc)
            },
            deep: true
        },
    },
    async mounted() {
        const { property = {} } = this.options || {};
        const { icon = [] } = property;
        if (icon.length > 0) {
            this.imgSrc = await this.$lib.urlToBase64(icon[0].url);
        } else {
            this.imgSrc = '';
        }
        console.log('========this.imgSrc-1=======', this.imgSrc)
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