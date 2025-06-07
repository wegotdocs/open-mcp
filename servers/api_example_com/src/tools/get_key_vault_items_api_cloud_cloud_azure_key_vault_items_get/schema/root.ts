import { z } from "zod"

export const inputParamsSchema = {
  "vault_name": z.string().describe("Key Vault name"),
  "subscription_id": z.union([z.string(), z.null()]).describe("Azure subscription ID").optional(),
  "resource_group": z.union([z.string(), z.null()]).describe("Azure resource group").optional()
}