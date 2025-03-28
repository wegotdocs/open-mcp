import { z } from "zod"

export const toolName = `createmoderation`
export const toolDescription = `Classifies if text and/or image inputs are potentially harmful. Learn
more in the [moderation guide](/docs/guides/moderation).`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/moderations`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "body": z.object({ "input": z.string().describe("A string of text to classify for moderation.").describe("Input (or inputs) to classify. Can be a single string, an array of strings, or\nan array of multi-modal input objects similar to other models.\n"), "model": z.union([z.string(), z.enum(["omni-moderation-latest","omni-moderation-2024-09-26","text-moderation-latest","text-moderation-stable"])]).describe("The content moderation model you would like to use. Learn more in\n[the moderation guide](/docs/guides/moderation), and learn about\navailable models [here](/docs/models#moderation).\n") }).optional() }).shape