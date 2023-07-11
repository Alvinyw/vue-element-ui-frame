// 中间预览区
import { componentType } from "@/const/componentType";
import QuickEnter from "../components/md/quick-enter.vue";
import PureImg from "../components/md/pure-img.vue";
import Img from "../components/md/img.vue";
import PureText from "../components/md/pure-text.vue";
import TextNav from "../components/md/text-nav.vue";

// 右侧编辑区
import HeaderNav from "../components/rt/header-nav.vue";
import FooterNav from "../components/rt/footer-nav.vue";
import QuickEnter_rt from "../components/rt/quick-enter.vue";
import PureImg_rt from "../components/rt/pure-img.vue";
import Img_rt from "../components/rt/img.vue";
import PureText_rt from "../components/rt/pure-text.vue";
import TextNav_rt from "../components/rt/text-nav.vue";
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

// blob 转 base64
export function blobToDataURL(blob, callback) {
    let a = new FileReader();
    a.onload = function (e) {
        callback(e.target.result);
    }
    a.readAsDataURL(blob);
}

export function urlToBase64(url, type = 'image/jpeg') {
    return new Promise((resolve, reject) => {
        const img = new Image()
        const canvas = document.createElement('canvas');
        img.crossOrigin = '*';
        img.onload = function () {
            const width = img.width, height = img.height;
            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext('2d');
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, width, height);
            const base64 = canvas.toDataURL(type);
            resolve(base64);
        };
        img.onerror = function (err) {
            reject(new Error(`message:${err}`));
        };
        img.src = url;
    });
}
