import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "../store";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/a",
        name: "a",
        component: () =>
          import(/* webpackChunkName: "login" */ "../components/OneV.vue"),
        meta: {
          permission: "admin",
        },
      },

      {
        path: "/b",
        name: "b",
        component: () =>
          import(/* webpackChunkName: "login" */ "../components/TwoV.vue"),
        meta: {
          permission: "test",
        },
      },

      {
        path: "/c",
        name: "c",
        component: () =>
          import(/* webpackChunkName: "login" */ "../components/ThreeV.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const userPermissions = store.state.user.username;
  const requiredPermission = to.meta.permission;
  console.log(userPermissions, requiredPermission);
  if (requiredPermission && !userPermissions.includes(requiredPermission)) {
    // 没有权限，重定向到登录页面或显示无权限提示
    next("/login");
    // 或者显示无权限提示页面
    // next('/no-permission');
  } else {
    console.log("next");
    next();
  }
});
export default router;
