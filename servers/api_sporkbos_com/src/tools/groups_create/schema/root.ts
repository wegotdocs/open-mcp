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
  "positions": z.array(z.number().int()).optional(),
  "users": z.array(z.number().int()).optional(),
  "name": z.string().max(255),
  "description": z.string().optional(),
  "icon": z.string().max(50).optional(),
  "colour": z.string().max(50).optional(),
  "type": z.enum(["Position","User"]).describe("* `Position` - Position\n* `User` - User"),
  "status": z.enum(["Active","Pending","Archive","Deleted","Awaiting Access"]).describe("* `Active` - Active\n* `Pending` - Pending\n* `Archive` - Archive\n* `Deleted` - Delete\n* `Awaiting Access` - Awaiting Access").optional(),
  "team": z.number().int().nullable().optional(),
  "owner": z.number().int().nullable().optional()
}