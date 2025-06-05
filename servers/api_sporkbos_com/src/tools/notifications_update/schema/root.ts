import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this notification."),
  "b_id": z.number().int().readonly(),
  "created_by": z.string(),
  "updated_by": z.string(),
  "deleted_by": z.string(),
  "ulid": z.string().readonly(),
  "created_at": z.string().datetime({ offset: true }).readonly(),
  "updated_at": z.string().datetime({ offset: true }).readonly(),
  "deleted_at": z.string().datetime({ offset: true }).readonly(),
  "title": z.string().max(255),
  "note": z.string(),
  "flag": z.enum(["Clear","Flagged","Warning","Blocked","None"]).describe("* `Clear` - Clear\n* `Flagged` - Flagged\n* `Warning` - Warning\n* `Blocked` - Blocked\n* `None` - None").optional(),
  "read_at": z.string().datetime({ offset: true }).nullable().optional(),
  "is_read": z.boolean().optional(),
  "ttl": z.string().datetime({ offset: true }).nullable().optional(),
  "link": z.string().url().max(200).nullable().optional(),
  "purpose": z.string().max(255).nullable().optional(),
  "related_info": z.any().nullable().optional(),
  "team": z.number().int().nullable().optional(),
  "recipient": z.number().int().nullable().optional()
}