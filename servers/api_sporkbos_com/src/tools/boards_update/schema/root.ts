import { z } from "zod"

export const inputParamsSchema = {
  "ulid": z.string(),
  "id": z.number().int().readonly(),
  "created_by": z.string(),
  "updated_by": z.string(),
  "deleted_by": z.string(),
  "b_ulid": z.string().readonly(),
  "created_at": z.string().datetime({ offset: true }).readonly(),
  "updated_at": z.string().datetime({ offset: true }).readonly(),
  "deleted_at": z.string().datetime({ offset: true }).readonly(),
  "name": z.string().optional(),
  "owner_data": z.string(),
  "is_editable": z.boolean().readonly(),
  "shared_users_data": z.array(z.object({ "id": z.number().int().readonly(), "name": z.string().max(255).optional(), "role": z.string().readonly(), "email": z.string().email().max(254), "avatar": z.string().url().readonly(), "alt_id": z.string().max(6), "status": z.enum(["Active","Pending","Archive","Deleted","Awaiting Access"]).describe("* `Active` - Active\n* `Pending` - Pending\n* `Archive` - Archive\n* `Deleted` - Delete\n* `Awaiting Access` - Awaiting Access").optional() })).readonly(),
  "shared_groups_data": z.array(z.object({ "id": z.number().int().readonly(), "name": z.string().max(255), "users": z.array(z.number().int()).optional() })).readonly(),
  "status": z.string().optional(),
  "description": z.string().optional(),
  "share": z.string().optional(),
  "owner": z.number().int().nullable().optional(),
  "team": z.number().int().nullable().optional(),
  "shared_users": z.array(z.number().int()).optional(),
  "shared_groups": z.array(z.number().int()).optional()
}