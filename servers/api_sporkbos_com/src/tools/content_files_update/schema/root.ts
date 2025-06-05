import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this content file."),
  "b_id": z.number().int().readonly(),
  "file": z.string().url(),
  "content": z.number().int().readonly(),
  "name": z.string().max(255).optional(),
  "size": z.string().readonly()
}