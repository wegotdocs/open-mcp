import { z } from "zod"

export const inputParamsSchema = {
  "accepted_by": z.string().optional(),
  "accepted_findings": z.array(z.number().int()).optional(),
  "decision": z.enum(["A","F","M","T","V"]).describe("Risk treatment decision by risk owner\n\n* `A` - Accept (The risk is acknowledged, yet remains)\n* `V` - Avoid (Do not engage with whatever creates the risk)\n* `M` - Mitigate (The risk still exists, yet compensating controls make it less of a threat)\n* `F` - Fix (The risk is eradicated)\n* `T` - Transfer (The risk is transferred to a 3rd party)").optional(),
  "decision_details": z.string().optional(),
  "expiration_date": z.string().datetime({ offset: true }).optional(),
  "expiration_date_handled": z.string().datetime({ offset: true }).optional(),
  "expiration_date_warned": z.string().datetime({ offset: true }).optional(),
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "name": z.string().optional(),
  "notes": z.array(z.number().int()).optional(),
  "o": z.array(z.enum(["-name","name"])).describe("Ordering\n\n* `name` - Name\n* `-name` - Name (descending)").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "owner": z.number().int().optional(),
  "reactivate_expired": z.boolean().optional(),
  "recommendation": z.enum(["A","F","M","T","V"]).describe("Recommendation from the security team.\n\n* `A` - Accept (The risk is acknowledged, yet remains)\n* `V` - Avoid (Do not engage with whatever creates the risk)\n* `M` - Mitigate (The risk still exists, yet compensating controls make it less of a threat)\n* `F` - Fix (The risk is eradicated)\n* `T` - Transfer (The risk is transferred to a 3rd party)").optional(),
  "recommendation_details": z.string().optional(),
  "restart_sla_expired": z.boolean().optional()
}