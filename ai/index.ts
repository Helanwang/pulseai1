import { experimental_wrapLanguageModel as wrapLanguageModel } from "ai";
import { customMiddleware } from "./custom-middleware";
import {  createOpenAI } from '@ai-sdk/openai';

const openai = createOpenAI({
  baseURL: 'https://api.sambanova.ai/v1',
  apiKey: process.env.SAMBANOVA_API_KEY,

});

export const customModel = wrapLanguageModel({
  model: openai("Meta-Llama-3.1-70B-Instruct"),
  middleware: customMiddleware,
});
