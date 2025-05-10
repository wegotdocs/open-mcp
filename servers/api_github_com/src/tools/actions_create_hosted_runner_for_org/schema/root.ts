import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().describe("Name of the runner. Must be between 1 and 64 characters and may only contain upper and lowercase letters a-z, numbers 0-9, '.', '-', and '_'."),
  "image": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `image` to the tool, first call the tool `expandSchema` with \"/properties/image\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The image of runner. To list all available images, use `GET /actions/hosted-runners/images/github-owned` or `GET /actions/hosted-runners/images/partner`.</property-description>"),
  "size": z.string().describe("The machine size of the runner. To list available sizes, use `GET actions/hosted-runners/machine-sizes`"),
  "runner_group_id": z.number().int().describe("The existing runner group to add this runner to."),
  "maximum_runners": z.number().int().describe("The maximum amount of runners to scale up to. Runners will not auto-scale above this number. Use this setting to limit your cost.").optional(),
  "enable_static_ip": z.boolean().describe("Whether this runner should be created with a static public IP. Note limit on account. To list limits on account, use `GET actions/hosted-runners/limits`").optional()
}