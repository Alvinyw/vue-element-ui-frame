// 中间预览区
import { componentType, componentTypeMap } from "@/const/componentType";
import QuickEnter from "../components/md/quick-enter.vue";
import PureImg from "../components/md/pure-img.vue";
import Img from "../components/md/img.vue";
import PureText from "../components/md/pure_text.vue";
import TextNav from "../components/md/text_nav.vue";

// 右侧编辑区
import HeaderNav from "../components/rt/header-nav.vue";
import FooterNav from "../components/rt/footer-nav.vue";
import QuickEnter_rt from "../components/rt/quick-enter.vue";
import PureImg_rt from "../components/rt/pure-img.vue";
import Img_rt from "../components/rt/img.vue";
import PureText_rt from "../components/rt/pure_text.vue";
import TextNav_rt from "../components/rt/text_nav.vue";
import Margin from "../components/md/margin.vue";
import Margin_rt from "../components/rt/margin.vue";

export const mdComponentBaseMap = {
    [componentType.QUICK_ENTER]: QuickEnter,
    [componentType.PURE_IMG]: PureImg,
    [componentType.IMG]: Img,
    [componentType.PURE_TEXT]: PureText,
    [componentType.TEXT_NAV]: TextNav,
    [componentType.MARGIN]: Margin,
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
    [componentType.IMG]: Img_rt,
    [componentType.PURE_TEXT]: PureText_rt,
    [componentType.TEXT_NAV]: TextNav_rt,
    [componentType.MARGIN]: Margin_rt,
}
export function mapToRtComponents(val = componentType.HEADR_NAV) {
    return rtComponentBaseMap[val];
}