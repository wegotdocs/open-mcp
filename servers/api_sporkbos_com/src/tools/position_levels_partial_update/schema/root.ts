import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this position level."),
  "b_id": z.number().int().readonly().optional(),
  "created_by": z.string().optional(),
  "updated_by": z.string().optional(),
  "deleted_by": z.string().optional(),
  "ulid": z.string().readonly().optional(),
  "created_at": z.string().datetime({ offset: true }).readonly().optional(),
  "updated_at": z.string().datetime({ offset: true }).readonly().optional(),
  "deleted_at": z.string().datetime({ offset: true }).readonly().optional(),
  "name": z.string().max(50).optional(),
  "type": z.enum(["Exempt","NonExempt"]).describe("* `Exempt` - Exempt\n* `NonExempt` - Non-Exempt").optional(),
  "description": z.string().optional(),
  "icon": z.string().max(50).optional(),
  "colour": z.string().max(50).optional(),
  "status": z.enum(["Active","Pending","Archive","Deleted","Awaiting Access"]).describe("* `Active` - Active\n* `Pending` - Pending\n* `Archive` - Archive\n* `Deleted` - Delete\n* `Awaiting Access` - Awaiting Access").optional(),
  "order": z.number().int().gte(-2147483648).lte(2147483647).nullable().optional(),
  "team": z.number().int().nullable().optional()
}