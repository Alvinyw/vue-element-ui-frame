<template>
    <div class="quick-enter" :class="Number(currentComType) == componentType.QUICK_ENTER ? 'actived' : ''"
        @click="onChangeComType">
        <div class="item">
            <img v-if="iconSrc" :src="iconSrc" />
            <i v-else class="el-icon-s-home"></i>
            <span>快捷入口</span>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import { componentType, componentTypeMap } from "@/const/componentType";


export default {
    name: "QuickEnter",
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
        onChangeComType() {
            this.$store.dispatch("app/updateCurrentComType", componentType.QUICK_ENTER);
        }
    }
};
</script>

<style scoped lang="less">
.quick-enter {
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    border: 2px solid transparent;

    &.actived {
        border: 2px solid #7545F3
    }


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
}</style>