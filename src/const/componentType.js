/**
 * 组件类型
 */
export const componentType = {
    // 基础组件
    IMG: 1, // 轮播海报
    PURE_TEXT: 2, // 纯文本
    TEXT_NAV: 3, // 文本导航
    RICH_TEXT: 4, // 富文本
    TITLE: 5, // 标题
    PURE_IMG: 6, // 图片
    QUICK_ENTER: 7, // 快捷入口

    // 业务组件
    LICAI: 11, // 理财
    CUNKUAN: 12, // 存款
    DAIKUAN: 13, // 贷款
    // 系统组件
    SOUSUO: 20, // 搜索
    WANGDIAN: 21, // 网点

    // 系统组件
    HEADR_NAV: 30, // 顶部导航
    FOOTER_NAV: 31, // 底部导航
};

export const componentTypeMap = [
    {
        value: componentType.IMG,
        icon: 'el-icon-picture',
        name: '轮播海报',
    },
    {
        value: componentType.TEXT_NAV,
        icon: 'el-icon-picture',
        name: '文本导航',
    },
    {
        value: componentType.PURE_TEXT,
        icon: 'el-icon-picture',
        name: '文本',
    },
    {
        value: componentType.RICH_TEXT,
        icon: 'el-icon-picture',
        name: '富文本',
    },
    {
        value: componentType.TITLE,
        icon: 'el-icon-picture',
        name: '标题',
    },
    {
        value: componentType.PURE_IMG,
        icon: 'el-icon-picture',
        name: '图片',
    },
    {
        value: componentType.QUICK_ENTER,
        icon: 'el-icon-picture',
        name: '快捷入口',
    },
    {
        value: componentType.LICAI,
        icon: 'el-icon-picture',
        name: '理财',
    },
    {
        value: componentType.CUNKUAN,
        icon: 'el-icon-picture',
        name: '存款',
    },
    {
        value: componentType.DAIKUAN,
        icon: 'el-icon-picture',
        name: '贷款',
    },
    {
        value: componentType.SOUSUO,
        icon: 'el-icon-picture',
        name: '搜索',
    },
    {
        value: componentType.WANGDIAN,
        icon: 'el-icon-picture',
        name: '网点',
    },
];