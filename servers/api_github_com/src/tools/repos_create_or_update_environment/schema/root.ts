import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "environment_name": z.string().describe("The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with `%2F`."),
  "wait_timer": z.number().int().describe("The amount of time to delay a job after the job is initially triggered. The time (in minutes) must be an integer between 0 and 43,200 (30 days).").optional(),
  "prevent_self_review": z.boolean().describe("Whether or not a user who created the job is prevented from approving their own job.").optional(),
  "reviewers": z.array(z.object({ "type": z.enum(["User","Team"]).describe("The type of reviewer.").optional(), "id": z.number().int().describe("The id of the user or team who can review the deployment").optional() })).nullable().describe("The people or teams that may review jobs that reference the environment. You can list up to six users or teams as reviewers. The reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.").optional(),
  "deployment_branch_policy": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `deployment_branch_policy` to the tool, first call the tool `expandSchema` with \"/properties/deployment_branch_policy\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The type of deployment branch policy for this environment. To allow all branches to deploy, set to `null`.</property-description>").optional()
}