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
  "type": z.enum(["Improvement","Problem","Question","Other"]).describe("* `Improvement` - Improvement\n* `Problem` - Problem\n* `Question` - Question\n* `Other` - Other"),
  "title": z.string().max(255).optional(),
  "note": z.string(),
  "resolution": z.string().optional(),
  "status": z.enum(["Active","Pending","Archive","Deleted","Awaiting Access"]).describe("* `Active` - Active\n* `Pending` - Pending\n* `Archive` - Archive\n* `Deleted` - Delete\n* `Awaiting Access` - Awaiting Access").optional(),
  "importance": z.enum(["Low","Medium","High","Critical","None"]).describe("* `Low` - Low\n* `Medium` - Medium\n* `High` - High\n* `Critical` - Critical\n* `None` - None").optional(),
  "flag": z.enum(["Clear","Flagged","Warning","Blocked","None"]).describe("* `Clear` - Clear\n* `Flagged` - Flagged\n* `Warning` - Warning\n* `Blocked` - Blocked\n* `None` - None").optional(),
  "read_at": z.string().datetime({ offset: true }).nullable().readonly(),
  "resolved_at": z.string().datetime({ offset: true }).nullable().readonly(),
  "submission_url": z.string().max(255).optional(),
  "team": z.number().int().nullable().readonly(),
  "issuer": z.number().int().nullable().readonly(),
  "support_staff": z.number().int().nullable().readonly(),
  "resolved_by": z.number().int().nullable().readonly()
}