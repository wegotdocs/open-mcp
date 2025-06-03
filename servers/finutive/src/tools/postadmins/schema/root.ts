import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "admins_data": z.array(z.object({ "admin_id": z.string().optional(), "name": z.string(), "surnames": z.string(), "nif": z.string(), "phone": z.string().optional(), "address": z.string().optional(), "zip_code": z.string().optional(), "email": z.string().optional(), "city": z.string().optional(), "country": z.string().optional(), "is_admin": z.number().int().optional(), "is_partner": z.number().int().optional(), "partner_perc": z.number().int().optional() })).optional()
}