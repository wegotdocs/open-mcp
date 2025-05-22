import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The call center's id."),
  "user_id": z.number().int().nullable().describe("ID of the operator to remove.")
}