import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string(),
  "user_id": z.string().optional(),
  "firstname": z.string().optional(),
  "surname1": z.string().optional(),
  "surname2": z.string().optional(),
  "dni": z.string().optional(),
  "deletion_type": z.string().optional(),
  "dismissal_type": z.string().optional(),
  "dismissal_cause": z.string().optional(),
  "advice_type": z.string().optional(),
  "forewarning": z.number().int().optional(),
  "pending_holidays": z.number().int().optional(),
  "handicapped": z.number().int().optional(),
  "holidays_enjoyed_current_year": z.number().int().optional(),
  "effective_date": z.string().datetime({ offset: true }).optional(),
  "timezone_offset": z.number().int().optional(),
  "observations": z.string().optional()
}