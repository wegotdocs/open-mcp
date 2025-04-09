import { z } from "zod"

export const inputParams = {
  "planId": z.number().int().describe("The ID of the plan."),
  "atlassianTeamId": z.string().describe("The ID of the Atlassian team.")
}