import { z } from "zod"

export const inputParamsSchema = {
  "input": z.string().describe("The input text to classify"),
  "model": z.union([z.string(), z.enum(["text-moderation-latest","text-moderation-stable"])]).describe("Two content moderations models are available: `text-moderation-stable` and `text-moderation-latest`.\n\nThe default is `text-moderation-latest` which will be automatically upgraded over time. This ensures you are always using our most accurate model. If you use `text-moderation-stable`, we will provide advanced notice before updating the model. Accuracy of `text-moderation-stable` may be slightly lower than for `text-moderation-latest`.\n").optional()
}