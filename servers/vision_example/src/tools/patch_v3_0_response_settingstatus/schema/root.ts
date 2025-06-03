import { z } from "zod"

export const inputParamsSchema = {
  "endpointActionException": z.enum(["enabled","disabled"]).describe("The status of the endpoint response action exclusion setting.").optional(),
  "isolatedTrafficException": z.enum(["enabled","disabled"]).describe("The status of the isolated endpoint network traffic setting.").optional()
}