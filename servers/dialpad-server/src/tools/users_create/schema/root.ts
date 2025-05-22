import { z } from "zod"

export const inputParamsSchema = {
  "auto_assign": z.boolean().nullable().describe("If set to true, a number will be automatically assigned.").optional(),
  "email": z.string().nullable().describe("The user's email."),
  "first_name": z.string().nullable().describe("[single-line only]\n\nThe user's first name.").optional(),
  "last_name": z.string().nullable().describe("[single-line only]\n\nThe user's last name.").optional(),
  "license": z.enum(["admins","agents","dpde_all","dpde_one","lite_lines","lite_support_agents","magenta_lines","talk"]).nullable().describe("The user's license type. This affects billing for the user.").optional(),
  "office_id": z.number().int().nullable().describe("The user's office id.")
}