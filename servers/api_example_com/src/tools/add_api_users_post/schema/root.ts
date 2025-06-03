import { z } from "zod"

export const inputParamsSchema = {
  "first_name": z.string(),
  "last_name": z.string(),
  "login": z.string(),
  "phone_number": z.union([z.string(), z.null()]).optional(),
  "is_mobile": z.boolean(),
  "type": z.enum(["ADMIN","DEALER","SERVICE","USER"]).optional(),
  "organization_id": z.number().int(),
  "password": z.string(),
  "repeat_password": z.string()
}