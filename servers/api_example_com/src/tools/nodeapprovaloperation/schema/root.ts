import { z } from "zod"

export const inputParamsSchema = {
  "mode": z.enum(["APPROVE","REJECT"]).describe("Approval action to perform"),
  "devices": z.array(z.number().int()).optional()
}