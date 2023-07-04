<template>
    <el-container class="edit-index">
        <el-header class="sec-hd">
            <el-row class="lt"><el-button>返回</el-button></el-row>
            <el-row class="rt"><el-button>保存</el-button><el-button type="primary"
                    @click="onHandleApply">应用</el-button></el-row>
        </el-header>
        <el-main class="sec-main">
            <el-row class="lt">
                <ul class="tabs">
                    <li label="组件" :class="activtedIndex == '1' ? 'activted' : ''" @click="onHandleTabClick('1')">组件</li>
                    <li label="素材" :class="activtedIndex == '2' ? 'activted' : ''" @click="onHandleTabClick('2')">素材</li>
                    <li label="模版" :class="activtedIndex == '3' ? 'activted' : ''" @click="onHandleTabClick('3')">模版</li>
                </ul>
                <el-row class="content-wrapper">
                    <el-row class="sucai">
                        <el-collapse v-model="activeNames">
                            <el-collapse-item :title="SuCai[0].title" name="1">
                                <el-row class="item-wrapper">
                                    <div v-for="(item, index) in suCaiComInfo[0]" :key="index" class="item"
                                        @click="onAddSuCai(item.value)">
                                        <i :class="item.icon"></i>
                                        <span class="nm">{{ item.name }}</span>
                                    </div>
                                </el-row>
                            </el-collapse-item>
                            <el-collapse-item :title="SuCai[1].title" name="2">
                                <el-row class="item-wrapper">
                                    <div v-for="(item, index) in suCaiComInfo[1]" :key="index" class="item"
                                        @click="onAddSuCai(item.value)">
                                        <i :class="item.icon"></i>
                                        <span class="nm">{{ item.name }}</span>
                                    </div>
                                </el-row>
                            </el-collapse-item>
                            <el-collapse-item :title="SuCai[2].title" name="3">
                                <el-row class="item-wrapper">
                                    <div v-for="(item, index) in suCaiComInfo[2]" :key="index" class="item"
                                        @click="onAddSuCai(item.value)">
                                        <i :class="item.icon"></i>
                                        <span class="nm">{{ item.name }}</span>
                                    </div>
                                </el-row>
                            </el-collapse-item>
                        </el-collapse>
                    </el-row>
                </el-row>
            </el-row>
            <el-row class="md">
                <el-row class="iphone-view">
                    <div class="head-nav" :style="{ 'background-color': headerNav.bgColor }"
                        @click="onAddSuCai(componentType.HEADR_NAV)">
                        <img :src="bgHeaderNav" />
                        <h1 :style="{ 'color': headerNav.fontColor }">{{ headerNav.title }}</h1>
                    </div>
                    <div class="footer-nav" @click="onAddSuCai(componentType.FOOTER_NAV)">
                        <div v-for="(item, index) in footerNav.list" :key="index" class="item">
                            <img :src="item.icon" />
                            <span class="nm">{{ item.name }}</span>
                        </div>
                    </div>
                </el-row>
            </el-row>
            <RightIndex />
        </el-main>
    </el-container>
</template>
<script>
import { mapGetters } from "vuex";
import RightIndex from "./right.vue";
import { componentType, componentTypeMap } from "@/const/componentType";
import bgHeaderNav from '@/assets/images/bg_headerNav.svg';

const SuCai = [
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
]
export default {
    name: "EditIndex",
    components: { RightIndex },
    data() {
        return {
            activtedIndex: '1',
            activeNames: ['1', '2', '3'],
            SuCai,
            componentType,
            bgHeaderNav,
            suCaiComInfo: [],
        }
    },
    computed: {
        ...mapGetters(["templateInfo"]),
        footerNav() {
            const { footerNav = {} } = this.templateInfo;
            return footerNav;
        },
        headerNav() {
            const { headerNav = {} } = this.templateInfo;
            return headerNav;
        },
        pageLayout() {
            const { pageLayout = {} } = this.templateInfo;
            return pageLayout;
        },
    },
    watch: {
        headerNav(val) {
            this.$store.dispatch("app/updateTemplateInfo", { headerNav: val, pageLayout: this.pageLayout, footerNav: this.footerNav });
        }
    },
    mounted() {
        this.generateComInfo();
        // console.log('=======templateInfo======', this.suCaiComInfo, this.footerNav)
    },
    methods: {
        onHandleTabClick(index = '1') {
            this.activtedIndex = index;
        },
        generateComInfo() {
            SuCai.forEach(item => {
                let _t = [];
                item.list.forEach(a => {
                    _t.push(componentTypeMap.filter(b => b.value == a)[0])
                })
                this.suCaiComInfo.push(_t)
            })
        },
        onHandleApply() {
            this.$store.dispatch("app/updateTemplateInfo", {});
        },
        onAddSuCai(value = componentType.HEADR_NAV) {
            this.$store.dispatch("app/updateCurrentComType", value);
        }
    }
};
</script>

<style scoped lang="less">
.edit-index {
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

                .sucai {
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
                            }

                            &:hover {
                                background: #8558fa;
                                border-radius: 4px;
                                color: #fff;
                                cursor: pointer;
                            }
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
                box-shadow: 0 2px 4px 4px #ddd;

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
}</style>