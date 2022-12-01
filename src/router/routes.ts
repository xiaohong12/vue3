  const routes= [
  {
    path: "/",
    name: "home",
    component: ()=>import("@components/Layout.vue"),
    redirect:'/ffd',
    children:[
      {
        path: "/transfers",
        name: "transfers",
        component: () => import("../views/transfers/IndexView.vue"),
        children:[]
      },
      {
        path: "/aboutdd",
        name: "about",
        children:[{
          path: "/loginsss",
          name: "loginsdd",
          children:[
            {
              path: "/login1dd1",
              name: "login3ddd3",
              component: () => import("../views/HomeView.vue"),
              children:[]
            },
            {
              path: "/dddd",
              name: "login5dddd5",
              component: () => import("../views/transfers/IndexView.vue"),
              children:[]
            }
          ]
        }]
      },
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/transfers/IndexView.vue"),
  },
  {
    path: "/sdf",
    name: "home555",
    component: ()=>import("@components/Layout.vue"),
    children:[
      {
        path: "/transfersss",
        name: "transfersss",
        component: () => import("../views/transfers/IndexView.vue"),
        children:[]
      },
      {
        path: "/aboutddff",
        name: "aboutff",
        children:[{
          path: "/loginsddss",
          name: "loginsdddd",
          children:[
            {
              path: "/logiffn1dd1",
              name: "loginff3ddd3",
              component: () => import("../views/HomeView.vue"),
              children:[]
            },
            {
              path: "/ffd",
              name: "login5dffffddd5",
              component: () => import("../views/transfers/IndexView.vue"),
              children:[]
            }
          ]
        }]
      },
    ]
  },
]
export default routes