import { experimental_wrapLanguageModel as wrapLanguageModel } from "ai";
import { customMiddleware } from "./custom-middleware";
import { openai, createOpenAI } from '@ai-sdk/openai';

const Xopenai = createOpenAI({
  basUrl: 'https://api.sambanova.ai/v1',
  api_key: process.env.SAMBANOVA_API_KEY
});

export const customModel = wrapLanguageModel({
  model: openai("gpt-4o", { apiKey: process.env.SAMBANOVA_API_KEY, baseUrl: 'https://api.sambanova.ai/v1' }),
  middleware: customMiddleware,
});
