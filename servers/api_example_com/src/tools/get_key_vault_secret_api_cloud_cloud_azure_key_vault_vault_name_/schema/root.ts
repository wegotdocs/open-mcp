import { z } from "zod"

export const inputParamsSchema = {
  "vault_name": z.string(),
  "secret_name": z.string(),
  "subscription_id": z.union([z.string(), z.null()]).describe("Azure subscription ID").optional(),
  "resource_group": z.union([z.string(), z.null()]).describe("Azure resource group").optional()
}