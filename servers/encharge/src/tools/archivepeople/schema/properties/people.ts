import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Encharge ID of the person. An UUID.\n\nAt least one of id/userId/email must be specified.").optional(),
  "userId": z.string().describe("UserID of the person.\n\nAt least one of id/userId/email must be specified.").optional(),
  "email": z.string().describe("Email of the person.\n\nAt least one of id/userId/email must be specified.").optional()
}