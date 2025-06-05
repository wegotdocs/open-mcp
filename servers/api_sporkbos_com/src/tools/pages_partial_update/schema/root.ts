import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this page."),
  "b_id": z.number().int().readonly().optional(),
  "created_by": z.string().optional(),
  "updated_by": z.string().optional(),
  "deleted_by": z.string().optional(),
  "ulid": z.string().readonly().optional(),
  "created_at": z.string().datetime({ offset: true }).readonly().optional(),
  "updated_at": z.string().datetime({ offset: true }).readonly().optional(),
  "deleted_at": z.string().datetime({ offset: true }).readonly().optional(),
  "name": z.string().max(255).optional(),
  "order": z.number().int().gte(-2147483648).lte(2147483647).optional(),
  "note": z.string().optional(),
  "due_date": z.string().date().nullable().optional(),
  "start_time": z.string().time().nullable().optional(),
  "duration": z.number().int().gte(-2147483648).lte(2147483647).nullable().optional(),
  "icon": z.string().max(255).optional(),
  "color": z.string().max(255).optional(),
  "flag": z.enum(["Clear","Flagged","Warning","Blocked","None"]).describe("* `Clear` - Clear\n* `Flagged` - Flagged\n* `Warning` - Warning\n* `Blocked` - Blocked\n* `None` - None").optional(),
  "is_template": z.boolean().optional(),
  "team": z.number().int().nullable().readonly().optional(),
  "content": z.number().int().nullable().readonly().optional()
}