import { z } from "zod"

export const inputParamsSchema = {
  "mandate_notification": z.string().max(5000),
  "source": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}