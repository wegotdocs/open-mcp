import { z } from "zod"

export const inputParamsSchema = {
  "email_address": z.string().describe("A comma-separated list of email addresses to filter by.").optional(),
  "id": z.string().describe("A comma-separated list of contact IDs to filter by.").optional()
}