<script setup>
import { company } from "../constants/company";
import privacyImage from "../assets/stitch-images/privacy-hero.png";
import AppIcon from "../components/AppIcon.vue";

const policyVersion = "V2026.03";
const updatedAt = "2026年3月10日";
</script>

<template>
  <main class="flex justify-center px-4 py-12 md:px-10 lg:px-40">
    <div class="flex w-full max-w-[960px] flex-1 flex-col">
      <div class="mb-12 flex flex-col gap-5">
        <div class="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
          <AppIcon name="verified_user" class="text-xs" />
          官方发布
        </div>
        <h1 class="text-4xl font-black leading-tight tracking-[-0.03em] text-slate-900 md:text-5xl">隐私保护承诺</h1>
        <div class="flex items-center gap-4">
          <p class="text-sm text-slate-500 md:text-base">版本号：{{ policyVersion }}</p>
          <span class="h-1.5 w-1.5 rounded-full bg-primary/30" />
          <p class="text-sm text-slate-500 md:text-base">最近更新日期：{{ updatedAt }}</p>
        </div>
      </div>

      <div class="mb-16">
        <p class="rounded-r-lg border-l-4 border-primary bg-primary/5 py-2 pl-6 text-lg leading-relaxed text-slate-700">
          我们非常重视您的隐私。本政策说明 {{ company.legalName }} 如何处理个人信息，并通过合理技术与管理措施保障数据安全。
        </p>
      </div>

      <section class="mb-16">
        <div class="mb-8 flex items-center gap-4">
          <div class="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white">1</div>
          <h2 class="text-2xl font-bold leading-tight text-slate-900">我们可能收集的信息</h2>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article class="rounded-xl border border-primary/10 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <AppIcon name="person" class="mb-4 text-3xl text-primary" />
            <h3 class="mb-3 text-lg font-bold text-slate-900">个人身份信息</h3>
            <p class="text-sm leading-relaxed text-slate-600">包括姓名、邮箱、电话以及你在咨询表单中主动提交的信息。</p>
          </article>

          <article class="rounded-xl border border-primary/10 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <AppIcon name="devices" class="mb-4 text-3xl text-primary" />
            <h3 class="mb-3 text-lg font-bold text-slate-900">设备与日志信息</h3>
            <p class="text-sm leading-relaxed text-slate-600">包括访问时间、浏览器类型、页面路径等用于安全审计和服务优化的基础日志信息。</p>
          </article>

          <article class="rounded-xl border border-primary/10 bg-white p-6 shadow-sm transition-all hover:shadow-md md:col-span-2">
            <AppIcon name="location_on" class="mb-4 text-3xl text-primary" />
            <h3 class="mb-3 text-lg font-bold text-slate-900">位置相关信息</h3>
            <p class="text-sm leading-relaxed text-slate-600">仅在你主动使用地图导航等功能时，可能使用到相关位置服务能力。</p>
          </article>
        </div>
      </section>

      <section class="mb-16">
        <div class="mb-8 flex items-center gap-4">
          <div class="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white">2</div>
          <h2 class="text-2xl font-bold leading-tight text-slate-900">信息使用</h2>
        </div>

        <div class="space-y-4 text-slate-700">
          <p class="mb-6">我们收集的信息仅用于以下目的：</p>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="rounded-xl border border-primary/10 bg-primary/5 p-5">
              <span class="mb-2 block text-lg font-bold text-primary">服务交付</span>
              <p class="text-sm leading-relaxed">用于工程设计咨询、项目沟通和服务执行。</p>
            </div>
            <div class="rounded-xl border border-primary/10 bg-primary/5 p-5">
              <span class="mb-2 block text-lg font-bold text-primary">沟通管理</span>
              <p class="text-sm leading-relaxed">用于回复咨询、发送服务相关通知。</p>
            </div>
            <div class="rounded-xl border border-primary/10 bg-primary/5 p-5">
              <span class="mb-2 block text-lg font-bold text-primary">合规经营</span>
              <p class="text-sm leading-relaxed">满足法律法规、审计及监管要求。</p>
            </div>
            <div class="rounded-xl border border-primary/10 bg-primary/5 p-5">
              <span class="mb-2 block text-lg font-bold text-primary">质量提升</span>
              <p class="text-sm leading-relaxed">用于改进网站内容、交互体验和服务质量。</p>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-16">
        <div class="mb-8 flex items-center gap-4">
          <div class="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white">3</div>
          <h2 class="text-2xl font-bold leading-tight text-slate-900">信息保护与共享</h2>
        </div>

        <div class="rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-10">
          <div class="flex flex-col items-center gap-10 md:flex-row">
            <div class="flex-1">
              <h3 class="mb-5 flex items-center gap-3 text-xl font-bold text-primary">
                <AppIcon name="security" />
                数据安全保障
              </h3>
              <p class="mb-6 leading-relaxed text-slate-700">我们采取合理措施保护数据安全，防止未经授权访问、披露、篡改或丢失。</p>
              <ul class="space-y-4">
                <li class="flex items-start gap-3 text-slate-600">
                  <AppIcon name="check_circle" class="mt-1 text-primary" />
                  <span class="text-sm md:text-base">按最小必要原则处理个人信息。</span>
                </li>
                <li class="flex items-start gap-3 text-slate-600">
                  <AppIcon name="check_circle" class="mt-1 text-primary" />
                  <span class="text-sm md:text-base">定期检查网站安全性，降低数据风险。</span>
                </li>
                <li class="flex items-start gap-3 text-slate-600">
                  <AppIcon name="check_circle" class="mt-1 text-primary" />
                  <span class="text-sm md:text-base">除法律要求或经你授权外，不向无关第三方出售个人信息。</span>
                </li>
              </ul>
            </div>

            <div class="relative aspect-square w-full overflow-hidden rounded-2xl bg-white shadow-lg md:w-72">
              <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/30">
                <AppIcon name="verified_user" class="text-[11rem] text-primary/45" />
              </div>
              <img class="h-full w-full object-cover mix-blend-overlay" :src="privacyImage" alt="安全示意图" />
            </div>
          </div>
        </div>
      </section>

      <section class="mb-20">
        <div class="mb-8 flex items-center gap-4">
          <div class="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white">4</div>
          <h2 class="text-2xl font-bold leading-tight text-slate-900">联系我们</h2>
        </div>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <a class="group flex flex-col items-center rounded-2xl border border-primary/10 bg-white p-8 text-center shadow-sm transition-all hover:border-primary" :href="`mailto:${company.email}`">
            <AppIcon name="mail" class="mb-4 text-4xl text-primary transition-transform group-hover:scale-110" />
            <span class="mb-1 text-lg font-bold text-slate-900">电子邮件</span>
            <span class="text-sm text-slate-500">{{ company.email }}</span>
          </a>

          <a class="group flex flex-col items-center rounded-2xl border border-primary/10 bg-white p-8 text-center shadow-sm transition-all hover:border-primary" :href="`tel:${company.phoneHref}`">
            <AppIcon name="call" class="mb-4 text-4xl text-primary transition-transform group-hover:scale-110" />
            <span class="mb-1 text-lg font-bold text-slate-900">联系专线</span>
            <span class="text-sm text-slate-500">{{ company.phone }}</span>
          </a>

          <div class="group flex flex-col items-center rounded-2xl border border-primary/10 bg-white p-8 text-center shadow-sm transition-all hover:border-primary">
            <AppIcon name="pin_drop" class="mb-4 text-4xl text-primary transition-transform group-hover:scale-110" />
            <span class="mb-1 text-lg font-bold text-slate-900">办公地址</span>
            <span class="text-sm text-slate-500">{{ company.address }}</span>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
