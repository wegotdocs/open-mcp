import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this message."),
  "b_id": z.number().int().readonly().optional(),
  "created_by": z.string().optional(),
  "updated_by": z.string().optional(),
  "deleted_by": z.string().optional(),
  "ulid": z.string().readonly().optional(),
  "created_at": z.string().datetime({ offset: true }).readonly().optional(),
  "updated_at": z.string().datetime({ offset: true }).readonly().optional(),
  "deleted_at": z.string().datetime({ offset: true }).readonly().optional(),
  "shared_with": z.array(z.object({ "id": z.number().int(), "name": z.string(), "type": z.enum(["user","position","group"]).describe("* `user` - user\n* `position` - position\n* `group` - group"), "avatar": z.string().readonly() })).optional(),
  "is_email": z.boolean().optional(),
  "is_sms": z.boolean().optional(),
  "is_notification": z.boolean().optional(),
  "subject": z.string().max(255).optional(),
  "body": z.string().optional(),
  "is_team_event": z.boolean().optional(),
  "schedule_option": z.enum(["immediate","scheduled"]).describe("* `immediate` - Immediate\n* `scheduled` - Scheduled").optional(),
  "scheduled_datetime": z.string().datetime({ offset: true }).nullable().optional(),
  "is_draft": z.boolean().optional(),
  "is_sent": z.boolean().optional(),
  "team": z.number().int().nullable().optional(),
  "shared_users": z.array(z.number().int()).optional(),
  "shared_groups": z.array(z.number().int()).optional(),
  "shared_positions": z.array(z.number().int()).optional()
}