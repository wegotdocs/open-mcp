import { z } from "zod"

export const inputParamsSchema = {
  "from": z.string().date().describe("Filter date by start date").optional(),
  "to": z.string().date().describe("Filter date by end date").optional(),
  "hoursBagRuleIds": z.array(z.string().uuid()).describe("Find HoursBagRuleHistory by hoursBagRule Ids").optional(),
  "employeeIds": z.array(z.string().uuid()).describe("Find HoursBagRuleHistory by employee Ids").optional(),
  "limit": z.number().int().describe("Limit HoursBagRuleHistory").optional(),
  "page": z.number().int().describe("Request a specific page").optional()
}