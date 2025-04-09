import { z } from "zod"

export const inputParams = {
  "planId": z.number().int().describe("The ID of the plan."),
  "planOnlyTeamId": z.number().int().describe("The ID of the plan-only team.")
}