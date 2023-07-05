<template>
    <div class="quick-enter">
        <div class="item">
            <img v-if="options.icon" :src="options.icon" />
            <i v-else class="el-icon-s-home"></i>
            <span>{{ options.text }}</span>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import { componentType, componentTypeMap } from "@/const/componentType";


export default {
    name: "QuickEnter",
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
            iconSrc: '',
            componentType,
            // 图片上传
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false
        }
    },
    computed: {
        ...mapGetters(["templateInfo", "currentComType"]),
        headerNav() {
            const { headerNav = {} } = this.templateInfo;
            return headerNav;
        },
    },
    watch: {

    },
    mounted() {

    },
    methods: {
        
    }
};
</script>

<style scoped lang="less">
.quick-enter {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .item {
        text-align: center;
        vertical-align: middle;

        i {
            font-size: 30px;
        }

        span {
            display: block;
            text-align: center;
            font-size: 14px;
        }
    }
}
</style>