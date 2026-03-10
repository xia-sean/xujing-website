import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import PrivacyView from "../views/PrivacyView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "首页 | 虚境工程设计（河北）有限公司" }
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: { title: "关于我们 | 虚境工程设计（河北）有限公司" }
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
    meta: { title: "联系我们 | 虚境工程设计（河北）有限公司" }
  },
  {
    path: "/privacy",
    name: "privacy",
    component: PrivacyView,
    meta: { title: "隐私政策 | 虚境工程设计（河北）有限公司" }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.afterEach((to) => {
  if (to.meta?.title) {
    document.title = to.meta.title;
  }
});

export default router;
