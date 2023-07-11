<template>
    <el-container class="edit-index">
        <el-header class="sec-hd">
            <el-row class="lt"><el-button @click="goBack">返回</el-button></el-row>
            <el-row class="rt"><el-button @click="dialogPreviewCodeVisible = true">预览</el-button><el-button
                    @click="onHandleSave">保存</el-button><el-button type="primary"
                    @click="dialogTableVisible = true">应用</el-button></el-row>
        </el-header>
        <el-main class="sec-main">
            <el-row class="lt">
                <ul class="tabs">
                    <li label="组件" :class="activtedIndex == '1' ? 'activted' : ''" @click="onHandleTabClick('1')">组件</li>
                    <li label="素材" :class="activtedIndex == '2' ? 'activted' : ''" @click="onHandleTabClick('2')">素材</li>
                    <li label="模版" :class="activtedIndex == '3' ? 'activted' : ''" @click="onHandleTabClick('3')">模版</li>
                </ul>
                <el-row class="content-wrapper">
                    <el-row v-if="activtedIndex == '1'" class="zuJian">
                        <el-collapse v-model="activeNames">
                            <el-collapse-item :title="ZuJian[0].title" name="1">
                                <el-row class="item-wrapper">
                                    <div v-for="(item, index) in zuJianComInfo[0]" :key="index" class="item"
                                        @click="onAddZuJian(item.value)">
                                        <i :class="item.icon"></i>
                                        <span class="nm">{{ item.name }}</span>
                                    </div>
                                </el-row>
                            </el-collapse-item>
                            <el-collapse-item :title="ZuJian[1].title" name="2">
                                <el-row class="item-wrapper">
                                    <div v-for="(item, index) in zuJianComInfo[1]" :key="index" class="item"
                                        @click="onAddZuJian(item.value)">
                                        <i :class="item.icon"></i>
                                        <span class="nm">{{ item.name }}</span>
                                    </div>
                                </el-row>
                            </el-collapse-item>
                            <el-collapse-item :title="ZuJian[2].title" name="3">
                                <el-row class="item-wrapper">
                                    <div v-for="(item, index) in zuJianComInfo[2]" :key="index" class="item"
                                        @click="onAddZuJian(item.value)">
                                        <i :class="item.icon"></i>
                                        <span class="nm">{{ item.name }}</span>
                                    </div>
                                </el-row>
                            </el-collapse-item>
                        </el-collapse>
                    </el-row>
                    <el-row v-else-if="activtedIndex == '2'" class="suCai">
                        <div v-for="(item, index) in SuCai" :key="index" class="item">
                            <img :src="item" />
                        </div>
                    </el-row>
                    <el-row v-else class="moBan">
                        <div v-for="(item, index) in MoBan" :key="index" class="item">
                            <img :src="item" />
                            <span>618活动首页模版</span>
                        </div>
                    </el-row>
                </el-row>
            </el-row>
            <el-row class="md">
                <el-row class="iphone-view">
                    <div class="head-nav" :class="currentComType == componentType.HEADR_NAV ? 'actived' : ''"
                        :style="{ 'background-color': headerNav.property.bgColor }"
                        @click="onAddZuJian(componentType.HEADR_NAV, false)">
                        <img :src="bgHeaderNav" />
                        <h1 :style="{ 'color': headerNav.property.fontColor }">{{ headerNav.property.title }}</h1>
                    </div>
                    <MiddleIndex :page-layout="pageLayout" />
                    <div class="footer-nav" :class="currentComType == componentType.FOOTER_NAV ? 'actived' : ''"
                        @click="onAddZuJian(componentType.FOOTER_NAV, false)">
                        <div v-for="(item, index) in footerNav.property.list" :key="index" class="item">
                            <img :src="item.icon[0].url" />
                            <span class="nm">{{ item.text }}</span>
                        </div>
                    </div>
                </el-row>
            </el-row>
            <RightIndex :page-layout="pageLayout" />
        </el-main>
        <el-dialog class="dig_preCode" title="预览页面" :visible.sync="dialogPreviewCodeVisible">
            <img :src="previewCode" />
        </el-dialog>
        <el-dialog title="选择应用系统" :visible.sync="dialogTableVisible">
            <el-table class="dig-tb" ref="multipleTable" :data="appList" tooltip-effect="dark">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column label="应用名称" width="120">
                    <template slot-scope="scope">{{ scope.row.name }}</template>
                </el-table-column>
                <el-table-column prop="guisu" label="应用归属" width="120">
                </el-table-column>
            </el-table>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogTableVisible = false">取 消</el-button>
                <el-button type="primary" @click="onHandleApply">确 定</el-button>
            </span>
        </el-dialog>
    </el-container>
</template>
<script>
import { mapGetters } from "vuex";
import pageType from "@/const/pageType";
import MiddleIndex from "./middle.vue";
import RightIndex from "./right.vue";
import { componentType, componentTypeMap, componentProperty } from "@/const/componentType";
import bgHeaderNav from '@/assets/images/bg_headerNav.svg';
import previewCode from '@/assets/images/preview_code.png';
// 模版
import img_moban_1 from '@/assets/images/img_moban_1.jpg';
import img_moban_2 from '@/assets/images/img_moban_2.jpg';
import img_moban_3 from '@/assets/images/img_moban_3.jpg';
import img_moban_4 from '@/assets/images/img_moban_4.png';
import img_moban_5 from '@/assets/images/img_moban_5.jpg';
// 素材
import img_sucai_1 from '@/assets/images/img_sucai_1.jpg';
import img_sucai_2 from '@/assets/images/img_sucai_2.jpg';
import img_sucai_3 from '@/assets/images/img_sucai_3.jpg';
import img_sucai_4 from '@/assets/images/img_sucai_4.jpg';
import img_sucai_5 from '@/assets/images/img_sucai_5.jpg';

const ZuJian = [
    {
        title: '基础组件',
        list: [
            componentType.PURE_TEXT,
            componentType.RICH_TEXT,
            componentType.TEXT_NAV,
            componentType.TITLE,
            componentType.PURE_IMG,
            componentType.IMG,
            componentType.QUICK_ENTER,
            componentType.MARGIN,
        ]
    },
    {
        title: '业务组件',
        list: [
            componentType.LICAI,
            componentType.CUNKUAN,
            componentType.DAIKUAN,
        ]
    },
    {
        title: '系统组件',
        list: [
            componentType.SOUSUO,
            componentType.WANGDIAN,
        ]
    }
];
const SuCai = [img_sucai_5, img_sucai_1, img_sucai_2, img_sucai_3, img_sucai_4];
const MoBan = [
    img_moban_1, img_moban_5, img_moban_2, img_moban_4, img_moban_3
];
export default {
    name: "EditIndex",
    components: { MiddleIndex, RightIndex },
    data() {
        return {
            activtedIndex: '1',
            activeNames: ['1', '2', '3'],
            ZuJian,
            MoBan,
            SuCai,
            componentType,
            bgHeaderNav,
            previewCode,
            zuJianComInfo: [],
            templateId: new Date().getTime().toString(),
            dialogTableVisible: false,
            dialogPreviewCodeVisible: false,
            appList: [{
                Id: 'per',
                name: '个人手机银行',
                guisu: '渠道团队'
            }, {
                Id: 'ent',
                name: '企业手机银行',
                guisu: '渠道团队'
            }, {
                Id: 'wangdai',
                name: '赣银快贷小程序',
                guisu: '新网贷'
            }, {
                Id: 'xindai',
                name: '信贷小程序',
                guisu: '新网贷'
            }]
        }

    },
    computed: {
        ...mapGetters(["templateInfo", "currentComType"]),
        footerNav() {
            const { footerNav = {} } = this.templateInfo;
            return footerNav;
        },
        pageLayout() {
            const { pageLayout = {} } = this.templateInfo;
            return pageLayout;
        },
        headerNav() {
            const { headerNav = {} } = this.templateInfo;
            return headerNav;
        },
    },
    // beforeRouteEnter(to, from, next) {
    //     next(vm => {
    //         // 通过 `vm` 访问组件实例
    //         const { templateId = '' } = vm.$router.currentRoute.query;
    //         if (templateId) {
    //             vm.$api.app.perTemplateQry({ templateId })
    //                 .then(res => {
    //                     const { templateContext = '{}' } = res.data || {};
    //                     const _tmp = JSON.parse(templateContext);
    //                     // console.log('=======templateContext========', _tmp)
    //                     const { footerNav } = _tmp;
    //                     vm.$store.dispatch("app/updateSelectedIndex", - 1);
    //                     vm.$store.dispatch("app/updateCurrentComType", componentType.HEADR_NAV);
    //                     vm.$store.dispatch("app/updateTemplateInfo", { ..._tmp, footerNav: { ...footerNav, time: new Date().getTime() + 10 } });
    //                 });
    //         } else {
    //             const headerNav = componentProperty.filter(item => componentType.HEADR_NAV == item.value);
    //             const footerNav = componentProperty.filter(item => componentType.FOOTER_NAV == item.value);
    //             vm.$store.dispatch("app/updateSelectedIndex", - 1);
    //             vm.$store.dispatch("app/updateCurrentComType", componentType.HEADR_NAV);
    //             vm.$store.dispatch("app/updateTemplateInfo", { headerNav, pageLayout: [], footerNav });
    //         }
    //     })
    // },
    mounted() {
        this.generateComInfo();
        // console.log('=======router======', this.$router.currentRoute.query)
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        updateTemplateId() {
            const { templateId = '' } = this.$router.currentRoute.query;
            if (templateId) {
                this.templateId = templateId;
                return;
            }
            this.templateId = new Date().getTime().toString();
        },
        onHandleTabClick(index = '1') {
            this.activtedIndex = index;
        },
        generateComInfo() {
            ZuJian.forEach(item => {
                let _t = [];
                item.list.forEach(a => {
                    _t.push(componentTypeMap.filter(b => b.value == a)[0])
                })
                this.zuJianComInfo.push(_t)
            })
        },
        async onHandleSave() {
            const { title = '首页' } = this.headerNav.property;
            this.updateTemplateId();
            const { templateId = '' } = this.$router.currentRoute.query;
            if (templateId) {
                this.$api.app.perTemplateUpd({ templateId: this.templateId, templateName: title, templateContext: JSON.stringify(this.templateInfo) })
                    .then(() => {
                        this.$message({
                            message: '模版更新成功！',
                            type: 'success'
                        });
                    })
                    .catch(() => {
                        this.$message({
                            message: '模版更新失败！',
                            type: 'error'
                        });
                    });
                return;
            }
            this.$api.app.perTemplateAdd({ templateId: this.templateId, templateName: title, templateContext: JSON.stringify(this.templateInfo) })
                .then(() => {
                    this.$message({
                        message: '模版保存成功！',
                        type: 'success'
                    });
                })
                .catch(() => {
                    this.$message({
                        message: '模版保存失败！',
                        type: 'error'
                    });
                });
        },
        async onHandleApply() {
            await this.onHandleSave();
            const { PER_HOME } = pageType;
            this.$api.app.perPageTemplateMappingUse({ templateId: this.templateId, pageId: PER_HOME })
                .then(() => {
                    this.$message({
                        message: '模版应用成功！',
                        type: 'success'
                    });
                })
                .catch(() => {
                    this.$message({
                        message: '模版应用失败！',
                        type: 'error'
                    });
                }).finally(() => {
                    this.dialogTableVisible = false;
                });
        },
        onAddZuJian(val = componentType.HEADR_NAV, update = true) {
            this.$store.dispatch("app/updateCurrentComType", val);
            if (!update) {
                this.$store.dispatch("app/updateSelectedIndex", -1);
                return;
            }
            const { pageLayout = [] } = this.templateInfo;
            const _obj = componentProperty.filter(item => item.value == val)[0] || {};
            // console.log('======_obj43343========', _obj)
            const { value = '', property = {} } = _obj;
            pageLayout.push({
                value,
                property: { ...property }
            });
            this.$store.dispatch("app/updateTemplateInfo", { ...this.templateInfo, pageLayout });
            this.$store.dispatch("app/updateSelectedIndex", pageLayout.length - 1);
        }
    }
};
</script>

<style lang="less">
.edit-index {
    .dig-tb {
        table {
            width: 100% !important;
        }
    }

    .dig_preCode {
        .el-dialog__body {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 60%;
            }
        }
    }
}
</style>
<style scoped lang="less">
.edit-index {
    .dig-tb {
        table {
            width: 100% !important;
        }
    }

    .sec-hd {
        height: 59px;
        width: 100%;
        background: #fff;
        box-shadow: #eee 5px 5px 8px 6px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
    }

    .sec-main {
        background-color: #ebedf0;
        height: calc(100vh - 60px);
        position: relative;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;

        .lt {
            width: 320px;
            min-height: 100%;
            background-color: #fff;

            .tabs {
                margin: 8px;
                padding: 4px;
                height: 42px;
                background-color: #f7f8fa;

                li {
                    display: inline-block;
                    font-size: 14px;
                    line-height: 32px;
                    width: 33.33%;
                    text-align: center;
                    vertical-align: super;
                    cursor: pointer;

                    &.activted {
                        background-color: #fff;
                        border-radius: 4px;
                    }
                }
            }

            .content-wrapper {
                padding: 0 8px;
                height: calc(100vh - 118px);
                overflow: scroll;

                .zuJian {
                    .item-wrapper {

                        .item {
                            position: relative;
                            display: inline-block;
                            width: 95px;
                            height: 95px;
                            padding: 17px 0 0;
                            text-align: center;

                            i {
                                font-size: 30px;
                            }

                            .nm {
                                display: block;
                                width: 100%;
                                font-size: 14px;
                                text-align: center;
                                color: #000 !important;
                            }

                            &:hover {
                                background: #8558fa;
                                border-radius: 4px;
                                color: #fff;
                                cursor: pointer;

                                .nm {
                                    color: #fff !important;
                                }
                            }
                        }
                    }
                }

                .suCai {
                    .item {
                        width: 100%;
                        margin: 0 0 15px;
                        border: 1px solid #aaa;
                        border-radius: 4px;

                        &:hover {
                            cursor: pointer;
                            border-color: #7545F3;
                        }

                        img {
                            width: 100%;
                            vertical-align: text-bottom;
                        }
                    }
                }

                .moBan {
                    .item {
                        position: relative;
                        display: inline-block;
                        width: 149px;
                        margin: 0 0 10px;
                        padding: 0 0 25px;
                        border: 1px solid #aaa;

                        &:hover {
                            cursor: pointer;
                            border-color: #7545F3;
                        }

                        &:nth-child(2n) {
                            margin: 0 0 0 4px;
                        }

                        img {
                            width: 100%;
                        }

                        span {
                            display: inline-block;
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            text-align: center;
                            font-size: 14px;
                            line-height: 24px;
                            border-top: 1px solid #aaa;
                        }
                    }
                }
            }
        }

        .md {
            box-sizing: border-box;
            padding: 45px 0 20px;
            overflow-y: auto;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 320px;
            right: 320px;
            background: #ebedf0;
            display: flex;
            justify-content: center;

            .iphone-view {
                position: relative;
                width: 375px;
                height: 644px;
                background-color: #f5f5f5;
                box-shadow: 0 2px 4px 4px #ccc;

                .head-nav {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    position: relative;
                    width: 100%;
                    height: 64px;
                    box-sizing: border-box;
                    background-color: #fff;
                    transition: all 0.3s ease-in-out;
                    border: 2px solid transparent;

                    &.actived {
                        border: 2px solid #7545F3
                    }

                    img {
                        width: 100%;
                    }

                    h1 {
                        margin: 5px 0 0;
                        padding: 0;
                        font-size: 16px;
                        font-weight: bold;
                        text-align: center;
                    }
                }

                .footer-nav {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 50px;
                    display: flex;
                    justify-content: space-around;
                    background-color: #fff;
                    border: 2px solid transparent;

                    &.actived {
                        border: 2px solid #7545F3
                    }

                    .item {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        font-size: 12px;

                        img {
                            width: 20px;
                            height: 20px;
                        }

                        .nm {
                            margin: 3px 0 0;
                        }
                    }
                }
            }
        }
    }
}
</style>