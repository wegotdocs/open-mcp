import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this performance snapshot."),
  "b_id": z.number().int().readonly().optional(),
  "created_by": z.string().optional(),
  "updated_by": z.string().optional(),
  "deleted_by": z.string().optional(),
  "ulid": z.string().readonly().optional(),
  "created_at": z.string().datetime({ offset: true }).readonly().optional(),
  "updated_at": z.string().datetime({ offset: true }).readonly().optional(),
  "deleted_at": z.string().datetime({ offset: true }).readonly().optional(),
  "name": z.string().max(255).optional(),
  "description": z.string().optional(),
  "number": z.string().max(255).optional(),
  "start_date": z.string().date().nullable().optional(),
  "end_date": z.string().date().nullable().optional(),
  "performance_start_date": z.string().date().nullable().optional(),
  "performance_end_date": z.string().date().nullable().optional(),
  "required_all_users": z.boolean().optional(),
  "team": z.number().int().nullable().optional(),
  "users": z.array(z.number().int()).optional()
}