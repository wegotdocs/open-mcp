import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Custom field ID"),
  "name": z.string().describe("The name of the custom field"),
  "slug": z.string().optional()
}