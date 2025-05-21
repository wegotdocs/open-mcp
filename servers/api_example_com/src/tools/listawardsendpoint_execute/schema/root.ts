import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("User ID").optional(),
  "badgeId": z.number().describe("Badge ID").optional(),
  "isActive": z.string().describe("Is active").optional()
}