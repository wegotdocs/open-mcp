import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "configuration_id": z.number().int().describe("The unique identifier of the code security configuration."),
  "default_for_new_repos": z.enum(["all","none","private_and_internal","public"]).describe("Specify which types of repository this security configuration should be applied to by default.").optional()
}