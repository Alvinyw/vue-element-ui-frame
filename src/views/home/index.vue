<template>
  <el-container class="home-index" style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>页面列表</template>
          <el-menu-item index="1-1">手机银行首页</el-menu-item>
          <el-menu-item index="1-2">个人中心页面</el-menu-item>
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
      </el-header>

      <el-main class="tp-wrapper">
        <el-row v-for="(item, index) in tableData" :key="index" class="tp">
          <el-row class="sec-btm">
            <p class="name">{{ item.name }}</p>
            <p class="date">{{ item.date }}</p>
            <p class="btn-grp"><el-link type="primary">使用</el-link><el-link type="primary"
                @click="onHandleEdit(item)">编辑</el-link></p>
          </el-row>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import pageType from "@/const/pageType";

export default {
  name: "HomeIndex",
  data() {
    const item = {
      date: '2016-05-02',
      name: '页面模板1',
      templateId: '32346456'
    };
    return {
      tableData: Array(10).fill(item)
    }
  },
  mounted() {
    this.$api.app.perPageTemplateQry({ pageId: 'a01' })
      .then(res => {
        this.isSubmitting = false;
        this.ifShowDialog = false;
        this.$emit("getMerchantInfo");
      })
      .catch(err => {
        this.isSubmitting = false;
        this.$message.error(err.message);
      });
  },
  methods: {
    onHandleEdit(item = {}) {
      const { templateId } = item;
      const { Home } = pageType;
      this.$router.push({
        name: 'editIndex',
        query: { templateId, pageType: Home },
      })
    }
  }
};
</script>

<style scoped lang="less">
.home-index {
  .el-header {
    background-color: #eee;
    color: #333;
    line-height: 60px;
    box-shadow: #ccc 5px 5px 8px 6px;
  }

  .el-aside {
    color: #333;
  }

  .tp-wrapper {
    .tp {
      display: inline-block;
      position: relative;
      margin: 15px;
      width: 200px;
      height: 310px;
      border: 1px solid #ddd;
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
          border-top: 1px solid #ddd;
        }
      }
    }
  }
}
</style>