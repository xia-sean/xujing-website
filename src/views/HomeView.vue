<script setup>
import { reactive } from "vue";
import { RouterLink } from "vue-router";
import { company } from "../constants/company";
import heroImage from "../assets/stitch-images/home-hero.png";
import mapImage from "../assets/stitch-images/home-map.png";
import AppIcon from "../components/AppIcon.vue";

const form = reactive({
  name: "",
  phone: "",
  service: "工程设计活动",
  message: ""
});

const services = [
  {
    icon: "architecture",
    title: "工程设计活动",
    desc: "覆盖建筑与工程相关场景，提供从需求分析到交付落地的完整设计支持。"
  },
  {
    icon: "engineering",
    title: "专业设计服务",
    desc: "通过专业协同和细化方案输出，平衡设计质量、实施效率与业务目标。"
  },
  {
    icon: "developer_mode",
    title: "软件开发与技术支持",
    desc: "围绕项目管理和业务数字化，提供软件开发、技术咨询与持续支持服务。"
  }
];

const openMap = () => {
  const url = `https://uri.amap.com/search?keyword=${encodeURIComponent(company.mapKeyword)}`;
  window.open(url, "_blank", "noopener");
};

const submitInquiry = () => {
  const subject = `官网咨询 - ${form.service}`;
  const body = [
    `姓名：${form.name || "未填写"}`,
    `电话：${form.phone || "未填写"}`,
    `咨询类型：${form.service}`,
    `咨询内容：${form.message || "未填写"}`
  ].join("\n");
  window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
</script>

<template>
  <section class="relative h-[85vh] min-h-[700px] w-full overflow-hidden">
    <div
      class="absolute inset-0 scale-105 bg-cover bg-center transition-transform duration-1000"
      :style="{ backgroundImage: `linear-gradient(rgba(45, 108, 78, 0.55), rgba(21, 29, 25, 0.86)), url(${heroImage})` }"
    />

    <div class="relative mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6">
      <div class="max-w-3xl space-y-8">
        <div class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-white backdrop-blur-sm">
          <span class="text-xs font-bold uppercase tracking-wider">河北工程设计服务机构</span>
        </div>

        <h1 class="text-5xl font-black leading-[1.1] text-white md:text-8xl">
          构筑虚实之境<br />
          <span class="text-[#4ba578]">定义工程未来</span>
        </h1>

        <p class="max-w-2xl text-lg leading-relaxed text-slate-200 md:text-2xl">
          {{ company.legalName }}，{{ company.businessSummary }}
        </p>

        <div class="flex flex-wrap gap-5 pt-4">
          <a href="#services" class="rounded-xl bg-primary px-10 py-4 text-lg font-bold text-white shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:bg-primary/90">
            了解更多
          </a>
          <RouterLink
            to="/contact"
            class="rounded-xl border border-white/20 bg-white/10 px-10 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
          >
            联系顾问
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50">
      <AppIcon name="expand_more" class="animate-bounce text-3xl" />
    </div>
  </section>

  <section id="services" class="bg-white py-32">
    <div class="mx-auto max-w-7xl px-6">
      <div class="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div class="max-w-2xl">
          <h2 class="mb-4 text-sm font-bold uppercase tracking-widest text-primary">我们的服务</h2>
          <h3 class="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">全方位工程设计解决方案</h3>
          <p class="mt-6 text-lg leading-relaxed text-slate-600">提供工程设计活动、专业设计服务、软件开发与技术支持等一体化服务。</p>
        </div>
        <RouterLink class="group flex items-center gap-2 font-bold text-primary hover:underline" to="/about">
          查看全部业务
          <AppIcon name="arrow_forward" class="transition-transform group-hover:translate-x-1" />
        </RouterLink>
      </div>

      <div class="grid grid-cols-1 gap-10 md:grid-cols-3">
        <article
          v-for="item in services"
          :key="item.title"
          class="group relative rounded-3xl border border-slate-100 bg-slate-50/50 p-10 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5"
        >
          <div class="mb-8 flex size-16 items-center justify-center rounded-2xl bg-primary text-white transition-transform group-hover:scale-110">
            <AppIcon :name="item.icon" class="text-4xl" />
          </div>
          <h4 class="mb-4 text-2xl font-bold">{{ item.title }}</h4>
          <p class="text-lg leading-relaxed text-slate-600">{{ item.desc }}</p>
        </article>
      </div>
    </div>
  </section>

  <section id="contact" class="bg-background-light py-32">
    <div class="mx-auto max-w-7xl px-6">
      <div class="grid grid-cols-1 items-start gap-20 lg:grid-cols-2">
        <div>
          <h2 class="mb-4 text-sm font-bold uppercase tracking-widest text-primary">联系我们</h2>
          <h3 class="mb-10 text-4xl font-bold tracking-tight md:text-5xl">开启您的建筑之旅</h3>

          <div class="space-y-10">
            <div class="flex gap-5">
              <div class="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <AppIcon name="location_on" class="text-2xl" />
              </div>
              <div>
                <h5 class="text-xl font-bold">办公地址</h5>
                <p class="mt-1 text-lg text-slate-600">{{ company.address }}</p>
              </div>
            </div>

            <div class="flex gap-5">
              <div class="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <AppIcon name="call" class="text-2xl" />
              </div>
              <div>
                <h5 class="text-xl font-bold">联系电话</h5>
                <a class="mt-1 block text-lg text-slate-600 hover:text-primary" :href="`tel:${company.phoneHref}`">{{ company.phone }}</a>
              </div>
            </div>

            <div class="flex gap-5">
              <div class="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <AppIcon name="mail" class="text-2xl" />
              </div>
              <div>
                <h5 class="text-xl font-bold">电子邮箱</h5>
                <a class="mt-1 block text-lg text-slate-600 hover:text-primary" :href="`mailto:${company.email}`">{{ company.email }}</a>
              </div>
            </div>
          </div>

          <button
            type="button"
            class="mt-14 block h-72 w-full overflow-hidden rounded-3xl border border-slate-200 shadow-lg"
            @click="openMap"
          >
            <img class="h-full w-full object-cover grayscale contrast-125" :src="mapImage" alt="沧州地图" />
          </button>
        </div>

        <div class="rounded-[2.5rem] border border-slate-100 bg-white p-10 shadow-2xl shadow-primary/5 md:p-14">
          <form class="space-y-8" @submit.prevent="submitInquiry">
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div class="space-y-3">
                <label class="ml-1 text-sm font-semibold">姓名</label>
                <input
                  v-model="form.name"
                  class="w-full rounded-2xl border-slate-200 bg-slate-50 px-5 py-4 transition-all focus:border-primary focus:ring-primary"
                  placeholder="您的姓名"
                  type="text"
                />
              </div>

              <div class="space-y-3">
                <label class="ml-1 text-sm font-semibold">电话</label>
                <input
                  v-model="form.phone"
                  class="w-full rounded-2xl border-slate-200 bg-slate-50 px-5 py-4 transition-all focus:border-primary focus:ring-primary"
                  placeholder="您的联系电话"
                  type="tel"
                />
              </div>
            </div>

            <div class="space-y-3">
              <label class="ml-1 text-sm font-semibold">需求类型</label>
              <select
                v-model="form.service"
                class="w-full rounded-2xl border-slate-200 bg-slate-50 px-5 py-4 transition-all focus:border-primary focus:ring-primary"
              >
                <option>工程设计活动</option>
                <option>专业设计服务</option>
                <option>建筑与装饰材料业务</option>
                <option>软件开发与技术支持</option>
              </select>
            </div>

            <div class="space-y-3">
              <label class="ml-1 text-sm font-semibold">咨询内容</label>
              <textarea
                v-model="form.message"
                class="w-full rounded-2xl border-slate-200 bg-slate-50 px-5 py-4 transition-all focus:border-primary focus:ring-primary"
                placeholder="请简要描述您的需求..."
                rows="5"
              />
            </div>

            <button
              class="w-full rounded-2xl bg-primary py-5 text-xl font-bold text-white shadow-xl shadow-primary/20 transition-all hover:bg-primary/90 active:scale-[0.98]"
            >
              提交咨询
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
