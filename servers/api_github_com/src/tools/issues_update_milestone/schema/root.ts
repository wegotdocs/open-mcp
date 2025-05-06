import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "milestone_number": z.number().int().describe("The number that identifies the milestone."),
  "title": z.string().describe("The title of the milestone.").optional(),
  "state": z.enum(["open","closed"]).describe("The state of the milestone. Either `open` or `closed`.").optional(),
  "description": z.string().describe("A description of the milestone.").optional(),
  "due_on": z.string().datetime({ offset: true }).describe("The milestone due date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.").optional()
}