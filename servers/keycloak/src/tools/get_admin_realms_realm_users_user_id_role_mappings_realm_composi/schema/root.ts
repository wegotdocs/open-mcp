import { z } from "zod"

export const inputParamsSchema = {
  "briefRepresentation": z.boolean().describe("if false, return roles with their attributes").optional()
}