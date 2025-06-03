import { z } from "zod"

export const inputParamsSchema = {
  "Disabled": z.boolean().optional(),
  "apn_template": z.string().optional(),
  "credentials_json": z.string().optional(),
  "data_template": z.string().optional(),
  "notification_template": z.string().optional(),
  "server_key": z.string().optional()
}