import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "type": z.enum(["payment-card-id","customer-id","email","ip-address","country","fingerprint","bin"]).describe("The blacklist type"),
  "value": z.string().describe("The blacklist value"),
  "expiredTime": z.string().datetime({ offset: true }).describe("The blacklist expired time").optional(),
  "createdTime": z.string().optional(),
  "updatedTime": z.string().optional(),
  "_links": z.array(z.string()).min(1).max(1).describe("The links related to resource").readonly().optional()
}