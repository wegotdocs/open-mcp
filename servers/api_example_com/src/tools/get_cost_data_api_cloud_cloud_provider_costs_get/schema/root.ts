import { z } from "zod"

export const inputParamsSchema = {
  "provider": z.string(),
  "days": z.number().int().describe("Number of days to retrieve cost data").optional(),
  "region": z.union([z.string(), z.null()]).describe("Cloud region").optional(),
  "subscription_id": z.union([z.string(), z.null()]).describe("Azure subscription ID").optional(),
  "resource_group": z.union([z.string(), z.null()]).describe("Azure resource group").optional()
}