<script setup lang="ts">
import { MessageCircleQuestion, Handshake } from "lucide-vue-next";

const { loading, question, answear, askToRamon, reset } = useRamonAI();

const label = computed(() => {
  if (loading.value) {
    return "Perguntando ao ramon...";
  }

  if (Boolean(answear.value)) {
    return answear.value;
  }

  return "Qual a sua pergunta para o ramon?";
});

const handleRequest = () => {
  askToRamon();
};

defineOgImage({
  component: "Main",
});

useHead({
  title: "Se quiser sim mano",
});

useSeoMeta({
  title: "Se quiser sim mano",
  ogTitle: "Se quiser sim mano",
  description: "Pergunte qualquer coisa ao IA do ramon para ter sua resposta!",
  ogDescription:
    "Pergunte qualquer coisa ao IA do ramon para ter sua resposta!",
});
</script>

<template>
  <div
    class="bg-[url('https://i.ytimg.com/vi/ff52NyrURSc/maxresdefault.jpg')] bg-no-repeat bg-cover flex justify-center items-center h-full h-screen p-5 relative"
  >
    <div
      class="bg-gray-50 rounded-lg p-2 flex flex-col absolute top-[10px] left-[10px]"
    >
      <a
        class="underline hover:text-black"
        href="https://github.com/IgorHalfeld/ifyouwantyesbro"
        >Repo do github (IgorHalfeld/ifyouwantyesbro) 👀</a
      >
      <a
        class="underline hover:text-black"
        href="https://bit.ly/nuxt-extreme-ramon"
        >Nuxt Extreme vagas limitadas 🔥</a
      >
    </div>

    <div
      class="max-w-xl bg-gray-100 p-5 md:p-10 rounded-lg flex flex-col gap-5"
    >
      <h1 class="font-[Inter] font-bold text-2xl md:text-5xl">
        {{ label }}
      </h1>

      <form class="flex flex-col gap-3" @submit.prevent="handleRequest">
        <div class="flex flex-col gap-2">
          <input
            type="text"
            v-model="question"
            class="form-input px-4 py-3 rounded-lg"
            placeholder="Qualquer um pode meter o shape ramon?"
          />
        </div>

        <div>
          <button
            v-if="!Boolean(answear)"
            :class="{
              'opacity-50 cursor-not-allowed': loading,
            }"
            :disabled="loading"
            class="w-full font-[Inter] flex justify-center gap-2 md:w-auto bg-gray-200 text-black rounded-full px-4 py-3 hover:bg-black hover:text-white transition-all hover:animate-pulse"
          >
            <MessageCircleQuestion class="w-6 h-6" />
            Perguntar ao ramon
          </button>
          <button
            v-if="Boolean(answear)"
            @click="reset()"
            :class="{
              'opacity-50 cursor-not-allowed': loading,
            }"
            :disabled="loading"
            class="w-full font-[Inter] flex justify-center gap-2 md:w-auto bg-gray-200 text-black rounded-full px-4 py-3 hover:bg-black hover:text-white transition-all hover:animate-pulse"
          >
            <Handshake class="w-6 h-6" />
            Perguntar de novo
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
