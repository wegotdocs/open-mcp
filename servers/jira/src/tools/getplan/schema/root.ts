import { z } from "zod"

export const inputParams = {
  "planId": z.number().int().describe("The ID of the plan."),
  "useGroupId": z.boolean().describe("Whether to return group IDs instead of group names. Group names are deprecated.").optional()
}