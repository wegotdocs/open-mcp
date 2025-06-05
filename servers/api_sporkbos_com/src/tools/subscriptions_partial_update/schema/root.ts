import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this subscription."),
  "b_id": z.number().int().nullable().optional(),
  "created_by": z.string().optional(),
  "updated_by": z.string().optional(),
  "deleted_by": z.string().optional(),
  "ulid": z.string().readonly().optional(),
  "created_at": z.string().datetime({ offset: true }).readonly().optional(),
  "updated_at": z.string().datetime({ offset: true }).readonly().optional(),
  "deleted_at": z.string().datetime({ offset: true }).readonly().optional(),
  "filled_seats": z.number().int().readonly().optional(),
  "type": z.enum(["Trial","Engage","Survey","Content","Feedback","Perform","Grow"]).describe("* `Trial` - Trial\n* `Engage` - Engage\n* `Survey` - Survey\n* `Content` - Content\n* `Feedback` - Feedback\n* `Perform` - Perform\n* `Grow` - Grow").optional(),
  "seats": z.number().int().gte(-2147483648).lte(2147483647).optional(),
  "price_per_seat": z.number().int().gte(-2147483648).lte(2147483647).optional(),
  "subscribed_at": z.string().datetime({ offset: true }).nullable().optional(),
  "expired_at": z.string().datetime({ offset: true }).nullable().optional(),
  "note": z.string().optional(),
  "team": z.number().int().nullable().optional()
}