import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this policy."),
  "b_id": z.number().int().readonly(),
  "created_by": z.string(),
  "updated_by": z.string(),
  "deleted_by": z.string(),
  "ulid": z.string().readonly(),
  "created_at": z.string().datetime({ offset: true }).readonly(),
  "updated_at": z.string().datetime({ offset: true }).readonly(),
  "deleted_at": z.string().datetime({ offset: true }).readonly(),
  "accepted_at": z.string().datetime({ offset: true }).readonly(),
  "accepted_policies": z.boolean().optional(),
  "user": z.number().int()
}