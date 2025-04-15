import { z } from "zod"

export const inputParamsSchema = {
  "planId": z.number().int().describe("The ID of the plan.")
}