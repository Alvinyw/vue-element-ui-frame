<template>
    <div class="text-nav">
        <p v-if="options.property.text">{{ options.property.text }}</p>
        <p v-else class="empty">请在右侧输入文本导航内容</p>
        <el-link class="link" type="primary">查看更多 ></el-link>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import { componentType, componentTypeMap } from "@/const/componentType";


export default {
    name: "TextNav",
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
.text-nav {
    position: relative;

    p {
        min-height: 30px;
    }

    .empty {
        color: #bbb;
        font-size: 14px;
        padding: 0 0 0 4px;
    }

    a {
        position: absolute;
        top: 4px;
        right: 30px;
    }
}
</style>