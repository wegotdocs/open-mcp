import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "auto_trigger_checks": z.array(z.object({ "app_id": z.number().int().describe("The `id` of the GitHub App."), "setting": z.boolean().describe("Set to `true` to enable automatic creation of CheckSuite events upon pushes to the repository, or `false` to disable them.") })).describe("Enables or disables automatic creation of CheckSuite events upon pushes to the repository. Enabled by default.").optional()
}