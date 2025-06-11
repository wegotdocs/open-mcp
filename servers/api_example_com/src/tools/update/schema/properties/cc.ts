import { z } from "zod"

export const inputParamsSchema = {
  "uids": z.array(z.string().uuid().nullable().describe("List of user uids to be carbon-copied")).nullable().describe("List of user uids to be carbon-copied").optional(),
  "emails": z.array(z.string().nullable().describe("emails")).nullable().describe("emails").optional()
}