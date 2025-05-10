import { z } from "zod"

export const inputParamsSchema = {
  "message": z.string().nullable().optional(),
  "type": z.enum(["info","warning","error"]).optional()
}