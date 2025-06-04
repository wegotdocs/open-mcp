import { z } from "zod"

export const inputParamsSchema = {
  "provider": z.string().regex(new RegExp(".*")).describe("Provider name")
}