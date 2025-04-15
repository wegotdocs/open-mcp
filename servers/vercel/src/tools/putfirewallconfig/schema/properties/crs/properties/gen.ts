import { z } from "zod"

export const inputParamsSchema = {
  "active": z.boolean(),
  "action": z.enum(["deny","log"])
}