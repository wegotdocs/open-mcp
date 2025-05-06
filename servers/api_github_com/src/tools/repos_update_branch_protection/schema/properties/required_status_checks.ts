import { z } from "zod"

export const inputParamsSchema = {
  "strict": z.boolean().describe("Require branches to be up to date before merging."),
  "checks": z.array(z.object({ "context": z.string().describe("The name of the required check"), "app_id": z.number().int().describe("The ID of the GitHub App that must provide this check. Omit this field to automatically select the GitHub App that has recently provided this check, or any app if it was not set by a GitHub App. Pass -1 to explicitly allow any app to set the status.").optional() })).describe("The list of status checks to require in order to merge into this branch.").optional()
}