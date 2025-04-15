import { z } from "zod"

export const inputParamsSchema = {
  "uid": z.string().describe("The user ID of the member."),
  "newDefaultTeamId": z.string().describe("The ID of the team to set as the new default team for the Northstar user.").optional()
}