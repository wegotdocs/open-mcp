import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "ruleset_id": z.number().int().describe("The ID of the ruleset."),
  "version_id": z.number().int().describe("The ID of the version")
}