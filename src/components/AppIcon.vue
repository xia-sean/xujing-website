<script setup>
import { computed } from "vue";
import {
  ArrowRight,
  Building,
  Building2,
  ChevronDown,
  CircleCheck,
  CircleHelp,
  Code2,
  DraftingCompass,
  ExternalLink,
  Globe,
  Laptop,
  Mail,
  MapPin,
  Phone,
  Settings2,
  Shield,
  ShieldCheck,
  SquarePen,
  UserRound,
  Wrench
} from "lucide-vue-next";

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: [Number, String],
    default: "1em"
  },
  strokeWidth: {
    type: [Number, String],
    default: 2
  }
});

const iconMap = {
  architecture: DraftingCompass,
  arrow_forward: ArrowRight,
  expand_more: ChevronDown,
  location_on: MapPin,
  pin_drop: MapPin,
  call: Phone,
  mail: Mail,
  developer_mode: Code2,
  engineering: Wrench,
  contact_support: CircleHelp,
  open_in_new: ExternalLink,
  edit_note: SquarePen,
  business: Building2,
  settings_suggest: Settings2,
  check_circle: CircleCheck,
  corporate_fare: Building,
  language: Globe,
  verified_user: ShieldCheck,
  person: UserRound,
  devices: Laptop,
  security: Shield
};

const iconComponent = computed(() => iconMap[props.name] || CircleHelp);
</script>

<template>
  <component :is="iconComponent" v-bind="$attrs" :size="size" :stroke-width="strokeWidth" />
</template>
