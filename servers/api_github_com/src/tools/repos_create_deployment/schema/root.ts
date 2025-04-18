import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "ref": z.string().describe("The ref to deploy. This can be a branch, tag, or SHA."),
  "task": z.string().describe("Specifies a task to execute (e.g., `deploy` or `deploy:migrations`).").optional(),
  "auto_merge": z.boolean().describe("Attempts to automatically merge the default branch into the requested ref, if it's behind the default branch.").optional(),
  "required_contexts": z.array(z.string()).describe("The [status](https://docs.github.com/rest/commits/statuses) contexts to verify against commit status checks. If you omit this parameter, GitHub verifies all unique contexts before creating a deployment. To bypass checking entirely, pass an empty array. Defaults to all unique contexts.").optional(),
  "payload": z.record(z.any()).optional(),
  "environment": z.string().describe("Name for the target deployment environment (e.g., `production`, `staging`, `qa`).").optional(),
  "description": z.string().nullable().describe("Short description of the deployment.").optional(),
  "transient_environment": z.boolean().describe("Specifies if the given environment is specific to the deployment and will no longer exist at some point in the future. Default: `false`").optional(),
  "production_environment": z.boolean().describe("Specifies if the given environment is one that end-users directly interact with. Default: `true` when `environment` is `production` and `false` otherwise.").optional()
}