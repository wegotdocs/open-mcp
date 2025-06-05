import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this skill training."),
  "b_id": z.number().int().readonly(),
  "created_by": z.string(),
  "updated_by": z.string(),
  "deleted_by": z.string(),
  "ulid": z.string().readonly(),
  "created_at": z.string().datetime({ offset: true }).readonly(),
  "updated_at": z.string().datetime({ offset: true }).readonly(),
  "deleted_at": z.string().datetime({ offset: true }).readonly(),
  "users": z.array(z.number().int()),
  "skills": z.array(z.number().int()),
  "level": z.enum(["Beginner","Intermediate","Advanced","Master"]).describe("* `Beginner` - Beginner\n* `Intermediate` - Intermediate\n* `Advanced` - Advanced\n* `Master` - Master"),
  "trainer_name": z.string().max(255).nullable().optional(),
  "date_of_training": z.string().date(),
  "note": z.string().nullable().optional(),
  "state": z.string().max(255).nullable().optional(),
  "position": z.string().max(255).nullable().optional(),
  "trainer": z.number().int().nullable().optional()
}