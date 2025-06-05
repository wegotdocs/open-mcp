import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this metric result."),
  "b_id": z.number().int().readonly(),
  "result": z.string().regex(new RegExp("^-?\\d{0,8}(?:\\.\\d{0,4})?$")),
  "date": z.string().date().optional(),
  "note": z.string().nullable().optional(),
  "team": z.number().int(),
  "content": z.number().int(),
  "created_at": z.string().datetime({ offset: true }).optional(),
  "updated_at": z.string().datetime({ offset: true }).readonly()
}