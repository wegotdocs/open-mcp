import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("(Required) A unique integer value identifying this audit log."),
  "Accept": z.string().optional(),
  "Authorization": z.string().optional()
}