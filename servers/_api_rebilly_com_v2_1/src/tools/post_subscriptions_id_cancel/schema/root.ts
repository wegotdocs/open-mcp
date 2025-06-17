import { z } from "zod"

export const inputParamsSchema = {
  "policy": z.enum(["at-next-renewal","now-with-prorata-credit","now"]).describe("Cancel policy"),
  "canceledBy": z.enum(["merchant","customer"]).describe("Canceled by"),
  "cancelCategory": z.enum(["did-not-use","did-not-want","missing-features","bugs-or-problems","do-not-remember","risk-warning","contract-expired","too-expensive","other"]).describe("Cancel category"),
  "cancelDescription": z.string().max(255).describe("Cancel reason description in free form").optional()
}