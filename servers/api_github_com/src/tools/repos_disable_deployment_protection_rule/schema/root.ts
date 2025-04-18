import { z } from "zod"

export const inputParamsSchema = {
  "environment_name": z.string().describe("The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with `%2F`."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "protection_rule_id": z.number().int().describe("The unique identifier of the protection rule.")
}