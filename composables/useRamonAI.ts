export interface RamonAIResponse {
  answer: string;
}

export function useRamonAI() {
  const loading = ref<boolean>(false);
  const question = ref<string>("");
  const answer = ref<string>();

  async function askToRamon() {
    loading.value = true;

    const response = await $fetch<RamonAIResponse>("/api/ramon-ai", {
      method: "POST",
      body: {
        question: question.value,
      },
    });

    answer.value = response.answer;
    loading.value = false;
  }

  function reset() {
    question.value = "";
    answer.value = undefined;
  }

  return {
    loading,
    question,
    answer,
    askToRamon,
    reset,
  };
}
