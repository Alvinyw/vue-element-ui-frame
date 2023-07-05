import { getUUID } from "../../utils/lib"

export default {
  namespaced: true,
  state: {
    currentComType: '30', // 当前选中的组件
    selectedIndex: '0', // 当前选中的组件 index
    templateInfo: {
      headerNav: {
        bgColor: "rgba(255, 255, 255, 1)",
        fontColor: "rgba(0, 0, 0, 1)",
        title: '页面标题'
      },
      pageLayout: [
      ],
      footerNav: {
        property: {
          activeColor: "#E74C75",
          bgColor: "#FFF",
          defaultColor: "#666",
          list: [
            {
              icon: [{ uid: getUUID(), url: "https://b.yzcdn.cn/public_files/d3d6648d247605d7f9a37114ccb398dd.png" }],
              iconActive: [{ uid: getUUID(), url: "https://b.yzcdn.cn/public_files/29fe5014bcb19d4ebffac87a3cf4cb68.png" }],
              link: "1",
              text: "首页"
            },
            {
              icon: [{ uid: getUUID(), url: "https://b.yzcdn.cn/public_files/b26f9134010831fc346b010f09fcf55c.png" }],
              iconActive: [{ uid: getUUID(), url: "https://b.yzcdn.cn/public_files/8cca4c2c2bbe5744ba78e4a0941410ef.png" }],
              link: "2",
              text: "预约"
            },
            {
              icon: [{ uid: getUUID(), url: "https://b.yzcdn.cn/public_files/c43a360c499dd012ebd087ba2523be48.png" }],
              iconActive: [{ uid: getUUID(), url: "https://b.yzcdn.cn/public_files/6bfb69585388c3840a200726087a9d71.png" }],
              link: "3",
              text: "服务"
            },
            {
              icon: [{ uid: getUUID(), url: "https://b.yzcdn.cn/public_files/4037fb640218ffcb7c32ee6e4ecd40a4.png" }],
              iconActive: [{ uid: getUUID(), url: "https://b.yzcdn.cn/public_files/4b532299aee643b0fc7b811737a9cbb5.png" }],
              link: "4",
              text: "我的"
            }
          ],
        }
      }
    }
  },
  mutations: {
    UPDATE_TEMPLATE_INFO(state, status) {
      state.templateInfo = status
      console.log('=========templateInfo=========', status);
    },
    UPDATE_CURRENT_COM(state, val) {
      state.currentComType = val
      console.log('=========currentComType=========', val);
    },
    UPDATE_SELECTED_INDEX(state, val) {
      state.selectedIndex = val
      console.log('=========selectedIndex=========', val);
    },
  },
  actions: {
    updateTemplateInfo({ commit }, info) {
      commit('UPDATE_TEMPLATE_INFO', info)
    },
    updateCurrentComType({ commit }, val) {
      commit('UPDATE_CURRENT_COM', val)
    },
    updateSelectedIndex({ commit }, idx) {
      commit('UPDATE_SELECTED_INDEX', idx)
    },
  },
}