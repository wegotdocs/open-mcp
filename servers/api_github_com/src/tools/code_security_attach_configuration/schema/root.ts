import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "configuration_id": z.number().int().describe("The unique identifier of the code security configuration."),
  "scope": z.enum(["all","all_without_configurations","public","private_or_internal","selected"]).describe("The type of repositories to attach the configuration to. `selected` means the configuration will be attached to only the repositories specified by `selected_repository_ids`"),
  "selected_repository_ids": z.array(z.number().int().describe("Unique identifier of the repository.")).describe("An array of repository IDs to attach the configuration to. You can only provide a list of repository ids when the `scope` is set to `selected`.").optional()
}