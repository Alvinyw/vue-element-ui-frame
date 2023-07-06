// 中间预览区
import { componentType, componentTypeMap } from "@/const/componentType";
import QuickEnter from "../components/md/quick-enter.vue";
import PureImg from "../components/md/pure-img.vue";

// 右侧编辑区
import HeaderNav from "../components/rt/header-nav.vue";
import FooterNav from "../components/rt/footer-nav.vue";
import QuickEnter_rt from "../components/rt/quick-enter.vue";
import PureImg_rt from "../components/rt/pure-img.vue";

export const mdComponentBaseMap = {
    [componentType.QUICK_ENTER]: QuickEnter,
    [componentType.PURE_IMG]: PureImg,
}

export function mapToMdComponents(list = []) {
    return list.map(item => {
        return { options: item, component: mdComponentBaseMap[item.value] };
    });
}

export const rtComponentBaseMap = {
    [componentType.HEADR_NAV]: HeaderNav,
    [componentType.FOOTER_NAV]: FooterNav,
    [componentType.QUICK_ENTER]: QuickEnter_rt,
    [componentType.PURE_IMG]: PureImg_rt,
}
export function mapToRtComponents(val = componentType.HEADR_NAV) {
    return rtComponentBaseMap[val];
}