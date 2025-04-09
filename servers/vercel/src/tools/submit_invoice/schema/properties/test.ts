import { z } from "zod"

export const inputParams = {
  "validate": z.boolean().optional(),
  "result": z.enum(["paid","notpaid"]).optional()
}