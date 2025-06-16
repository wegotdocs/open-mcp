import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "name": z.string(),
  "slug": z.string(),
  "account_type": z.enum(["free","scale-up","business","enterprise"]),
  "telemetry_disabled": z.boolean(),
  "created_at": z.string().datetime({ offset: true }),
  "updated_at": z.string().datetime({ offset: true }),
  "free_trial_expiry": z.string().datetime({ offset: true }).nullable().optional(),
  "sso_connection_id": z.string().nullable().optional(),
  "sso_activated": z.boolean(),
  "internal": z.boolean().optional()
}