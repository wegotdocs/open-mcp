import { z } from "zod"

export const inputParamsSchema = {
  "tenant": z.string().describe("The ID of the tenant."),
  "issuanceRequestUid": z.union([z.null(), z.string()]).optional(),
  "revocationStatusLink": z.union([z.null(), z.string()]).optional()
}