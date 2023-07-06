<template>
    <div class="pure-text">
        <p v-if="options.property.text">{{ options.property.text }}</p>
        <p v-else class="empty">请在右侧输入文本内容</p>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import { componentType, componentTypeMap } from "@/const/componentType";


export default {
    name: "PureText",
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
.pure-text {
    p {
        min-height: 32px;
    }
    .empty {
        color: #bbb;
        font-size: 14px;
        padding: 0 0 0 4px;
    }
}
</style>