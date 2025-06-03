import { z } from "zod"

export const inputParamsSchema = {
  "templateId": z.string(),
  "business_id": z.string().optional(),
  "width_logo": z.number().int().optional(),
  "bottom_text": z.string().optional(),
  "font_family": z.string().optional(),
  "color": z.string().optional(),
  "logo_hash": z.string().optional(),
  "name_template": z.string().optional()
}