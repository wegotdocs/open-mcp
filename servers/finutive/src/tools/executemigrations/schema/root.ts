import { z } from "zod"

export const inputParamsSchema = {
  "token": z.string().optional(),
  "business_name": z.string(),
  "phone": z.string().optional(),
  "user_name": z.string(),
  "tipology": z.string().optional(),
  "email": z.string(),
  "english": z.boolean().optional(),
  "gclid": z.string().optional(),
  "one_off": z.number().int().optional(),
  "deal_labels": z.array(z.string()).optional(),
  "monthly_value": z.number().int().optional(),
  "opportunity": z.boolean().optional(),
  "notes": z.string().optional(),
  "notes_docs": z.array(z.string()).optional(),
  "mailhost": z.string(),
  "password": z.string().optional()
}