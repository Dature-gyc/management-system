import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

let routes = [
  // 系统首页
  {
    path: "/",
    redirect: "",
    component: () => import("../views/sys_home/index")
  },
  {
    path: "/sys_home/show_map",
    component: () => import("../views/sys_home/map_show")
  },
  // 商品管理
  {
    path: "/goods_management/add_goods",
    component: () => import("../views/goods_management/add_goods")
  },
  {
    path: "/goods_management/goods_verb",
    component: () => import("../views/goods_management/goods_verb")
  },
  {
    path: "/goods_management/noun_management",
    component: () => import("../views/goods_management/noun_management")
  },
  {
    path: "/goods_management/verb_management",
    component: () => import("../views/goods_management/verb_management")
  },
  // 交易管理
  {
    path: "/transaction_management/order_management",
    component: () => import("../views/transaction_management/order_management")
  },
  {
    path: "/transaction_management/refound_management",
    component: () =>
      import("../views/transaction_management/refound_management")
  },
  {
    path: "/transaction_management/trade_count",
    component: () => import("../views/transaction_management/trade_count")
  },
  {
    path: "/transaction_management/order_processing",
    component: () => import("../views/transaction_management/order_processing")
  },
  {
    path: "/transaction_management/logistics_management",
    component: () =>
      import("../views/transaction_management/logistics_management")
  },
  {
    path: "/transaction_management/order_count",
    component: () => import("../views/transaction_management/order_count")
  },
  // 支付管理
  {
    path: "/payment_management/pay_management",
    component: () => import("../views/payment_management/pay_management")
  },
  {
    path: "/payment_management/pay_deploy",
    component: () => import("../views/payment_management/pay_deploy")
  },
  // 系统管理
  {
    path: "/system_management/column_set",
    component: () => import("../views/system_management/column_set")
  },
  {
    path: "/system_management/column_set",
    component: () => import("../views/system_management/column_set")
  },
  {
    path: "/system_management/column_set",
    component: () => import("../views/system_management/column_set")
  },
  {
    path: "/system_management/determination_page",
    component: () => import("../views/system_management/determination_page")
  },
  {
    path: "/system_management/sys_set",
    component: () => import("../views/system_management/sys_set")
  },
  {
    path: "/system_management/sys_detail",
    component: () => import("../views/system_management/sys_detail")
  },
  //  文章管理
  {
    path: "/article_management",
    component: () => import("../views/article_management/article_management")
  },
  // 管理员
  {
    path: "/administrators/jurisdiction_set",
    component: () => import("../views/administrators/jurisdiction_set")
  },
  {
    path: "/administrators/admin_set",
    component: () => import("../views/administrators/admin_set")
  },
  {
    path: "/administrators/admin_info",
    component: () => import("../views/administrators/admin_info")
  },
  // 会员管理
  {
    path: "/member_management/member_list",
    component: () => import("../views/member_management/member_list")
  },
  // 报表管理
  {
    path: "/report_management/visit_count",
    component: () => import("../views/report_management/visit_count")
  },
  {
    path: "/report_management/achievement_count",
    component: () => import("../views/report_management/achievement_count")
  },
  // 广告管理
  {
    path: "/advertising_management/achievement_count",
    component: () => import("../views/advertising_management/advertising_list")
  },
  {
    path: "/advertising_management/achievement_classify",
    component: () => import("../views/advertising_management/advertising_classify")
  },
  // 单页管理
  {
    path: "/single_management/store_list",
    component: () => import("../views/single_management/store_list")
  },
  // 前段管理
  {
    path: "/fullstack_management/column_management",
    component: () => import("../views/fullstack_management/column_management")
  },
  // 留言管理
  {
    path: "/message_management/message_feedback",
    component: () => import("../views/message_management/message_feedback")
  },
  {
    path: "/message_management/message_notify",
    component: () => import("../views/message_management/message_notify")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;