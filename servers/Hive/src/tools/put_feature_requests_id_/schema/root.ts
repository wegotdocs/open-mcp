import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("(Required) A unique integer value identifying this feature request."),
  "Content-Type": z.string().optional(),
  "Accept": z.string().optional(),
  "Authorization": z.string().optional()
}