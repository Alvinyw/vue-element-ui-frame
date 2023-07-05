<template>
    <el-row class="md-main">
        <template v-for="(item, index) in componentAry">
            <component :is="item.component" :options="item.options" :key="index">
            </component>

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
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(["templateInfo", "currentComType"]),
        pageLayout() {
            const { pageLayout = {} } = this.templateInfo;
            return pageLayout;
        },
        componentAry() {
            return mapToComponents(this.pageLayout);
        }
    },
    watch: {
        currentComType(val) {
        }
    },
    mounted() {
        console.log('======componentAry=========', this.componentAry)
    },
    methods: {

    }
};
</script>

<style lang="less">
.rt {

    .com-nm {
        margin: 0 0 16px 0;
        font-size: 16px;
        font-weight: 500;
    }

}
</style>
<style scoped lang="less">
.rt {
    width: 320px;
    min-height: 100%;
    padding: 15px 8px;
    background-color: #fff;

}
</style>