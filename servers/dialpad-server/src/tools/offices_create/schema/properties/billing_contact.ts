import { z } from "zod"

export const inputParamsSchema = {
  "email": z.string().nullable().describe("The contact email."),
  "name": z.string().nullable().describe("[single-line only]\n\nThe contact name."),
  "phone": z.string().nullable().describe("The contact phone number.").optional()
}