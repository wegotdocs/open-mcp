import { z } from "zod"

export const inputParamsSchema = {
  "ulid": z.string(),
  "id": z.number().int().readonly().optional(),
  "created_by": z.string().optional(),
  "updated_by": z.string().optional(),
  "deleted_by": z.string().optional(),
  "b_ulid": z.string().readonly().optional(),
  "created_at": z.string().datetime({ offset: true }).readonly().optional(),
  "updated_at": z.string().datetime({ offset: true }).readonly().optional(),
  "deleted_at": z.string().datetime({ offset: true }).readonly().optional(),
  "name": z.string().optional(),
  "owner_data": z.string().optional(),
  "is_editable": z.boolean().readonly().optional(),
  "shared_users_data": z.array(z.object({ "id": z.number().int().readonly(), "name": z.string().max(255).optional(), "role": z.string().readonly(), "email": z.string().email().max(254), "avatar": z.string().url().readonly(), "alt_id": z.string().max(6), "status": z.enum(["Active","Pending","Archive","Deleted","Awaiting Access"]).describe("* `Active` - Active\n* `Pending` - Pending\n* `Archive` - Archive\n* `Deleted` - Delete\n* `Awaiting Access` - Awaiting Access").optional() })).readonly().optional(),
  "shared_groups_data": z.array(z.object({ "id": z.number().int().readonly(), "name": z.string().max(255), "users": z.array(z.number().int()).optional() })).readonly().optional(),
  "status": z.string().optional(),
  "description": z.string().optional(),
  "share": z.string().optional(),
  "owner": z.number().int().nullable().optional(),
  "team": z.number().int().nullable().optional(),
  "shared_users": z.array(z.number().int()).optional(),
  "shared_groups": z.array(z.number().int()).optional()
}