import { z } from "zod"

export const inputParams = {
  "planId": z.number().int().describe("The ID of the plan."),
  "capacity": z.number().describe("The capacity for the plan-only team.").optional(),
  "issueSourceId": z.number().int().describe("The ID of the issue source for the plan-only team.").optional(),
  "memberAccountIds": z.array(z.string()).describe("The account IDs of the plan-only team members.").optional(),
  "name": z.string().min(1).max(255).describe("The plan-only team name."),
  "planningStyle": z.enum(["Scrum","Kanban"]).describe("The planning style for the plan-only team. This must be \"Scrum\" or \"Kanban\"."),
  "sprintLength": z.number().int().describe("The sprint length for the plan-only team.").optional()
}