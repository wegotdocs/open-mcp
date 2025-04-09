import { z } from "zod"

export const inputParams = {
  "type": z.union([z.enum(["image","text","embedding","tts"]), z.enum(["all","code"])]).describe("Filter models by type. Use \"all\" to get all model types.").optional()
}