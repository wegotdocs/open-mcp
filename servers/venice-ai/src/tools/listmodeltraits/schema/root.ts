import { z } from "zod"

export const inputParamsSchema = {
  "type": z.enum(["image","text","embedding","tts"]).describe("Filter models by type.").optional()
}