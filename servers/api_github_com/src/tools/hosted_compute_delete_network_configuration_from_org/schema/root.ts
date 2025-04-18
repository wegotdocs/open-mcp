import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "network_configuration_id": z.string().describe("Unique identifier of the hosted compute network configuration.")
}