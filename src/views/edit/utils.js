import { componentType, componentTypeMap } from "@/const/componentType";
import QuickEnter from "../components/md/quick-enter.vue";


export const componentBaseMap = {
    [componentType.QUICK_ENTER]: QuickEnter,
}

export function mapToComponents(list = []) {
    return list.map(item => {
        return { options: item, component: componentBaseMap[item.value] };
    });
}