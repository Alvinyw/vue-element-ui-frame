<template>
    <div class="pure-img">
        <img v-if="options.property.icon.length" :src="options.property.icon[0].url" />
        <div v-else class="empty">
            在右侧编辑区添加图片<br />建议宽度375px
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import { componentType, componentTypeMap } from "@/const/componentType";


export default {
    name: "PureImg",
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
        width: 100%;
    }
}
</style>