import { z } from "zod"

export const inputParamsSchema = {
  "rulesets": z.array(z.object({ "id": z.string().max(128).describe("The ID of the ruleset") })).describe("The list of runtime rulesets associated to this policy")
}