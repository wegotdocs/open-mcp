import { z } from "zod"

export const inputParamsSchema = {
  "email": z.string().optional(),
  "phone_number": z.string().optional(),
  "contact_url": z.string().optional(),
  "link_update_url": z.string().optional()
}