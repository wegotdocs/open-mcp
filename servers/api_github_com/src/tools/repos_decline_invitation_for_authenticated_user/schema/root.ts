import { z } from "zod"

export const inputParamsSchema = {
  "invitation_id": z.number().int().describe("The unique identifier of the invitation.")
}