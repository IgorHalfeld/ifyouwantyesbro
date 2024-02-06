const TIME_TO_DO_A_HEAVY_AI_TASK = 2_000;

export default defineEventHandler(async (event) => {
  const payload = await readBody(event);

  await new Promise((resolve) =>
    setTimeout(resolve, TIME_TO_DO_A_HEAVY_AI_TASK),
  );

  return {
    answer: payload.question ? "Se quiser sim mano 👍🏻": "Não sei o que é, mas se quiser sim mano 👍🏻",
  };
});
