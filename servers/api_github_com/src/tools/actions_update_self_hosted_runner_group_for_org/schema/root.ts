import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "runner_group_id": z.number().int().describe("Unique identifier of the self-hosted runner group."),
  "name": z.string().describe("Name of the runner group."),
  "visibility": z.enum(["selected","all","private"]).describe("Visibility of a runner group. You can select all repositories, select individual repositories, or all private repositories.").optional(),
  "allows_public_repositories": z.boolean().describe("Whether the runner group can be used by `public` repositories.").optional(),
  "restricted_to_workflows": z.boolean().describe("If `true`, the runner group will be restricted to running only the workflows specified in the `selected_workflows` array.").optional(),
  "selected_workflows": z.array(z.string().describe("Name of workflow the runner group should be allowed to run. Note that a ref, tag, or long SHA is required.")).describe("List of workflows the runner group should be allowed to run. This setting will be ignored unless `restricted_to_workflows` is set to `true`.").optional(),
  "network_configuration_id": z.string().nullable().describe("The identifier of a hosted compute network configuration.").optional()
}