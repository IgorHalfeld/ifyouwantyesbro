const TIME_TO_DO_A_HEAVY_AI_TASK = 2_000;

export default defineEventHandler(async (event) => {
  const payload = await readBody(event);

  if (!payload.question) {
    throw createError({
      status: 400,
      statusMessage: "Não sei o que é, mas se quiser sim mano",
    });
  }

  await new Promise((resolve) =>
    setTimeout(resolve, TIME_TO_DO_A_HEAVY_AI_TASK),
  );

  return {
    answer: "Se quiser sim mano 👍🏻",
  };
});
