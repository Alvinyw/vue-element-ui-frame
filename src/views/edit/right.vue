<template>
    <el-row class="rt">
        <component :is="currentCom" :options="currentObj" :key="selectedIndex"></component>
    </el-row>
</template>
<script>
import { mapGetters } from "vuex";
import HeaderNav from "../components/rt/header-nav.vue";
import FooterNav from "../components/rt/footer-nav.vue";
import QuickEnter from "../components/rt/quick-enter.vue";
import { componentType, componentTypeMap } from "@/const/componentType";

export default {
    name: "RightIndex",
    components: { HeaderNav, QuickEnter },
    data() {
        return {
            currentCom: HeaderNav,
        }
    },
    computed: {
        ...mapGetters(["templateInfo", "currentComType", "selectedIndex"]),
        currentObj() {
            const { pageLayout = {} } = this.templateInfo;
            const _obj = pageLayout.filter((item, index) => index == this.selectedIndex)[0] || {};
            return _obj;
        }
    },
    watch: {
        currentComType(val) {
            // console.log('======currentComType=========', val)
            switch (Number(val)) {
                case componentType.QUICK_ENTER:
                    this.currentCom = QuickEnter;
                    break;
                case componentType.FOOTER_NAV:
                    this.currentCom = FooterNav;
                    break;
                default:
                    this.currentCom = HeaderNav;
                    break;
            }
        }
    },
    mounted() {

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
    padding: 15px 8px;
    background-color: #fff;
    height: calc(100vh - 60px);
    overflow: scroll;

}
</style>