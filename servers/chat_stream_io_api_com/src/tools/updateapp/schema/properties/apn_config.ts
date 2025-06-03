import { z } from "zod"

export const inputParamsSchema = {
  "Disabled": z.boolean().optional(),
  "auth_key": z.string().optional(),
  "auth_type": z.enum(["certificate","token"]).optional(),
  "bundle_id": z.string().optional(),
  "development": z.boolean().optional(),
  "host": z.string().optional(),
  "key_id": z.string().optional(),
  "notification_template": z.string().optional(),
  "p12_cert": z.string().optional(),
  "team_id": z.string().optional()
}