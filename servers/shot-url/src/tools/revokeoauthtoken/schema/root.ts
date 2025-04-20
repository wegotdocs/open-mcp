import { z } from "zod"

export const inputParamsSchema = {
  "token": z.string().optional(),
  "token_type_hint": z.string().describe("Enums(access_token,refresh_token)").optional()
}