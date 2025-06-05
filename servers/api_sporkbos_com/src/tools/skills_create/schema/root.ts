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
  "files": z.array(z.object({ "id": z.number().int().optional(), "name": z.string(), "file": z.string().url().optional() })).optional(),
  "is_favourite": z.boolean().optional(),
  "linked_positions": z.array(z.record(z.any())).readonly(),
  "name": z.string().max(255),
  "stage": z.enum(["Draft","Published","Archive","Parking"]).describe("* `Draft` - Draft\n* `Published` - Published\n* `Archive` - Archive\n* `Parking` - Parking").optional(),
  "difficulty": z.string(),
  "id_number": z.string().max(50).nullable().optional(),
  "description": z.string().nullable().optional(),
  "learn_frequency": z.enum(["Never","Recurring"]).describe("* `Never` - Never\n* `Recurring` - Recurring").optional(),
  "recurring_interval": z.number().int().gte(-2147483648).lte(2147483647).nullable().optional(),
  "active": z.boolean().optional(),
  "beginner_hours": z.number().int().gte(-2147483648).lte(2147483647).nullable().optional(),
  "intermediate_hours": z.number().int().gte(-2147483648).lte(2147483647).nullable().optional(),
  "advanced_hours": z.number().int().gte(-2147483648).lte(2147483647).nullable().optional(),
  "master_hours": z.number().int().gte(-2147483648).lte(2147483647).nullable().optional(),
  "team": z.number().int().nullable(),
  "category": z.number().int().nullable().optional()
}