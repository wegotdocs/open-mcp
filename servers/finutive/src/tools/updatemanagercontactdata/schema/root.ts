import { z } from "zod"

export const inputParamsSchema = {
  "managerId": z.string(),
  "calendly": z.string().describe("Manager calendly link").optional(),
  "phone": z.string().describe("Manager phone number").optional(),
  "whatsapp": z.string().describe("Manager whatsapp number").optional()
}