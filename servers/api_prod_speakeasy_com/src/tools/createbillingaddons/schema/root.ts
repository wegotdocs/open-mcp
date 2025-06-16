import { z } from "zod"

export const inputParamsSchema = {
  "add_ons": z.array(z.enum(["webhooks","sdk_testing","custom_code_regions","snippet_ai"]))
}