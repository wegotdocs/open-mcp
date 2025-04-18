import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "title": z.string().describe("The title of the milestone."),
  "state": z.enum(["open","closed"]).describe("The state of the milestone. Either `open` or `closed`.").optional(),
  "description": z.string().describe("A description of the milestone.").optional(),
  "due_on": z.string().datetime({ offset: true }).describe("The milestone due date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.").optional()
}