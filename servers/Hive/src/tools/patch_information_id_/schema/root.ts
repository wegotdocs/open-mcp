import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("(Required) A unique integer value identifying this information."),
  "Content-Type": z.string().optional(),
  "Accept": z.string().optional()
}