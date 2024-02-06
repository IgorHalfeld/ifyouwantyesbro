export interface RamonAIResponse {
  answear: string;
}

export function useRamonAI() {
  const loading = ref<boolean>(false);
  const question = ref<string>("");
  const answear = ref<string>();

  async function askToRamon() {
    loading.value = true;

    const response = await $fetch<RamonAIResponse>("/api/ramon-ai", {
      method: "POST",
      body: {
        question: question.value,
      },
    });

    answear.value = response.answear;
    loading.value = false;
  }

  function reset() {
    question.value = "";
    answear.value = undefined;
  }

  return {
    loading,
    question,
    answear,
    askToRamon,
    reset,
  };
}
