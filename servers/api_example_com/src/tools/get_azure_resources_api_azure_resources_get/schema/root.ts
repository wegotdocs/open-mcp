import { z } from "zod"

export const inputParamsSchema = {
  "resource_group": z.union([z.string(), z.null()]).describe("Filter by resource group").optional(),
  "resource_type": z.union([z.string(), z.null()]).describe("Filter by resource type").optional()
}