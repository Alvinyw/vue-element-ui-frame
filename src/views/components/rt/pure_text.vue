<template>
    <el-row class="pure-img">
        <p class="com-nm">文本</p>
        <el-collapse value="1">
            <el-collapse-item title="样式设置" name="1">
                <el-row class="com-wrapper">
                    <el-form label-position="left" :model="obj" label-width="100px">
                        <el-form-item label="文本">
                            <el-input v-model="obj.text"></el-input>
                        </el-form-item>
                        <el-form-item label="字体大小">
                            <el-input v-model="obj.fontSize"><template slot="append">px</template></el-input>
                        </el-form-item>
                        <el-form-item label="字体颜色">
                            <el-color-picker v-model="obj.color" show-alpha></el-color-picker>
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
    name: "PureText",
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
        obj(oldVal, newVal) {

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
.pure-img {}
</style>