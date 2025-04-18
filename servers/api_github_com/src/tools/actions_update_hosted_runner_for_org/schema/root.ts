import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "hosted_runner_id": z.number().int().describe("Unique identifier of the GitHub-hosted runner."),
  "name": z.string().describe("Name of the runner. Must be between 1 and 64 characters and may only contain upper and lowercase letters a-z, numbers 0-9, '.', '-', and '_'.").optional(),
  "runner_group_id": z.number().int().describe("The existing runner group to add this runner to.").optional(),
  "maximum_runners": z.number().int().describe("The maximum amount of runners to scale up to. Runners will not auto-scale above this number. Use this setting to limit your cost.").optional(),
  "enable_static_ip": z.boolean().describe("Whether this runner should be updated with a static public IP. Note limit on account. To list limits on account, use `GET actions/hosted-runners/limits`").optional()
}