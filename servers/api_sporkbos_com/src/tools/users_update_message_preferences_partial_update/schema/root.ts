import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this user."),
  "team": z.number().int().describe("Filter users by team ID"),
  "receive_by_email": z.boolean().optional(),
  "receive_by_sms_text": z.boolean().optional()
}