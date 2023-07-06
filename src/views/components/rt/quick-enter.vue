<template>
    <el-row class="quick-enter">
        <p class="com-nm">快捷入口</p>
        <el-collapse value="1">
            <el-collapse-item title="样式设置" name="1">
                <el-row class="com-wrapper">
                    <el-form label-position="left" :model="obj" label-width="100px">
                        <el-form-item label="图标">
                            <el-upload class="upload-demo" action="#" :on-change="handleChange" :auto-upload="false" :limit="1" :file-list="obj.icon"
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
                                <el-option v-for="item in linkAry" :key="item.value" :label="item.label"
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


export default {
    name: "QuickEnter",
    props: {
        options: {
            type: Object,
            required: false,
            default: () => ({
                property: {},
                value: ''
            }),
        },
    },
    data() {
        return {
            obj: {},
            linkAry: [{
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
        // obj() {
        //     const { property = {} } = this.options || {};
        //     return JSON.parse(JSON.stringify(property));
        // }
    },
    watch: {
        obj(newVal, oldVal) {
            // console.log('====obj-234=======', oldVal, newVal, oldVal == newVal)
            if (JSON.stringify(oldVal) == JSON.stringify(newVal)) return;
            const { pageLayout = {} } = this.templateInfo;
            pageLayout.forEach((item, index) => {
                if (index == this.selectedIndex) item.property = {...newVal};
            });
            this.$store.dispatch("app/updateTemplateInfo", { ...this.templateInfo, pageLayout });
        }
    },
    mounted() {
        const { property = {} } = this.options || {};
        this.obj = JSON.parse(JSON.stringify(property));
        // console.log('======obj=========', this.obj)
    },
    methods: {
        handleChange(file, fileList) {
            // console.log('======file, fileList======', file, fileList)
        }
    }
};
</script>

<style lang="less">
</style>