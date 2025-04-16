import { z } from "zod"

export const inputParamsSchema = {
  "input": z.string().describe("A string of text to classify for moderation.").describe("Input (or inputs) to classify. Can be a single string, an array of strings, or\nan array of multi-modal input objects similar to other models.\n"),
  "model": z.union([z.string(), z.enum(["omni-moderation-latest","omni-moderation-2024-09-26","text-moderation-latest","text-moderation-stable"])]).describe("The content moderation model you would like to use. Learn more in\n[the moderation guide](/docs/guides/moderation), and learn about\navailable models [here](/docs/models#moderation).\n").optional()
}