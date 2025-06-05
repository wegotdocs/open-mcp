import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this position."),
  "b_id": z.number().int().readonly().optional(),
  "created_by": z.string().optional(),
  "updated_by": z.string().optional(),
  "deleted_by": z.string().optional(),
  "ulid": z.string().readonly().optional(),
  "created_at": z.string().datetime({ offset: true }).readonly().optional(),
  "updated_at": z.string().datetime({ offset: true }).readonly().optional(),
  "deleted_at": z.string().datetime({ offset: true }).readonly().optional(),
  "required_knowledge": z.array(z.number().int()).optional(),
  "position_parent_data": z.string().readonly().optional(),
  "skills": z.string().readonly().optional(),
  "required_learning": z.string().readonly().optional(),
  "position_group_data": z.string().readonly().optional(),
  "job_description_data": z.string().readonly().optional(),
  "files": z.array(z.object({ "id": z.number().int().optional(), "name": z.string(), "file": z.string().url().optional() })).optional(),
  "name": z.string().max(50).optional(),
  "description": z.string().optional(),
  "icon": z.string().max(50).optional(),
  "colour": z.string().max(50).optional(),
  "status": z.enum(["Active","Pending","Archive","Deleted","Awaiting Access"]).describe("* `Active` - Active\n* `Pending` - Pending\n* `Archive` - Archive\n* `Deleted` - Delete\n* `Awaiting Access` - Awaiting Access").optional(),
  "team": z.number().int().nullable().optional(),
  "position_level": z.number().int().nullable().optional(),
  "parent": z.number().int().nullable().optional(),
  "job_description": z.number().int().nullable().optional()
}