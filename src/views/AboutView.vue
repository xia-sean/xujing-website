<script setup>
import { RouterLink } from "vue-router";
import { company } from "../constants/company";
import heroBg from "../assets/stitch-images/about-values-bg.png";
import profileImage from "../assets/stitch-images/about-studio.png";
import visionImage from "../assets/stitch-images/about-showcase.png";
import AppIcon from "../components/AppIcon.vue";

const serviceScope = [
  "工程设计活动与专业设计服务",
  "建筑材料（不含砂石料、石灰水泥）批发与零售",
  "装饰材料（不含危险化学品）批发与零售",
  "软件开发与技术支持"
];

const mapLink = company.mapOpenUrl;
</script>

<template>
  <section class="relative h-[450px] w-full overflow-hidden">
    <div
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `linear-gradient(to right, rgba(21, 29, 25, 0.9), rgba(21, 29, 25, 0.25)), url(${heroBg})` }"
    />

    <div class="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-10">
      <span class="mb-4 inline-block rounded-full border border-white/20 bg-primary/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
        About Us
      </span>
      <h1 class="text-4xl font-black leading-tight text-white md:text-6xl">关于虚境工程设计</h1>
      <p class="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
        致力于以前瞻视觉与严谨工程逻辑，打造高质量空间设计方案，持续为客户创造长期价值。
      </p>
    </div>
  </section>

  <section class="py-24 lg:py-32">
    <div class="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
      <div class="order-2 lg:order-1">
        <h2 class="text-sm font-bold uppercase tracking-widest text-primary">公司简介 / Profile</h2>
        <h3 class="mt-4 text-3xl font-black leading-tight text-slate-900 md:text-5xl">深耕工程设计，<br />定义空间未来</h3>
        <div class="mt-8 space-y-6">
          <p class="text-lg leading-relaxed text-slate-600">
            {{ company.legalName }} 是一家综合性工程设计服务企业，围绕工程设计活动与专业设计服务，构建稳定高效的项目交付体系。
          </p>
          <p class="text-lg leading-relaxed text-slate-600">
            我们坚持以实用与创新并重的方式推进项目落地，同时结合软件开发与技术支持，持续优化项目协同效率。
          </p>
        </div>

        <div class="mt-12 grid grid-cols-2 gap-8 border-t border-primary/10 pt-10">
          <div>
            <p class="text-4xl font-black text-primary">100+</p>
            <p class="mt-1 text-sm font-semibold uppercase tracking-wide text-slate-500">服务项目</p>
          </div>
          <div>
            <p class="text-4xl font-black text-primary">10+</p>
            <p class="mt-1 text-sm font-semibold uppercase tracking-wide text-slate-500">协同团队</p>
          </div>
        </div>
      </div>

      <div class="relative order-1 lg:order-2">
        <div class="aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-200">
          <img :src="profileImage" alt="工程设计团队" class="h-full w-full object-cover" />
        </div>
        <div class="absolute -bottom-8 -left-8 hidden rounded-2xl bg-primary p-10 shadow-2xl md:block">
          <AppIcon name="architecture" class="text-5xl text-white" />
          <p class="mt-3 text-lg font-bold text-white">专业资质服务</p>
        </div>
      </div>
    </div>
  </section>

  <section class="border-y border-slate-200 py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-10">
      <div class="flex flex-col gap-12">
        <div class="flex flex-col gap-6">
          <h3 class="border-l-4 border-primary pl-4 text-3xl font-black leading-tight tracking-tight text-slate-900">
            专业、稳重、创新的现代工程设计服务商
          </h3>
          <p class="text-lg leading-relaxed text-slate-600">
            我们通过工程设计能力、专业协同流程和技术手段，为客户提供更清晰、更高效、更可执行的设计服务体验。
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <article class="rounded-xl border border-slate-100 bg-white p-8 shadow-sm">
            <h4 class="mb-6 flex items-center gap-2 text-xl font-bold text-primary">
              <AppIcon name="business" />
              企业主体信息
            </h4>
            <div class="space-y-6">
              <div>
                <p class="text-xs font-bold uppercase tracking-wider text-slate-400">英文名称</p>
                <p class="font-medium text-slate-900">{{ company.englishName }}</p>
              </div>
              <div>
                <p class="text-xs font-bold uppercase tracking-wider text-slate-400">联系电话</p>
                <a class="font-medium text-slate-900 hover:text-primary" :href="`tel:${company.phoneHref}`">{{ company.phone }}</a>
              </div>
              <div>
                <p class="text-xs font-bold uppercase tracking-wider text-slate-400">联系邮箱</p>
                <a class="font-medium text-slate-900 hover:text-primary" :href="`mailto:${company.email}`">{{ company.email }}</a>
              </div>
              <div>
                <p class="text-xs font-bold uppercase tracking-wider text-slate-400">公司地址</p>
                <p class="font-medium text-slate-900">{{ company.address }}</p>
              </div>
            </div>
          </article>

          <article class="rounded-xl bg-primary p-8 text-white shadow-sm">
            <h4 class="mb-6 flex items-center gap-2 text-xl font-bold">
              <AppIcon name="settings_suggest" />
              经营范围与服务
            </h4>
            <ul class="space-y-5">
              <li v-for="item in serviceScope" :key="item" class="flex items-start gap-3">
                <AppIcon name="check_circle" class="text-white/70" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </article>
        </div>

        <div class="mt-12 flex flex-col items-center gap-10 rounded-2xl bg-slate-100 p-8 md:flex-row">
          <img :src="visionImage" alt="愿景展示" class="aspect-video w-full rounded-xl bg-slate-300 object-cover md:aspect-square md:w-1/3" />
          <div class="flex-1 space-y-6">
            <h4 class="text-2xl font-bold text-slate-900">我们的愿景</h4>
            <p class="leading-relaxed text-slate-600">
              成为区域内值得信赖的工程设计合作伙伴，持续提升设计品质与技术服务能力，为客户带来更长期的业务价值。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-6 text-center lg:px-10">
      <div class="flex flex-col items-center gap-6">
        <div class="rounded-full bg-primary/10 p-5 text-primary">
          <AppIcon name="location_on" class="text-4xl" />
        </div>
        <p class="mx-auto max-w-2xl text-lg leading-relaxed text-slate-500">欢迎莅临我们的办公地点，面对面沟通工程设计需求。</p>

        <div class="group relative mt-8 h-[400px] w-full overflow-hidden rounded-[2rem] bg-slate-200 shadow-inner">
          <iframe
            class="h-full w-full border-0"
            :src="company.mapEmbedUrl"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="沧州高新区地图"
          />
          <a
            class="absolute bottom-4 right-4 inline-flex items-center gap-1 rounded-xl bg-white/90 px-3 py-2 text-xs font-bold text-primary shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
            :href="mapLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            在地图中打开
            <AppIcon name="open_in_new" class="text-xs" />
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-10">
      <div class="rounded-[2.5rem] bg-[#0c1310] px-8 py-20 text-white md:px-16 lg:px-24">
        <div class="grid gap-16 lg:grid-cols-2 lg:gap-32">
          <div>
            <h5 class="text-sm font-bold uppercase tracking-widest text-primary">企业信息 / Business Info</h5>
            <h6 class="mt-4 text-3xl font-black leading-tight md:text-4xl">公开透明的背景，<br />建立共赢的信任。</h6>

            <div class="mt-12 space-y-8">
              <div class="flex items-start gap-5">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-primary">
                  <AppIcon name="corporate_fare" class="text-2xl" />
                </div>
                <div>
                  <p class="text-xs font-bold uppercase tracking-widest text-slate-500">法定名称</p>
                  <p class="mt-1.5 text-lg font-bold">{{ company.legalName }}</p>
                </div>
              </div>

              <div class="flex items-start gap-5">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-primary">
                  <AppIcon name="language" class="text-2xl" />
                </div>
                <div>
                  <p class="text-xs font-bold uppercase tracking-widest text-slate-500">英文名称</p>
                  <p class="mt-1.5 text-lg font-bold">{{ company.englishName }}</p>
                </div>
              </div>

              <div class="flex items-start gap-5">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-primary">
                  <AppIcon name="location_on" class="text-2xl" />
                </div>
                <div>
                  <p class="text-xs font-bold uppercase tracking-widest text-slate-500">办公地址</p>
                  <p class="mt-1.5 text-lg font-bold">{{ company.address }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col justify-center">
            <div class="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-md">
              <h6 class="text-2xl font-black">联系我们</h6>
              <div class="mt-10 space-y-8">
                <a class="group flex items-center gap-5 transition-colors hover:text-primary" :href="`mailto:${company.email}`">
                  <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <AppIcon name="mail" />
                  </div>
                  <span class="text-lg font-semibold tracking-tight">{{ company.email }}</span>
                </a>
                <a class="group flex items-center gap-5 transition-colors hover:text-primary" :href="`tel:${company.phoneHref}`">
                  <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <AppIcon name="call" />
                  </div>
                  <span class="text-lg font-semibold tracking-tight">{{ company.phone }}</span>
                </a>
              </div>
              <RouterLink
                class="mt-12 inline-flex w-full items-center justify-center rounded-2xl bg-primary px-8 py-5 font-black text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
                to="/contact"
              >
                在线预约咨询
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
