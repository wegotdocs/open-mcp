import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().readonly(),
  "created_by": z.string(),
  "updated_by": z.string(),
  "deleted_by": z.string(),
  "ulid": z.string().readonly(),
  "created_at": z.string().datetime({ offset: true }).readonly(),
  "updated_at": z.string().datetime({ offset: true }).readonly(),
  "deleted_at": z.string().datetime({ offset: true }).readonly(),
  "name": z.string().max(50),
  "type": z.enum(["Exempt","NonExempt"]).describe("* `Exempt` - Exempt\n* `NonExempt` - Non-Exempt"),
  "description": z.string().optional(),
  "icon": z.string().max(50).optional(),
  "colour": z.string().max(50).optional(),
  "status": z.enum(["Active","Pending","Archive","Deleted","Awaiting Access"]).describe("* `Active` - Active\n* `Pending` - Pending\n* `Archive` - Archive\n* `Deleted` - Delete\n* `Awaiting Access` - Awaiting Access").optional(),
  "order": z.number().int().gte(-2147483648).lte(2147483647).nullable().optional(),
  "team": z.number().int().nullable().optional()
}