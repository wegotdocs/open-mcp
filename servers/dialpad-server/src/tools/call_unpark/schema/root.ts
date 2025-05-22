import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The call's id."),
  "user_id": z.number().int().nullable().describe("The id of the user who should unpark the call.")
}