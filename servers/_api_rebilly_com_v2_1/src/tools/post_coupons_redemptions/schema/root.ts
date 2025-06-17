import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "redemptionCode": z.string().optional(),
  "customerId": z.string().optional(),
  "additionalRestrictions": z.array(z.string()).describe("Additional restrictions for coupon's redemptions").optional(),
  "redeemedTime": z.string().optional(),
  "canceledTime": z.string().optional(),
  "_links": z.array(z.string()).min(1).max(1).describe("The links related to resource").readonly().optional()
}