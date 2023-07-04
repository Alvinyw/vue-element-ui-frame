<template>
    <el-row class="quick-enter">
        <p class="com-nm">快捷入口</p>
        <el-collapse value="1">
            <el-collapse-item title="样式设置" name="1">
                <el-row class="com-wrapper">
                    <el-form label-position="left" :model="headerNav" label-width="100px">
                        <el-form-item label="图标">
                            <el-upload action="#" list-type="picture-card" :auto-upload="false">
                                <i slot="default" class="el-icon-plus"></i>
                                <div slot="file" slot-scope="{file}">
                                    <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                                    <span class="el-upload-list__item-actions">
                                        <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                                            <i class="el-icon-zoom-in"></i>
                                        </span>
                                        <span v-if="!disabled" class="el-upload-list__item-delete"
                                            @click="handleDownload(file)">
                                            <i class="el-icon-download"></i>
                                        </span>
                                        <span v-if="!disabled" class="el-upload-list__item-delete"
                                            @click="handleRemove(file)">
                                            <i class="el-icon-delete"></i>
                                        </span>
                                    </span>
                                </div>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="文本">
                            <el-input v-model="headerNav.title"></el-input>
                        </el-form-item>
                        <el-form-item label="链接">
                            <el-dropdown @click="handleClick">
                                <span class="el-dropdown-link">
                                    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                    <el-dropdown-item>狮子头</el-dropdown-item>
                                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
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
        handleRemove(file) {
            console.log(file);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleDownload(file) {
            console.log(file);
        }
    }
};
</script>

<style scoped lang="less"></style>