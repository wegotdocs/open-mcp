import { z } from "zod"

export const inputParamsSchema = {
  "authenticationTokenSecretVersion": z.string().describe("Required. The name of the Secret Manager secret version to use as an authentication token for Git operations. Must be in the format `projects/*/secrets/*/versions/*`.").optional(),
  "defaultBranch": z.string().describe("Required. The Git remote's default branch name.").optional(),
  "tokenStatus": z.enum(["TOKEN_STATUS_UNSPECIFIED","NOT_FOUND","INVALID","VALID"]).describe("Output only. Indicates the status of the Git access token.").readonly().optional(),
  "url": z.string().describe("Required. The Git remote's URL.").optional()
}