import { z } from "zod"

export const inputParamsSchema = {
  "file_id": z.string().regex(new RegExp("^\\d+$")),
  "id": z.number().int().describe("A unique integer value identifying this finding.")
}