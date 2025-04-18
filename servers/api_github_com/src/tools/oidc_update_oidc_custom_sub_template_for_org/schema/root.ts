import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "include_claim_keys": z.array(z.string()).describe("Array of unique strings. Each claim key can only contain alphanumeric characters and underscores.")
}