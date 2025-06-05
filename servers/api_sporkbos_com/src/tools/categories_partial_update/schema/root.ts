import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this category."),
  "b_id": z.number().int().readonly().optional(),
  "created_by": z.string().optional(),
  "updated_by": z.string().optional(),
  "deleted_by": z.string().optional(),
  "ulid": z.string().readonly().optional(),
  "created_at": z.string().datetime({ offset: true }).readonly().optional(),
  "updated_at": z.string().datetime({ offset: true }).readonly().optional(),
  "deleted_at": z.string().datetime({ offset: true }).readonly().optional(),
  "children": z.array(z.object({ "id": z.number().int().readonly(), "created_by": z.string(), "updated_by": z.string(), "deleted_by": z.string(), "ulid": z.string().readonly(), "created_at": z.string().datetime({ offset: true }).readonly(), "updated_at": z.string().datetime({ offset: true }).readonly(), "deleted_at": z.string().datetime({ offset: true }).readonly(), "name": z.string().max(255), "active": z.boolean().optional(), "stage": z.enum(["Draft","Published","Archive","Parking"]).describe("* `Draft` - Draft\n* `Published` - Published\n* `Archive` - Archive\n* `Parking` - Parking").optional(), "team": z.number().int().nullable(), "parent": z.number().int().nullable().optional() })).readonly().optional(),
  "name": z.string().max(255).optional(),
  "active": z.boolean().optional(),
  "stage": z.enum(["Draft","Published","Archive","Parking"]).describe("* `Draft` - Draft\n* `Published` - Published\n* `Archive` - Archive\n* `Parking` - Parking").optional(),
  "team": z.number().int().nullable().optional(),
  "parent": z.number().int().nullable().optional()
}