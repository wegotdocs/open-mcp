import { z } from "zod"

export const inputParamsSchema = {
  "organizationId": z.number().int().describe("Organization identifier")
}