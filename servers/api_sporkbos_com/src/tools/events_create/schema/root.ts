import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().readonly(),
  "shared_with": z.array(z.object({ "id": z.number().int(), "name": z.string(), "type": z.enum(["user","position","group"]).describe("* `user` - user\n* `position` - position\n* `group` - group"), "avatar": z.string().readonly() })).optional(),
  "ulid": z.string().optional(),
  "created_at": z.string().datetime({ offset: true }).optional(),
  "updated_at": z.string().datetime({ offset: true }).readonly(),
  "deleted_at": z.string().datetime({ offset: true }).nullable().optional(),
  "title": z.string().max(255),
  "description": z.string().optional(),
  "start_at": z.string().datetime({ offset: true }),
  "end_at": z.string().datetime({ offset: true }),
  "is_full_day_event": z.boolean().optional(),
  "is_team_event": z.boolean().optional(),
  "is_deleted": z.boolean().optional(),
  "created_by": z.number().int().nullable().optional(),
  "updated_by": z.number().int().nullable().optional(),
  "deleted_by": z.number().int().nullable().optional(),
  "team": z.number().int().nullable().optional(),
  "shared_users": z.array(z.number().int()).optional(),
  "shared_groups": z.array(z.number().int()).optional(),
  "shared_positions": z.array(z.number().int()).optional()
}