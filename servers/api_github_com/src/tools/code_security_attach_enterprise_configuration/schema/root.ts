import { z } from "zod"

export const inputParamsSchema = {
  "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id."),
  "configuration_id": z.number().int().describe("The unique identifier of the code security configuration."),
  "scope": z.enum(["all","all_without_configurations"]).describe("The type of repositories to attach the configuration to.")
}