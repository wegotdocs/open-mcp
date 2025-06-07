import { z } from "zod"

export const inputParamsSchema = {
  "namespace": z.string(),
  "include_secrets": z.boolean().describe("Include secrets in response").optional(),
  "include_configmaps": z.boolean().describe("Include configmaps in response").optional(),
  "include_costs": z.boolean().describe("Include cost calculations").optional(),
  "use_cache": z.boolean().describe("Use cached data if available").optional()
}