import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().readonly().optional(),
  "child": z.number().int(),
  "time": z.string().datetime({ offset: true }).optional(),
  "wet": z.boolean(),
  "solid": z.boolean(),
  "color": z.enum(["black","brown","green","yellow"]).optional(),
  "amount": z.number().nullable().optional(),
  "notes": z.string().nullable().optional(),
  "tags": z.array(z.string()).optional()
}