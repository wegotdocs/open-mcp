import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().min(1).max(300).describe("Descriptive name which in the future may also be used to group risk acceptances together across engagements and products"),
  "recommendation": z.enum(["A","V","M","F","T"]).describe("Recommendation from the security team.\n\n* `A` - Accept (The risk is acknowledged, yet remains)\n* `V` - Avoid (Do not engage with whatever creates the risk)\n* `M` - Mitigate (The risk still exists, yet compensating controls make it less of a threat)\n* `F` - Fix (The risk is eradicated)\n* `T` - Transfer (The risk is transferred to a 3rd party)").optional(),
  "recommendation_details": z.string().nullable().describe("Explanation of security recommendation").optional(),
  "decision": z.enum(["A","V","M","F","T"]).describe("Risk treatment decision by risk owner\n\n* `A` - Accept (The risk is acknowledged, yet remains)\n* `V` - Avoid (Do not engage with whatever creates the risk)\n* `M` - Mitigate (The risk still exists, yet compensating controls make it less of a threat)\n* `F` - Fix (The risk is eradicated)\n* `T` - Transfer (The risk is transferred to a 3rd party)").optional(),
  "decision_details": z.string().nullable().describe("If a compensating control exists to mitigate the finding or reduce risk, then list the compensating control(s).").optional(),
  "accepted_by": z.string().max(200).nullable().describe("The person that accepts the risk, can be outside of DefectDojo.").optional(),
  "expiration_date": z.string().datetime({ offset: true }).nullable().describe("When the risk acceptance expires, the findings will be reactivated (unless disabled below).").optional(),
  "expiration_date_warned": z.string().datetime({ offset: true }).nullable().describe("(readonly) Date at which notice about the risk acceptance expiration was sent.").optional(),
  "expiration_date_handled": z.string().datetime({ offset: true }).nullable().describe("(readonly) When the risk acceptance expiration was handled (manually or by the daily job).").optional(),
  "reactivate_expired": z.boolean().describe("Reactivate findings when risk acceptance expires?").optional(),
  "restart_sla_expired": z.boolean().describe("When enabled, the SLA for findings is restarted when the risk acceptance expires.").optional(),
  "owner": z.number().int().describe("User in DefectDojo owning this acceptance. Only the owner and staff users can edit the risk acceptance."),
  "accepted_findings": z.array(z.number().int())
}