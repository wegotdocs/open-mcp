import { z } from "zod"

export const inputParamsSchema = {
  "call_id": z.number().int().describe("The call's id.")
}