import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "partner_id": z.string().describe("Partner ID"),
  "is_autonomous": z.number().int().describe("Autonomous status (0 or 1). It is not currently used, we only validate the value").optional(),
  "contribution_base": z.string().describe("Contribution base type: MINIMAL, MAXIMAL, OTHER, CURRENT_FEE for business or CURRENT, MINIMUM, MAXIMUM, OTHER for partner. It is not currently used, we only validate the value").optional()
}