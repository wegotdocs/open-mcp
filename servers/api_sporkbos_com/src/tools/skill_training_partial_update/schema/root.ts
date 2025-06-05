import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this skill training."),
  "b_id": z.number().int().readonly().optional(),
  "created_by": z.string().optional(),
  "updated_by": z.string().optional(),
  "deleted_by": z.string().optional(),
  "ulid": z.string().readonly().optional(),
  "created_at": z.string().datetime({ offset: true }).readonly().optional(),
  "updated_at": z.string().datetime({ offset: true }).readonly().optional(),
  "deleted_at": z.string().datetime({ offset: true }).readonly().optional(),
  "users": z.array(z.number().int()).optional(),
  "skills": z.array(z.number().int()).optional(),
  "level": z.enum(["Beginner","Intermediate","Advanced","Master"]).describe("* `Beginner` - Beginner\n* `Intermediate` - Intermediate\n* `Advanced` - Advanced\n* `Master` - Master").optional(),
  "trainer_name": z.string().max(255).nullable().optional(),
  "date_of_training": z.string().date().optional(),
  "note": z.string().nullable().optional(),
  "state": z.string().max(255).nullable().optional(),
  "position": z.string().max(255).nullable().optional(),
  "trainer": z.number().int().nullable().optional()
}