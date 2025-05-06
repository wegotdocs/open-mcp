import { z } from "zod"

export const inputParamsSchema = {
  "type": z.union([z.enum(["embedding","image","text","tts","upscale"]), z.enum(["all","code"])]).describe("Filter models by type. Use \"all\" to get all model types.").optional()
}