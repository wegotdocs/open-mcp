import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().optional(),
  "organization_custom_fields": z.array(z.object({ "custom_field_id": z.string().optional(), "value": z.string().optional() })).optional(),
  "organization_segments": z.array(z.string()).optional(),
  "resume": z.string().optional(),
  "url": z.string().optional(),
  "user_id": z.string().optional()
}