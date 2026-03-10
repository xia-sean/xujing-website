<script setup>
import { reactive } from "vue";
import { company } from "../constants/company";
import AppIcon from "../components/AppIcon.vue";

const form = reactive({
  name: "",
  phone: "",
  email: "",
  message: ""
});

const mapLink = company.mapOpenUrl;

const submitContact = () => {
  const subject = `官网留言 - ${form.name || "未命名客户"}`;
  const body = [
    `姓名：${form.name || "未填写"}`,
    `联系电话：${form.phone || "未填写"}`,
    `电子邮箱：${form.email || "未填写"}`,
    `需求描述：${form.message || "未填写"}`
  ].join("\n");

  window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
</script>

<template>
  <section class="mx-auto max-w-7xl px-6 py-16 lg:px-12">
    <div class="mb-16 max-w-3xl">
      <h1 class="mb-6 text-5xl font-black tracking-tight text-slate-900">开启您的建筑之旅</h1>
      <p class="text-lg leading-relaxed text-slate-600">如果您有工程设计需求、咨询或疑虑，我们的团队随时准备为您提供专业支持与定制化方案。</p>
    </div>

    <div class="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
      <div class="space-y-12">
        <div>
          <h2 class="mb-8 flex items-center gap-3 text-2xl font-bold text-slate-900">
            <AppIcon name="contact_support" class="rounded-lg bg-primary/10 p-2 text-primary" />
            联系信息
          </h2>

          <div class="space-y-0 border-t border-slate-200">
            <div class="grid grid-cols-1 items-center gap-4 border-b border-slate-200 py-8 sm:grid-cols-3">
              <div class="flex items-center gap-3">
                <AppIcon name="mail" class="text-primary" />
                <span class="text-sm font-medium text-slate-500">公司邮箱</span>
              </div>
              <a class="text-base font-bold text-slate-900 hover:text-primary sm:col-span-2" :href="`mailto:${company.email}`">{{ company.email }}</a>
            </div>

            <div class="grid grid-cols-1 items-center gap-4 border-b border-slate-200 py-8 sm:grid-cols-3">
              <div class="flex items-center gap-3">
                <AppIcon name="call" class="text-primary" />
                <span class="text-sm font-medium text-slate-500">联系电话</span>
              </div>
              <a class="text-base font-bold text-slate-900 hover:text-primary sm:col-span-2" :href="`tel:${company.phoneHref}`">{{ company.phone }}</a>
            </div>

            <div class="grid grid-cols-1 items-center gap-4 border-b border-slate-200 py-8 sm:grid-cols-3">
              <div class="flex items-center gap-3">
                <AppIcon name="location_on" class="text-primary" />
                <span class="text-sm font-medium text-slate-500">公司地址</span>
              </div>
              <span class="text-base font-bold leading-relaxed text-slate-900 sm:col-span-2">{{ company.address }}</span>
            </div>
          </div>
        </div>

        <a
          :href="mapLink"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative block aspect-[16/9] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm"
        >
          <iframe
            class="absolute inset-0 h-full w-full border-0"
            :src="company.mapEmbedUrl"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="沧州高新区办公地图"
          />
          <div class="absolute inset-x-0 bottom-0 flex items-center justify-between bg-white/90 p-4 backdrop-blur-sm">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-900">河北省沧州高新区</span>
            <span class="flex items-center gap-1 text-xs font-bold text-primary">
              打开地图
              <AppIcon name="open_in_new" class="text-xs" />
            </span>
          </div>
        </a>
      </div>

      <div class="rounded-3xl border border-primary/5 bg-white p-10 shadow-2xl shadow-slate-200/50">
        <h2 class="mb-8 flex items-center gap-3 text-2xl font-bold text-slate-900">
          <AppIcon name="edit_note" class="rounded-lg bg-primary/10 p-2 text-primary" />
          在线留言
        </h2>

        <form class="space-y-6" @submit.prevent="submitContact">
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label class="mb-2 block text-sm font-bold text-slate-700">您的姓名</label>
              <input
                v-model="form.name"
                class="w-full rounded-xl border-slate-200 bg-slate-50 p-4 text-sm transition-all focus:border-primary focus:ring-primary"
                placeholder="请输入姓名"
                type="text"
              />
            </div>

            <div>
              <label class="mb-2 block text-sm font-bold text-slate-700">联系电话</label>
              <input
                v-model="form.phone"
                class="w-full rounded-xl border-slate-200 bg-slate-50 p-4 text-sm transition-all focus:border-primary focus:ring-primary"
                placeholder="请输入电话"
                type="tel"
              />
            </div>
          </div>

          <div>
            <label class="mb-2 block text-sm font-bold text-slate-700">电子邮箱</label>
            <input
              v-model="form.email"
              class="w-full rounded-xl border-slate-200 bg-slate-50 p-4 text-sm transition-all focus:border-primary focus:ring-primary"
              placeholder="example@mail.com"
              type="email"
            />
          </div>

          <div>
            <label class="mb-2 block text-sm font-bold text-slate-700">您的需求</label>
            <textarea
              v-model="form.message"
              class="w-full resize-none rounded-xl border-slate-200 bg-slate-50 p-4 text-sm transition-all focus:border-primary focus:ring-primary"
              placeholder="请简要描述您的工程设计需求..."
              rows="5"
            />
          </div>

          <button
            class="w-full rounded-xl bg-primary py-5 text-center text-base font-bold text-white shadow-xl shadow-primary/20 transition-all hover:bg-primary/90 active:scale-[0.98]"
            type="submit"
          >
            提交留言
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
