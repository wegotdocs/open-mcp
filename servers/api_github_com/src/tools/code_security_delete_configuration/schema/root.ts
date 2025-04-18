import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "configuration_id": z.number().int().describe("The unique identifier of the code security configuration.")
}