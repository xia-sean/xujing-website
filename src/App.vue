<template>
  <div class="relative flex min-h-screen flex-col bg-background-light text-slate-900">
    <header class="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/80 backdrop-blur-md">
      <div class="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <RouterLink class="flex items-center gap-3 text-primary" to="/">
          <div
            class="relative flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light text-white shadow-[0_8px_20px_rgba(45,108,78,0.35)]"
          >
            <span class="text-[11px] font-black tracking-[0.08em]">{{ company.shortName }}</span>
            <span class="absolute inset-0 rounded-xl border border-white/25" />
          </div>
          <div>
            <h2 class="text-xl font-bold tracking-tight">{{ company.shortName }}工程设计</h2>
            <p class="hidden text-[11px] text-slate-500 lg:block">{{ company.legalName }}</p>
          </div>
        </RouterLink>

        <nav class="hidden items-center gap-8 md:flex">
          <RouterLink :class="navClass('/')" to="/">首页</RouterLink>
          <RouterLink :class="navClass('/about')" to="/about">关于我们</RouterLink>
          <RouterLink :class="navClass('/contact')" to="/contact">联系我们</RouterLink>
          <RouterLink :class="navClass('/privacy')" to="/privacy">隐私政策</RouterLink>
        </nav>

        <a
          :href="`tel:${company.phoneHref}`"
          class="hidden rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-primary/90 sm:inline-flex"
        >
          咨询热线
        </a>
      </div>
    </header>

    <main class="flex-1">
      <RouterView />
    </main>

    <footer class="bg-slate-900 pb-12 pt-24 text-slate-300">
      <div class="mx-auto max-w-7xl px-6">
        <div class="mb-24 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          <section class="space-y-8">
            <div class="flex items-center gap-3 text-white">
              <div
                class="relative flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light text-white shadow-[0_8px_20px_rgba(45,108,78,0.35)]"
              >
                <span class="text-[11px] font-black tracking-[0.08em]">{{ company.shortName }}</span>
                <span class="absolute inset-0 rounded-xl border border-white/25" />
              </div>
              <h2 class="text-2xl font-bold tracking-tight">{{ company.shortName }}工程设计</h2>
            </div>
            <p class="text-base leading-relaxed">
              {{ company.legalName }}，专注工程设计活动、专业设计服务及软件技术支持。
            </p>
          </section>

          <section>
            <h3 class="mb-8 inline-block border-b border-primary/20 pb-2 text-lg font-bold text-white">快速链接</h3>
            <ul class="space-y-4 text-base">
              <li><RouterLink class="hover:text-primary" to="/">首页</RouterLink></li>
              <li><RouterLink class="hover:text-primary" to="/about">关于我们</RouterLink></li>
              <li><RouterLink class="hover:text-primary" to="/contact">联系我们</RouterLink></li>
              <li><RouterLink class="hover:text-primary" to="/privacy">隐私政策</RouterLink></li>
            </ul>
          </section>

          <section>
            <h3 class="mb-8 inline-block border-b border-primary/20 pb-2 text-lg font-bold text-white">核心服务</h3>
            <ul class="space-y-4 text-base">
              <li>工程设计活动</li>
              <li>专业设计服务</li>
              <li>建筑与装饰材料业务</li>
              <li>软件开发与技术支持</li>
            </ul>
          </section>

          <section class="space-y-6">
            <h3 class="mb-2 inline-block border-b border-primary/20 pb-2 text-lg font-bold text-white">联系方式</h3>
            <p class="text-sm">邮箱：<a class="hover:text-primary" :href="`mailto:${company.email}`">{{ company.email }}</a></p>
            <p class="text-sm">电话：<a class="hover:text-primary" :href="`tel:${company.phoneHref}`">{{ company.phone }}</a></p>
            <p class="text-sm leading-relaxed">地址：{{ company.address }}</p>
          </section>
        </div>

        <div class="flex flex-col items-center justify-between gap-6 border-t border-slate-800/80 pt-10 text-sm md:flex-row">
          <p class="text-slate-400">© {{ currentYear }} {{ company.legalName }}. 保留所有权利。</p>
          <div class="flex items-center gap-8">
            <RouterLink class="text-slate-400 transition-colors hover:text-white" to="/privacy">隐私政策</RouterLink>
            <a
              class="text-slate-400 transition-colors hover:text-white"
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ company.icp }}
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { company } from "./constants/company";

const route = useRoute();
const currentYear = new Date().getFullYear();

const navClass = (path) => {
  const active = route.path === path;
  return [
    "text-sm font-semibold transition-colors",
    active ? "text-primary" : "text-slate-700 hover:text-primary"
  ];
};
</script>
