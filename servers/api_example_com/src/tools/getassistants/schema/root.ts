import { z } from "zod"

export const inputParamsSchema = {
  "active": z.boolean().describe("(optional) true, false or empty").optional()
}