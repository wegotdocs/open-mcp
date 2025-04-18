import { z } from "zod"

export const inputParamsSchema = {
  "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id."),
  "configuration_id": z.number().int().describe("The unique identifier of the code security configuration."),
  "default_for_new_repos": z.enum(["all","none","private_and_internal","public"]).describe("Specify which types of repository this security configuration should be applied to by default.").optional()
}