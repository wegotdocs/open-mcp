import { z } from "zod"

export const inputParamsSchema = {
  "reviewers": z.array(z.object({ "reviewer_id": z.number().int().describe("The ID of the team or role selected as a bypass reviewer"), "reviewer_type": z.enum(["TEAM","ROLE"]).describe("The type of the bypass reviewer") })).describe("The bypass reviewers for secret scanning delegated bypass").optional()
}