import { z } from "zod"

export const inputParamsSchema = {
  "institutionsLegacy[]": z.array(z.string()).describe("List of institution legacy ids").optional(),
  "search": z.string().describe("Search string").optional(),
  "tenant": z.string().optional(),
  "aet": z.string().describe("aet query string parameter").optional()
}