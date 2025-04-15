import { z } from "zod"

export const inputParamsSchema = {
  "validate": z.boolean().optional(),
  "result": z.enum(["paid","notpaid"]).optional()
}