import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "run_id": z.number().int().describe("The unique identifier of the workflow run."),
  "environment_ids": z.array(z.number().int()).describe("The list of environment ids to approve or reject"),
  "state": z.enum(["approved","rejected"]).describe("Whether to approve or reject deployment to the specified environments."),
  "comment": z.string().describe("A comment to accompany the deployment review")
}