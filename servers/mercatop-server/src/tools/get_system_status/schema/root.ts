import { z } from "zod"

export const inputParamsSchema = {
  "context": z.literal("view").describe("Scope under which the request is made; determines fields present in response.").optional()
}