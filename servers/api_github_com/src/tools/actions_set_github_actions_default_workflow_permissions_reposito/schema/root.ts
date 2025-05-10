import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "default_workflow_permissions": z.enum(["read","write"]).describe("The default workflow permissions granted to the GITHUB_TOKEN when running workflows.").optional(),
  "can_approve_pull_request_reviews": z.boolean().describe("Whether GitHub Actions can approve pull requests. Enabling this can be a security risk.").optional()
}