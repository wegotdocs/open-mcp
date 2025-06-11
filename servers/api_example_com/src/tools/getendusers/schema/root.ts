import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int(),
  "includeRoles": z.boolean().describe("Includes user role information").optional()
}