<template>
  <el-container class="home-index" style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>页面列表</template>
          <el-menu-item index="1-1">首页</el-menu-item>
          <el-menu-item index="1-2">存款理财页面</el-menu-item>
          <el-menu-item index="1-3">个人中心页面</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>审核中心</template>
          <el-menu-item index="3-1">待审核列表</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>操作记录</template>
          <el-menu-item index="2-1">操作记录查询</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: left; font-size: 14px">
        页面模版列表
        <el-dropdown>
          <span class="el-dropdown-link">
            廖益文 - 渠道团队<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>

      <el-main class="tp-wrapper" v-loading="loading" element-loading-text="模版列表加载中"
        element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.5)">
        <div class="tp-add" @click="onTemplateAdd"><i class="el-icon-plus"></i></div>
        <el-row v-for="(item, index) in templateList" :key="index" class="tp">
          <el-row class="sec-btm">
            <p class="name">{{ item.templateName }}</p>
            <p class="date">{{ randomTime() }}</p>
            <p class="btn-grp"><el-link type="primary" @click="onApplyDialogShow(item)">使用</el-link><el-link type="primary"
                @click="onTemplateEdit(item)">编辑</el-link><el-link type="primary"
                @click="previewDialogVisible = true">预览</el-link>
            </p>
          </el-row>
        </el-row>
      </el-main>
    </el-container>
    <el-dialog title="选择应用系统" :visible.sync="applyDialogVisible">
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
        <el-button @click="applyDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onTemplateApply">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog class="dig_preCode" title="预览页面" :visible.sync="previewDialogVisible">
      <img :src="previewCode" />
    </el-dialog>
  </el-container>
</template>

<script>
import pageType from "@/const/pageType";
import previewCode from '@/assets/images/preview_code.png';

export default {
  name: "HomeIndex",
  data() {
    return {
      templateList: [],
      applyDialogVisible: false,
      previewDialogVisible: false,
      previewCode,
      selectedTmpId: '',
      loading: false,
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
  mounted() {
    this.loading = true;
    this.$api.app.perTemplateQryAll()
      .then(res => {
        const { list = [] } = res.data || {};
        this.templateList = list;
      })
      .catch(() => {
      }).finally(()=> {
        this.loading = false;
      });
  },
  methods: {
    randomTime() {
      return `2023-0${Math.ceil(Math.random() * 9)}-0${Math.ceil(Math.random() * 9)}`;
    },
    // 新增模版
    onTemplateAdd() {
      const { PER_HOME } = pageType;
      this.$router.push({
        name: 'editIndex',
        query: { pageType: PER_HOME },
      })
    },
    // 显示模版应用弹框
    onApplyDialogShow(item = {}) {
      const { templateId = '' } = item;
      this.selectedTmpId = templateId;
      this.applyDialogVisible = true;
    },
    // 模版应用至系统
    async onTemplateApply() {
      const { PER_HOME } = pageType;
      this.$api.app.perPageTemplateMappingUse({ templateId: this.selectedTmpId, pageId: PER_HOME })
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
          this.applyDialogVisible = false;
        });
    },
    // 编辑模版
    onTemplateEdit(item = {}) {
      const { templateId } = item;
      const { PER_HOME } = pageType;
      this.$router.push({
        name: 'editIndex',
        query: { templateId, pageType: PER_HOME },
      })
    }
  }
};
</script>

<style lang="less">
.home-index {
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
.home-index {
  .el-header {
    background-color: #fdfdfd;
    color: #aaa;
    line-height: 60px;
    border-bottom: 1px solid #aaa;
    box-shadow: #eee 5px 5px 8px 6px;
    display: flex;
    justify-content: space-between;
  }

  .el-aside {
    color: #aaa;
    background-color: #fff;
    border-right: solid 1px #aaa;

    .el-menu {
      border: none;
    }
  }

  .tp-wrapper {
    .tp-add {
      display: inline-block;
      position: relative;
      margin: 15px;
      width: 200px;
      height: 310px;
      border: 1px solid #aaa;
      text-align: center;
      cursor: pointer;

      &:hover {
        border-color: #409eff;
        color: #409eff;
      }

      i {
        position: absolute;
        top: 50%;
        margin: -20px 0 0 -15px;
        font-size: 40px;
        font-weight: bold;
      }
    }

    .tp {
      display: inline-block;
      position: relative;
      margin: 15px;
      width: 200px;
      height: 310px;
      border: 1px solid #aaa;
      background-image: url("../../assets/images/tp_bg.png");
      background-repeat: no-repeat;
      background-size: contain;

      .sec-btm {
        position: absolute;
        bottom: 0;
        left: 0;
        font-size: 14px;
        width: 100%;

        p {
          padding: 0 5px;
          line-height: 24px;
        }

        .btn-grp {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          margin: 5px 0 0;
          height: 30px;
          border-top: 1px solid #aaa;
        }
      }
    }
  }
}
</style>