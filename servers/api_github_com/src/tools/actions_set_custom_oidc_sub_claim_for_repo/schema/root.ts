import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "use_default": z.boolean().describe("Whether to use the default template or not. If `true`, the `include_claim_keys` field is ignored."),
  "include_claim_keys": z.array(z.string()).describe("Array of unique strings. Each claim key can only contain alphanumeric characters and underscores.").optional()
}