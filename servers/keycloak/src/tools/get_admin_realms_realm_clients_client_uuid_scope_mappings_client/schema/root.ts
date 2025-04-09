import { z } from "zod"

export const inputParams = {
  "briefRepresentation": z.boolean().describe("if false, return roles with their attributes").optional()
}