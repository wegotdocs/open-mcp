import { z } from "zod"

export const inputParamsSchema = {
  "request": z.array(z.object({ "id": z.string().optional() })).optional(),
  "type": z.enum(["GET","DELETE","UPDATE","CREATE"]).optional()
}