<template>
    <el-row class="quick-enter">
        <p class="com-nm">快捷入口</p>
        <el-collapse value="1">
            <el-collapse-item title="样式设置" name="1">
                <el-row class="com-wrapper">
                    <el-form label-position="left" :model="obj" label-width="100px">
                        <el-form-item label="图标">
                            <el-upload class="upload-demo" action="#" :auto-upload="false" :limit="1"
                                :on-preview="handlePreview" :on-remove="handleRemove" :file-list="obj.icon"
                                list-type="picture">
                                <el-button size="small" type="primary">添加图标</el-button>
                                <div slot="tip" class="el-upload__tip"></div>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="文本">
                            <el-input v-model="obj.text"></el-input>
                        </el-form-item>
                        <el-form-item label="链接">
                            <el-select v-model="obj.link" clearable placeholder="跳转链接">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </el-row>
            </el-collapse-item>

        </el-collapse>
    </el-row>
</template>
<script>
import { mapGetters } from "vuex";
import { componentType, componentTypeMap, componentProperty } from "@/const/componentType";


export default {
    name: "QuickEnter",
    data() {
        return {
            options: [{
                value: '1',
                label: '首页'
            }, {
                value: '2',
                label: '个人中心'
            }, {
                value: '3',
                label: '积分中心'
            }, {
                value: '4',
                label: '活动中心'
            }],
        }
    },
    computed: {
        ...mapGetters(["templateInfo", "currentComType", "selectedIndex"]),
        obj() {
            const _obj = componentProperty.filter(item => item.value == componentType.QUICK_ENTER)[0] || {};
            return _obj.property;
        }
    },
    watch: {
        obj(oldVal, newVal) {
            // console.log('====obj=======', newVal)
            if (oldVal == newVal) return;
            const { pageLayout = {} } = this.templateInfo;
            pageLayout.forEach((item, index) => {
                if (index == this.selectedIndex) item.property = newVal;
            });
            this.$store.dispatch("app/updateTemplateInfo", { ...this.templateInfo, pageLayout, time: new Date().getTime() + 1000 });
        }
    },
    mounted() {
        // console.log('======obj=========', this.obj)
    },
    methods: {
        handleClick() { },
        handleRemove(file, fileList) {

        },
        handlePreview(file) {
        },
    }
};
</script>

<style lang="less">
.quick-enter {
    .com-wrapper {
        .up-img {
            // .el-upload {
            //     width: 50px;
            //     height: 50px;
            //     line-height: 58px;
            // }

            // .el-upload-list {
            //     .el-upload-list__item {
            //         height: 100px;
            //         width: 100px;
            //     }
            // }
        }
    }
}
</style>