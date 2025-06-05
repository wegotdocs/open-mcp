import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this tag."),
  "b_id": z.number().int().readonly().optional(),
  "created_by": z.string().optional(),
  "updated_by": z.string().optional(),
  "deleted_by": z.string().optional(),
  "ulid": z.string().readonly().optional(),
  "created_at": z.string().datetime({ offset: true }).readonly().optional(),
  "updated_at": z.string().datetime({ offset: true }).readonly().optional(),
  "deleted_at": z.string().datetime({ offset: true }).readonly().optional(),
  "content_count": z.number().int().readonly().optional(),
  "name": z.string().max(255).optional(),
  "status": z.enum(["Active","Pending","Archive","Deleted","Awaiting Access"]).describe("* `Active` - Active\n* `Pending` - Pending\n* `Archive` - Archive\n* `Deleted` - Delete\n* `Awaiting Access` - Awaiting Access").optional(),
  "color": z.string().max(255).optional(),
  "team": z.number().int().nullable().optional()
}