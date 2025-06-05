import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this team fee."),
  "b_id": z.number().int().nullable().optional(),
  "created_by": z.string().optional(),
  "updated_by": z.string().optional(),
  "deleted_by": z.string().optional(),
  "ulid": z.string().readonly().optional(),
  "created_at": z.string().datetime({ offset: true }).readonly().optional(),
  "updated_at": z.string().datetime({ offset: true }).readonly().optional(),
  "deleted_at": z.string().datetime({ offset: true }).readonly().optional(),
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