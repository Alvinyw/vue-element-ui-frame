<template>
    <el-row class="md-main">
        <template v-for="(item, index) in componentAry">
            <div @click="onComponentChange(item, index)" :key="index"
                :class="Number(selectedIndex) == Number(index) ? 'actived' : ''" class="com-item">
                <component :is="item.component" :options="item.options" :key="index">
                </component>
                <span class="del" @click.stop="onComponentDel(index)"><i class="el-icon-delete"></i></span>
            </div>
        </template>
    </el-row>
</template>
<script>
import { mapGetters } from "vuex";
import { mapToComponents } from "./utils";
import { componentType, componentTypeMap } from "@/const/componentType";

export default {
    name: "MiddleIndex",
    components: {},
    props: {
        pageLayout: {
            type: Array,
            required: false,
            default: () => ([]),
        },
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(["templateInfo", "currentComType", "selectedIndex"]),
        // pageLayout() {
        //     const { pageLayout = {} } = this.templateInfo;
        //     return pageLayout;
        // },
        componentAry() {
            // const { pageLayout = {} } = this.templateInfo;
            const _c = mapToComponents(this.pageLayout);
            console.log('======componentAry-1=========', _c)
            return _c;
        }
    },
    watch: {
    },
    mounted() {

    },
    methods: {
        onComponentChange(item = {}, index = 0) {
            const { value } = item.options || {}
            this.$store.dispatch("app/updateCurrentComType", value);
            this.$store.dispatch("app/updateSelectedIndex", index);
        },
        onComponentDel(idx = 1) {
            const { pageLayout = {} } = this.templateInfo;
            const _p = pageLayout.filter((item, index) => item && index !== idx);
            this.$store.dispatch("app/updateTemplateInfo", { ...this.templateInfo, pageLayout: _p });
            this.$store.dispatch("app/updateSelectedIndex", - 1);
            this.$store.dispatch("app/updateCurrentComType", componentType.HEADR_NAV);
        }
    }
};
</script>

<style scoped lang="less">
.md-main {
    .com-item {
        position: relative;
        cursor: pointer;
        border: 2px solid transparent;

        &.actived {
            border: 2px solid #7545F3
        }

        .del {

            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            right: 0;
            top: 0;
            width: 24px;
            height: 24px;
            font-size: 16px;
            background-color: #7545F3;
            color: #fff;
            display: none;
        }

        &.actived {
            .del {
                display: flex;
            }
        }
    }
}
</style>