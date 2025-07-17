import { z } from "zod"

export const inputParamsSchema = {
  "email": z.string().describe("Email of the person to unsubscribe.\n\nAt least one of id/userId/email must be specified.").optional(),
  "userId": z.string().describe("userId of the person to unsubscribe.\n\nAt least one of id/userId/email must be specified.").optional(),
  "id": z.string().describe("Encharge ID of the person to unsubscribe.\n\nAt least one of id/userId/email must be specified.").optional()
}