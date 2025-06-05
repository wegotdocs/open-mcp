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
  "required_knowledge": z.array(z.number().int()).optional(),
  "position_parent_data": z.string().readonly(),
  "skills": z.string().readonly(),
  "required_learning": z.string().readonly(),
  "position_group_data": z.string().readonly(),
  "job_description_data": z.string().readonly(),
  "files": z.array(z.object({ "id": z.number().int().optional(), "name": z.string(), "file": z.string().url().optional() })).optional(),
  "name": z.string().max(50),
  "description": z.string().optional(),
  "icon": z.string().max(50).optional(),
  "colour": z.string().max(50).optional(),
  "status": z.enum(["Active","Pending","Archive","Deleted","Awaiting Access"]).describe("* `Active` - Active\n* `Pending` - Pending\n* `Archive` - Archive\n* `Deleted` - Delete\n* `Awaiting Access` - Awaiting Access").optional(),
  "team": z.number().int().nullable().optional(),
  "position_level": z.number().int().nullable().optional(),
  "parent": z.number().int().nullable().optional(),
  "job_description": z.number().int().nullable().optional()
}