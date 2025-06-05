import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this scorecard."),
  "b_id": z.number().int().readonly(),
  "created_by": z.string(),
  "updated_by": z.string(),
  "deleted_by": z.string(),
  "ulid": z.string().readonly(),
  "created_at": z.string().datetime({ offset: true }).readonly(),
  "updated_at": z.string().datetime({ offset: true }).readonly(),
  "deleted_at": z.string().datetime({ offset: true }).readonly(),
  "is_favorite": z.string().readonly(),
  "name": z.string().max(255),
  "status": z.string().optional(),
  "description": z.string().optional(),
  "share": z.string().optional(),
  "owner": z.number().int().nullable().optional(),
  "team": z.number().int().nullable().optional(),
  "shared_users": z.array(z.number().int()).optional(),
  "shared_groups": z.array(z.number().int()).optional(),
  "contents": z.array(z.number().int()).optional()
}