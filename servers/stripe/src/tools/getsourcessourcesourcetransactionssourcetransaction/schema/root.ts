import { z } from "zod"

export const inputParamsSchema = {
  "source": z.string().max(5000),
  "source_transaction": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}