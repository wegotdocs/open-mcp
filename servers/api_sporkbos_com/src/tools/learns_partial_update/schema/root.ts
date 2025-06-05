import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this learn."),
  "b_id": z.number().int().readonly().optional(),
  "created_by": z.string().optional(),
  "updated_by": z.string().optional(),
  "deleted_by": z.string().optional(),
  "ulid": z.string().readonly().optional(),
  "created_at": z.string().datetime({ offset: true }).readonly().optional(),
  "updated_at": z.string().datetime({ offset: true }).readonly().optional(),
  "deleted_at": z.string().datetime({ offset: true }).readonly().optional(),
  "content_skill": z.number().int().gte(-2147483648).lte(2147483647).nullable().optional(),
  "content_difficulty": z.string().optional(),
  "content_hours": z.number().int().gte(-2147483648).lte(2147483647).nullable().optional(),
  "content_knowledge_level": z.string().optional(),
  "user_country": z.string().max(50).optional(),
  "user_state": z.string().max(50).optional(),
  "flag": z.enum(["Clear","Flagged","Warning","Blocked","None"]).describe("* `Clear` - Clear\n* `Flagged` - Flagged\n* `Warning` - Warning\n* `Blocked` - Blocked\n* `None` - None").optional(),
  "was_required": z.boolean().optional(),
  "content_version": z.string().regex(new RegExp("^-?\\d{0,9}(?:\\.\\d{0,1})?$")).optional(),
  "team": z.number().int().nullable().optional(),
  "content": z.number().int().nullable().optional(),
  "user": z.number().int().nullable().readonly().optional(),
  "user_position": z.number().int().nullable().optional()
}