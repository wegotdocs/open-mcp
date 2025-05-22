import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The channel's id."),
  "user_id": z.number().int().nullable().describe("The user id.")
}