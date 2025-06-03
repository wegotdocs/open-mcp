import { z } from "zod"

export const inputParamsSchema = {
  "user_id": z.number().int(),
  "first_name": z.string(),
  "last_name": z.string(),
  "login": z.string(),
  "is_mobile": z.boolean(),
  "phone_number": z.union([z.string(), z.null()]).optional(),
  "type": z.union([z.enum(["ADMIN","DEALER","SERVICE","USER"]), z.null()]).optional(),
  "organization_id": z.number().int()
}