import { z } from "zod"

export const inputParams = {
  "integrationConfigurationId": z.string(),
  "event": z.object({ "type": z.literal("installation.updated"), "billingPlanId": z.string().describe("The installation-level billing plan ID").optional() }).strict()
}