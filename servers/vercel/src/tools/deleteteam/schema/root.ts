import { z } from "zod"

export const inputParamsSchema = {
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of."),
  "newDefaultTeamId": z.string().describe("Id of the team to be set as the new default team").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "reasons": z.array(z.object({ "slug": z.string().describe("Idenitifier slug of the reason why the team is being deleted."), "description": z.string().describe("Description of the reason why the team is being deleted.") }).strict().describe("An object describing the reason why the team is being deleted.")).describe("Optional array of objects that describe the reason why the team is being deleted.").optional()
}