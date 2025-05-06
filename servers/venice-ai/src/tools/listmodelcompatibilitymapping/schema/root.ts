import { z } from "zod"

export const inputParamsSchema = {
  "type": z.enum(["embedding","image","text","tts","upscale"]).describe("Filter models by type.").optional()
}