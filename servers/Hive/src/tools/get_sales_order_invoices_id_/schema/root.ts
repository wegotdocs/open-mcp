import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("(Required) A unique integer value identifying this salesorder."),
  "Accept": z.string().optional(),
  "Authorization": z.string().optional()
}