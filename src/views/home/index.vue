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

      <el-main class="tp-wrapper">
        <div class="tp-add" @click="onAdd"><i class="el-icon-plus"></i></div>
        <el-row v-for="(item, index) in tableData" :key="index" class="tp">
          <el-row class="sec-btm">
            <p class="name">{{ item.templateName }}</p>
            <p class="date">{{ radomTime() }}</p>
            <p class="btn-grp"><el-link type="primary" @click="onHandShiyong(item)">使用</el-link><el-link type="primary"
                @click="onHandleEdit(item)">编辑</el-link><el-link type="primary"
                @click="dialogPreviewCodeVisible = true">预览</el-link>
            </p>
          </el-row>
        </el-row>
      </el-main>
    </el-container>
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
    <el-dialog class="dig_preCode" title="预览页面" :visible.sync="dialogPreviewCodeVisible">
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
      tableData: [],
      dialogTableVisible: false,
      dialogPreviewCodeVisible: false,
      previewCode,
      selectedTmpId: '',
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
    // const _res = { "respCode": "00000000", "respMessage": "交易成功", "data": { "list": [{ "templateId": "1688643039791", "templateName": "手机银行首页", "templateContext": "{\"headerNav\":{\"value\":30,\"property\":{\"bgColor\":\"rgba(255, 255, 255, 1)\",\"fontColor\":\"rgba(0, 0, 0, 1)\",\"title\":\"手机银行首页\"}},\"pageLayout\":[{\"value\":1,\"property\":{\"height\":\"250\",\"showArrow\":true,\"imgs\":[]}}],\"footerNav\":{\"value\":31,\"property\":{\"activeColor\":\"#E74C75\",\"bgColor\":\"#FFF\",\"defaultColor\":\"#666\",\"list\":[{\"icon\":[{\"uid\":\"766ebbb9052d514c918bb2c97de23c25\",\"url\":\"https://b.yzcdn.cn/public_files/d3d6648d247605d7f9a37114ccb398dd.png\"}],\"iconActive\":[{\"uid\":\"4807ccc6b5ad7d472708c1d3cc738121\",\"url\":\"https://b.yzcdn.cn/public_files/29fe5014bcb19d4ebffac87a3cf4cb68.png\"}],\"link\":\"1\",\"text\":\"首页\"},{\"icon\":[{\"uid\":\"898877aefef20940e3487d6a927e316e\",\"url\":\"https://b.yzcdn.cn/public_files/b26f9134010831fc346b010f09fcf55c.png\"}],\"iconActive\":[{\"uid\":\"e3aaeb84d4c17a435db849acb1639195\",\"url\":\"https://b.yzcdn.cn/public_files/8cca4c2c2bbe5744ba78e4a0941410ef.png\"}],\"link\":\"2\",\"text\":\"预约\"},{\"icon\":[{\"uid\":\"295aeb0d9fdf1847716a6b751cd003d1\",\"url\":\"https://b.yzcdn.cn/public_files/c43a360c499dd012ebd087ba2523be48.png\"}],\"iconActive\":[{\"uid\":\"49d35201f2051f4f95cbdb93c95d23b0\",\"url\":\"https://b.yzcdn.cn/public_files/6bfb69585388c3840a200726087a9d71.png\"}],\"link\":\"3\",\"text\":\"服务\"},{\"icon\":[{\"uid\":\"6aaa2268388ace4676ba630de97a219c\",\"url\":\"https://b.yzcdn.cn/public_files/4037fb640218ffcb7c32ee6e4ecd40a4.png\"}],\"iconActive\":[{\"uid\":\"465084811b4cfd4b8478d233effd2b96\",\"url\":\"https://b.yzcdn.cn/public_files/4b532299aee643b0fc7b811737a9cbb5.png\"}],\"link\":\"4\",\"text\":\"我的\"}]}}}", "remark": null }, { "templateId": "1688643048555", "templateName": "手机银行个人中心页", "templateContext": "{\"headerNav\":{\"value\":30,\"property\":{\"bgColor\":\"rgba(255, 255, 255, 1)\",\"fontColor\":\"rgba(0, 0, 0, 1)\",\"title\":\"手机银行个人中心页\"}},\"pageLayout\":[{\"value\":1,\"property\":{\"height\":\"250\",\"showArrow\":true,\"imgs\":[]}}],\"footerNav\":{\"value\":31,\"property\":{\"activeColor\":\"#E74C75\",\"bgColor\":\"#FFF\",\"defaultColor\":\"#666\",\"list\":[{\"icon\":[{\"uid\":\"766ebbb9052d514c918bb2c97de23c25\",\"url\":\"https://b.yzcdn.cn/public_files/d3d6648d247605d7f9a37114ccb398dd.png\"}],\"iconActive\":[{\"uid\":\"4807ccc6b5ad7d472708c1d3cc738121\",\"url\":\"https://b.yzcdn.cn/public_files/29fe5014bcb19d4ebffac87a3cf4cb68.png\"}],\"link\":\"1\",\"text\":\"首页\"},{\"icon\":[{\"uid\":\"898877aefef20940e3487d6a927e316e\",\"url\":\"https://b.yzcdn.cn/public_files/b26f9134010831fc346b010f09fcf55c.png\"}],\"iconActive\":[{\"uid\":\"e3aaeb84d4c17a435db849acb1639195\",\"url\":\"https://b.yzcdn.cn/public_files/8cca4c2c2bbe5744ba78e4a0941410ef.png\"}],\"link\":\"2\",\"text\":\"预约\"},{\"icon\":[{\"uid\":\"295aeb0d9fdf1847716a6b751cd003d1\",\"url\":\"https://b.yzcdn.cn/public_files/c43a360c499dd012ebd087ba2523be48.png\"}],\"iconActive\":[{\"uid\":\"49d35201f2051f4f95cbdb93c95d23b0\",\"url\":\"https://b.yzcdn.cn/public_files/6bfb69585388c3840a200726087a9d71.png\"}],\"link\":\"3\",\"text\":\"服务\"},{\"icon\":[{\"uid\":\"6aaa2268388ace4676ba630de97a219c\",\"url\":\"https://b.yzcdn.cn/public_files/4037fb640218ffcb7c32ee6e4ecd40a4.png\"}],\"iconActive\":[{\"uid\":\"465084811b4cfd4b8478d233effd2b96\",\"url\":\"https://b.yzcdn.cn/public_files/4b532299aee643b0fc7b811737a9cbb5.png\"}],\"link\":\"4\",\"text\":\"我的\"}]}}}", "remark": null }, { "templateId": "1688643099550", "templateName": "手机银行财富页", "templateContext": "{\"headerNav\":{\"value\":30,\"property\":{\"bgColor\":\"rgba(255, 255, 255, 1)\",\"fontColor\":\"rgba(0, 0, 0, 1)\",\"title\":\"手机银行财富页\"}},\"pageLayout\":[{\"value\":1,\"property\":{\"height\":\"250\",\"showArrow\":true,\"imgs\":[]}}],\"footerNav\":{\"value\":31,\"property\":{\"activeColor\":\"#E74C75\",\"bgColor\":\"#FFF\",\"defaultColor\":\"#666\",\"list\":[{\"icon\":[{\"uid\":\"e8c6b13fe845994830192a6c63793d1a\",\"url\":\"https://b.yzcdn.cn/public_files/d3d6648d247605d7f9a37114ccb398dd.png\"}],\"iconActive\":[{\"uid\":\"9e2029cde3381b4197b9532d97dcad79\",\"url\":\"https://b.yzcdn.cn/public_files/29fe5014bcb19d4ebffac87a3cf4cb68.png\"}],\"link\":\"1\",\"text\":\"首页\"},{\"icon\":[{\"uid\":\"94fcb5aea23bd544d179d35e35aff7bf\",\"url\":\"https://b.yzcdn.cn/public_files/b26f9134010831fc346b010f09fcf55c.png\"}],\"iconActive\":[{\"uid\":\"a5712ec60565c24784888cb6aac4f0a2\",\"url\":\"https://b.yzcdn.cn/public_files/8cca4c2c2bbe5744ba78e4a0941410ef.png\"}],\"link\":\"2\",\"text\":\"预约\"},{\"icon\":[{\"uid\":\"0fd4075d15832f45be0b6c27dad5517c\",\"url\":\"https://b.yzcdn.cn/public_files/c43a360c499dd012ebd087ba2523be48.png\"}],\"iconActive\":[{\"uid\":\"0141e6160b2a67448598a5f043736e82\",\"url\":\"https://b.yzcdn.cn/public_files/6bfb69585388c3840a200726087a9d71.png\"}],\"link\":\"3\",\"text\":\"服务\"},{\"icon\":[{\"uid\":\"c8ba10b48a70e446764989073a03a1b5\",\"url\":\"https://b.yzcdn.cn/public_files/4037fb640218ffcb7c32ee6e4ecd40a4.png\"}],\"iconActive\":[{\"uid\":\"4a77d638e5d8334e56f8cd7194814610\",\"url\":\"https://b.yzcdn.cn/public_files/4b532299aee643b0fc7b811737a9cbb5.png\"}],\"link\":\"4\",\"text\":\"我的\"}]}}}", "remark": null }, { "templateId": "1688643104318", "templateName": "手机银行生活页", "templateContext": "{\"headerNav\":{\"value\":30,\"property\":{\"bgColor\":\"rgba(255, 255, 255, 1)\",\"fontColor\":\"rgba(0, 0, 0, 1)\",\"title\":\"手机银行生活页\"}},\"pageLayout\":[{\"value\":1,\"property\":{\"height\":\"250\",\"showArrow\":true,\"imgs\":[]}}],\"footerNav\":{\"value\":31,\"property\":{\"activeColor\":\"#E74C75\",\"bgColor\":\"#FFF\",\"defaultColor\":\"#666\",\"list\":[{\"icon\":[{\"uid\":\"e8c6b13fe845994830192a6c63793d1a\",\"url\":\"https://b.yzcdn.cn/public_files/d3d6648d247605d7f9a37114ccb398dd.png\"}],\"iconActive\":[{\"uid\":\"9e2029cde3381b4197b9532d97dcad79\",\"url\":\"https://b.yzcdn.cn/public_files/29fe5014bcb19d4ebffac87a3cf4cb68.png\"}],\"link\":\"1\",\"text\":\"首页\"},{\"icon\":[{\"uid\":\"94fcb5aea23bd544d179d35e35aff7bf\",\"url\":\"https://b.yzcdn.cn/public_files/b26f9134010831fc346b010f09fcf55c.png\"}],\"iconActive\":[{\"uid\":\"a5712ec60565c24784888cb6aac4f0a2\",\"url\":\"https://b.yzcdn.cn/public_files/8cca4c2c2bbe5744ba78e4a0941410ef.png\"}],\"link\":\"2\",\"text\":\"预约\"},{\"icon\":[{\"uid\":\"0fd4075d15832f45be0b6c27dad5517c\",\"url\":\"https://b.yzcdn.cn/public_files/c43a360c499dd012ebd087ba2523be48.png\"}],\"iconActive\":[{\"uid\":\"0141e6160b2a67448598a5f043736e82\",\"url\":\"https://b.yzcdn.cn/public_files/6bfb69585388c3840a200726087a9d71.png\"}],\"link\":\"3\",\"text\":\"服务\"},{\"icon\":[{\"uid\":\"c8ba10b48a70e446764989073a03a1b5\",\"url\":\"https://b.yzcdn.cn/public_files/4037fb640218ffcb7c32ee6e4ecd40a4.png\"}],\"iconActive\":[{\"uid\":\"4a77d638e5d8334e56f8cd7194814610\",\"url\":\"https://b.yzcdn.cn/public_files/4b532299aee643b0fc7b811737a9cbb5.png\"}],\"link\":\"4\",\"text\":\"我的\"}]}}}", "remark": null }, { "templateId": "1688643108620", "templateName": "手机银行贷款页", "templateContext": "{\"headerNav\":{\"value\":30,\"property\":{\"bgColor\":\"rgba(255, 255, 255, 1)\",\"fontColor\":\"rgba(0, 0, 0, 1)\",\"title\":\"手机银行贷款页\"}},\"pageLayout\":[{\"value\":1,\"property\":{\"height\":\"250\",\"showArrow\":true,\"imgs\":[]}}],\"footerNav\":{\"value\":31,\"property\":{\"activeColor\":\"#E74C75\",\"bgColor\":\"#FFF\",\"defaultColor\":\"#666\",\"list\":[{\"icon\":[{\"uid\":\"e8c6b13fe845994830192a6c63793d1a\",\"url\":\"https://b.yzcdn.cn/public_files/d3d6648d247605d7f9a37114ccb398dd.png\"}],\"iconActive\":[{\"uid\":\"9e2029cde3381b4197b9532d97dcad79\",\"url\":\"https://b.yzcdn.cn/public_files/29fe5014bcb19d4ebffac87a3cf4cb68.png\"}],\"link\":\"1\",\"text\":\"首页\"},{\"icon\":[{\"uid\":\"94fcb5aea23bd544d179d35e35aff7bf\",\"url\":\"https://b.yzcdn.cn/public_files/b26f9134010831fc346b010f09fcf55c.png\"}],\"iconActive\":[{\"uid\":\"a5712ec60565c24784888cb6aac4f0a2\",\"url\":\"https://b.yzcdn.cn/public_files/8cca4c2c2bbe5744ba78e4a0941410ef.png\"}],\"link\":\"2\",\"text\":\"预约\"},{\"icon\":[{\"uid\":\"0fd4075d15832f45be0b6c27dad5517c\",\"url\":\"https://b.yzcdn.cn/public_files/c43a360c499dd012ebd087ba2523be48.png\"}],\"iconActive\":[{\"uid\":\"0141e6160b2a67448598a5f043736e82\",\"url\":\"https://b.yzcdn.cn/public_files/6bfb69585388c3840a200726087a9d71.png\"}],\"link\":\"3\",\"text\":\"服务\"},{\"icon\":[{\"uid\":\"c8ba10b48a70e446764989073a03a1b5\",\"url\":\"https://b.yzcdn.cn/public_files/4037fb640218ffcb7c32ee6e4ecd40a4.png\"}],\"iconActive\":[{\"uid\":\"4a77d638e5d8334e56f8cd7194814610\",\"url\":\"https://b.yzcdn.cn/public_files/4b532299aee643b0fc7b811737a9cbb5.png\"}],\"link\":\"4\",\"text\":\"我的\"}]}}}", "remark": null }, { "templateId": "1688643120768", "templateName": "网贷小程序个人中心页", "templateContext": "{\"headerNav\":{\"value\":30,\"property\":{\"bgColor\":\"rgba(255, 255, 255, 1)\",\"fontColor\":\"rgba(0, 0, 0, 1)\",\"title\":\"网贷小程序个人中心页\"}},\"pageLayout\":[{\"value\":1,\"property\":{\"height\":\"250\",\"showArrow\":true,\"imgs\":[]}}],\"footerNav\":{\"value\":31,\"property\":{\"activeColor\":\"#E74C75\",\"bgColor\":\"#FFF\",\"defaultColor\":\"#666\",\"list\":[{\"icon\":[{\"uid\":\"e8c6b13fe845994830192a6c63793d1a\",\"url\":\"https://b.yzcdn.cn/public_files/d3d6648d247605d7f9a37114ccb398dd.png\"}],\"iconActive\":[{\"uid\":\"9e2029cde3381b4197b9532d97dcad79\",\"url\":\"https://b.yzcdn.cn/public_files/29fe5014bcb19d4ebffac87a3cf4cb68.png\"}],\"link\":\"1\",\"text\":\"首页\"},{\"icon\":[{\"uid\":\"94fcb5aea23bd544d179d35e35aff7bf\",\"url\":\"https://b.yzcdn.cn/public_files/b26f9134010831fc346b010f09fcf55c.png\"}],\"iconActive\":[{\"uid\":\"a5712ec60565c24784888cb6aac4f0a2\",\"url\":\"https://b.yzcdn.cn/public_files/8cca4c2c2bbe5744ba78e4a0941410ef.png\"}],\"link\":\"2\",\"text\":\"预约\"},{\"icon\":[{\"uid\":\"0fd4075d15832f45be0b6c27dad5517c\",\"url\":\"https://b.yzcdn.cn/public_files/c43a360c499dd012ebd087ba2523be48.png\"}],\"iconActive\":[{\"uid\":\"0141e6160b2a67448598a5f043736e82\",\"url\":\"https://b.yzcdn.cn/public_files/6bfb69585388c3840a200726087a9d71.png\"}],\"link\":\"3\",\"text\":\"服务\"},{\"icon\":[{\"uid\":\"c8ba10b48a70e446764989073a03a1b5\",\"url\":\"https://b.yzcdn.cn/public_files/4037fb640218ffcb7c32ee6e4ecd40a4.png\"}],\"iconActive\":[{\"uid\":\"4a77d638e5d8334e56f8cd7194814610\",\"url\":\"https://b.yzcdn.cn/public_files/4b532299aee643b0fc7b811737a9cbb5.png\"}],\"link\":\"4\",\"text\":\"我的\"}]}}}", "remark": null }, { "templateId": "1688643127514", "templateName": "小程序个人中心页", "templateContext": "{\"headerNav\":{\"value\":30,\"property\":{\"bgColor\":\"rgba(255, 255, 255, 1)\",\"fontColor\":\"rgba(0, 0, 0, 1)\",\"title\":\"小程序个人中心页\"}},\"pageLayout\":[{\"value\":1,\"property\":{\"height\":\"250\",\"showArrow\":true,\"imgs\":[]}}],\"footerNav\":{\"value\":31,\"property\":{\"activeColor\":\"#E74C75\",\"bgColor\":\"#FFF\",\"defaultColor\":\"#666\",\"list\":[{\"icon\":[{\"uid\":\"e8c6b13fe845994830192a6c63793d1a\",\"url\":\"https://b.yzcdn.cn/public_files/d3d6648d247605d7f9a37114ccb398dd.png\"}],\"iconActive\":[{\"uid\":\"9e2029cde3381b4197b9532d97dcad79\",\"url\":\"https://b.yzcdn.cn/public_files/29fe5014bcb19d4ebffac87a3cf4cb68.png\"}],\"link\":\"1\",\"text\":\"首页\"},{\"icon\":[{\"uid\":\"94fcb5aea23bd544d179d35e35aff7bf\",\"url\":\"https://b.yzcdn.cn/public_files/b26f9134010831fc346b010f09fcf55c.png\"}],\"iconActive\":[{\"uid\":\"a5712ec60565c24784888cb6aac4f0a2\",\"url\":\"https://b.yzcdn.cn/public_files/8cca4c2c2bbe5744ba78e4a0941410ef.png\"}],\"link\":\"2\",\"text\":\"预约\"},{\"icon\":[{\"uid\":\"0fd4075d15832f45be0b6c27dad5517c\",\"url\":\"https://b.yzcdn.cn/public_files/c43a360c499dd012ebd087ba2523be48.png\"}],\"iconActive\":[{\"uid\":\"0141e6160b2a67448598a5f043736e82\",\"url\":\"https://b.yzcdn.cn/public_files/6bfb69585388c3840a200726087a9d71.png\"}],\"link\":\"3\",\"text\":\"服务\"},{\"icon\":[{\"uid\":\"c8ba10b48a70e446764989073a03a1b5\",\"url\":\"https://b.yzcdn.cn/public_files/4037fb640218ffcb7c32ee6e4ecd40a4.png\"}],\"iconActive\":[{\"uid\":\"4a77d638e5d8334e56f8cd7194814610\",\"url\":\"https://b.yzcdn.cn/public_files/4b532299aee643b0fc7b811737a9cbb5.png\"}],\"link\":\"4\",\"text\":\"我的\"}]}}}", "remark": null }], "commonResponseHead": { "globalJnlNo": "684158404248182784", "respTime": "2025-03-02 22:01:12", "processState": "OK", "requestChannelId": "PMBS" } } }
    // const { list = [] } = _res.data || {};
    // this.tableData = list;
    this.$api.app.perTemplateQryAll()
      .then(res => {
        const { list = [] } = res.data || {};
        this.tableData = list;
      })
      .catch(() => {
      });
  },
  methods: {
    radomTime() {
      return `2023-0${Math.ceil(Math.random() * 9)}-0${Math.ceil(Math.random() * 9)}`;
    },
    onAdd() {
      const { PER_HOME } = pageType;
      this.$router.push({
        name: 'editIndex',
        query: { pageType: PER_HOME },
      })
    },
    onHandShiyong(item = {}) {
      const { templateId = '' } = item;
      this.selectedTmpId = templateId;
      this.dialogTableVisible = true;
    },
    async onHandleApply() {
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
          this.dialogTableVisible = false;
        });
    },
    onHandleEdit(item = {}) {
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