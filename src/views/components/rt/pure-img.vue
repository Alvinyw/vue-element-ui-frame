<template>
    <el-row class="pure-img">
        <p class="com-nm">图片</p>
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
                        
                    </el-form>
                </el-row>
            </el-collapse-item>

        </el-collapse>
    </el-row>
</template>
<script>
import { mapGetters } from "vuex";


export default {
    name: "PureImg",
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
.pure-img {

}
</style>