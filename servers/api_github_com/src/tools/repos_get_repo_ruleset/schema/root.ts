import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "ruleset_id": z.number().int().describe("The ID of the ruleset."),
  "includes_parents": z.boolean().describe("Include rulesets configured at higher levels that apply to this repository").optional()
}