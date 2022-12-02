  const routes= [
  {
    path: "/",
    name: "首页",
    component: ()=>import("@components/Layout.vue"),
    redirect:'/home',
    children:[
      {
        path: "/home",
        name: "首页",
        component: () => import("../views/Home/Dashboards/index.vue"),
        children:[]
      },
      {
        path: "/Liquidate",
        name: "清算模块",
        children:[
          {
            path: "/Liquidate/liquidateLog",
            name: "清算日志",
            component: () => import("../views/Liquidate/liquidateLog/index.vue"),
            children:[]
          },
            {
              path: "/Liquidate/repaymentInquiry",
              name: "还款查询",
              component: () => import("../views/Liquidate/repaymentInquiry/index.vue"),
              children:[]
            }
        ]
      },
      {
        path: "/creditReview",
        name: "信审模块",
        children:[
          {
            path: "/creditReview/orderDispath",
            name: "订单分配",
            component: () => import("../views/CreditReview/orderDispath/index.vue"),
            children:[]
          },
            {
              path: "/creditReview/reviewTagList",
              name: "信审标签列表",
              component: () => import("../views/CreditReview/reviewTagList/index.vue"),
              children:[]
            }
        ]
      },
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login/index.vue"),
  },
 
]
export default routes