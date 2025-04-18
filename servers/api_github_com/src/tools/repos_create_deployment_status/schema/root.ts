import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "deployment_id": z.number().int().describe("deployment_id parameter"),
  "state": z.enum(["error","failure","inactive","in_progress","queued","pending","success"]).describe("The state of the status. When you set a transient deployment to `inactive`, the deployment will be shown as `destroyed` in GitHub."),
  "target_url": z.string().describe("The target URL to associate with this status. This URL should contain output to keep the user updated while the task is running or serve as historical information for what happened in the deployment.\n\n> [!NOTE]\n> It's recommended to use the `log_url` parameter, which replaces `target_url`.").optional(),
  "log_url": z.string().describe("The full URL of the deployment's output. This parameter replaces `target_url`. We will continue to accept `target_url` to support legacy uses, but we recommend replacing `target_url` with `log_url`. Setting `log_url` will automatically set `target_url` to the same value. Default: `\"\"`").optional(),
  "description": z.string().describe("A short description of the status. The maximum description length is 140 characters.").optional(),
  "environment": z.string().describe("Name for the target deployment environment, which can be changed when setting a deploy status. For example, `production`, `staging`, or `qa`. If not defined, the environment of the previous status on the deployment will be used, if it exists. Otherwise, the environment of the deployment will be used.").optional(),
  "environment_url": z.string().describe("Sets the URL for accessing your environment. Default: `\"\"`").optional(),
  "auto_inactive": z.boolean().describe("Adds a new `inactive` status to all prior non-transient, non-production environment deployments with the same repository and `environment` name as the created status's deployment. An `inactive` status is only added to deployments that had a `success` state. Default: `true`").optional()
}