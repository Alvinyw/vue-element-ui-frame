<template>
    <el-row class="quick-enter">
        <p class="com-nm">快捷入口</p>
        <el-collapse value="1">
            <el-collapse-item title="样式设置" name="1">
                <el-row class="com-wrapper">
                    <el-form label-position="left" :model="headerNav" label-width="100px">
                        <el-form-item label="图标">
                            <el-upload class="upload-demo" action="#" :auto-upload="false" :on-preview="handlePreview" :on-remove="handleRemove"
                                :file-list="fileList" list-type="picture">
                                <el-button size="small" type="primary">添加图标</el-button>
                                <div slot="tip" class="el-upload__tip"></div>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="文本">
                            <el-input v-model="headerNav.title"></el-input>
                        </el-form-item>
                        <el-form-item label="链接">
                            <el-select v-model="value" clearable placeholder="跳转链接">
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
import { componentType, componentTypeMap } from "@/const/componentType";


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
            value: '',
            fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
            // 图片上传
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false
        }
    },
    computed: {
        ...mapGetters(["templateInfo"]),
        headerNav() {
            const { headerNav = {} } = this.templateInfo;
            return headerNav;
        },
    },
    watch: {

    },
    mounted() {

    },
    methods: {
        handleClick() { },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        }
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