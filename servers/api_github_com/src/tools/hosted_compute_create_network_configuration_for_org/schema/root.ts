import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().describe("Name of the network configuration. Must be between 1 and 100 characters and may only contain upper and lowercase letters a-z, numbers 0-9, '.', '-', and '_'."),
  "compute_service": z.enum(["none","actions"]).describe("The hosted compute service to use for the network configuration.").optional(),
  "network_settings_ids": z.array(z.string()).min(1).max(1).describe("The identifier of the network settings to use for the network configuration. Exactly one network settings must be specified.")
}