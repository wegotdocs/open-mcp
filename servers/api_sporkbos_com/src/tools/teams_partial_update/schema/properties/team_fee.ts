import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().nullable().optional(),
  "created_by": z.string(),
  "updated_by": z.string(),
  "deleted_by": z.string(),
  "ulid": z.string().readonly(),
  "created_at": z.string().datetime({ offset: true }).readonly(),
  "updated_at": z.string().datetime({ offset: true }).readonly(),
  "deleted_at": z.string().datetime({ offset: true }).readonly(),
  "engagement_fee": z.string().regex(new RegExp("^-?\\d{0,8}(?:\\.\\d{0,2})?$")).optional(),
  "owner_fee": z.string().regex(new RegExp("^-?\\d{0,8}(?:\\.\\d{0,2})?$")).optional(),
  "admin_fee": z.string().regex(new RegExp("^-?\\d{0,8}(?:\\.\\d{0,2})?$")).optional(),
  "hr_fee": z.string().regex(new RegExp("^-?\\d{0,8}(?:\\.\\d{0,2})?$")).optional(),
  "manager_fee": z.string().regex(new RegExp("^-?\\d{0,8}(?:\\.\\d{0,2})?$")).optional(),
  "employee_fee": z.string().regex(new RegExp("^-?\\d{0,8}(?:\\.\\d{0,2})?$")).optional(),
  "staff_fee": z.string().regex(new RegExp("^-?\\d{0,8}(?:\\.\\d{0,2})?$")).optional(),
  "guest_fee": z.string().regex(new RegExp("^-?\\d{0,8}(?:\\.\\d{0,2})?$")).optional(),
  "team": z.number().int().nullable().optional()
}