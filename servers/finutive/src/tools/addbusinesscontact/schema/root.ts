import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().optional(),
  "user_id": z.string().optional(),
  "email": z.string().optional(),
  "first_name": z.string().optional(),
  "last_name": z.string().optional(),
  "phone_prefix": z.string().optional(),
  "phone_number": z.string().optional(),
  "main_contact": z.boolean().optional(),
  "relation_type": z.enum(["INTERNAL","EXTERNAL"]).optional(),
  "role": z.string().optional(),
  "address": z.string().optional()
}