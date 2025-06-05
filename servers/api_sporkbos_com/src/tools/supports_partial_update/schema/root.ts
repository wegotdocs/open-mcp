import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this support."),
  "b_id": z.number().int().readonly().optional(),
  "created_by": z.string().optional(),
  "updated_by": z.string().optional(),
  "deleted_by": z.string().optional(),
  "ulid": z.string().readonly().optional(),
  "created_at": z.string().datetime({ offset: true }).readonly().optional(),
  "updated_at": z.string().datetime({ offset: true }).readonly().optional(),
  "deleted_at": z.string().datetime({ offset: true }).readonly().optional(),
  "type": z.enum(["Improvement","Problem","Question","Other"]).describe("* `Improvement` - Improvement\n* `Problem` - Problem\n* `Question` - Question\n* `Other` - Other").optional(),
  "title": z.string().max(255).optional(),
  "note": z.string().optional(),
  "resolution": z.string().optional(),
  "status": z.enum(["Active","Pending","Archive","Deleted","Awaiting Access"]).describe("* `Active` - Active\n* `Pending` - Pending\n* `Archive` - Archive\n* `Deleted` - Delete\n* `Awaiting Access` - Awaiting Access").optional(),
  "importance": z.enum(["Low","Medium","High","Critical","None"]).describe("* `Low` - Low\n* `Medium` - Medium\n* `High` - High\n* `Critical` - Critical\n* `None` - None").optional(),
  "flag": z.enum(["Clear","Flagged","Warning","Blocked","None"]).describe("* `Clear` - Clear\n* `Flagged` - Flagged\n* `Warning` - Warning\n* `Blocked` - Blocked\n* `None` - None").optional(),
  "read_at": z.string().datetime({ offset: true }).nullable().readonly().optional(),
  "resolved_at": z.string().datetime({ offset: true }).nullable().readonly().optional(),
  "submission_url": z.string().max(255).optional(),
  "team": z.number().int().nullable().readonly().optional(),
  "issuer": z.number().int().nullable().readonly().optional(),
  "support_staff": z.number().int().nullable().readonly().optional(),
  "resolved_by": z.number().int().nullable().readonly().optional()
}