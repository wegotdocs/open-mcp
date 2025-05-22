import { z } from "zod"

export const inputParamsSchema = {
  "call_center_id": z.number().int().describe("The call center's ID"),
  "user_id": z.number().int().describe("The operator's ID")
}