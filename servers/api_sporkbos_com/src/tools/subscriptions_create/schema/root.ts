import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().nullable().optional(),
  "created_by": z.string(),
  "updated_by": z.string(),
  "deleted_by": z.string(),
  "ulid": z.string().readonly(),
  "created_at": z.string().datetime({ offset: true }).readonly(),
  "updated_at": z.string().datetime({ offset: true }).readonly(),
  "deleted_at": z.string().datetime({ offset: true }).readonly(),
  "filled_seats": z.number().int().readonly(),
  "type": z.enum(["Trial","Engage","Survey","Content","Feedback","Perform","Grow"]).describe("* `Trial` - Trial\n* `Engage` - Engage\n* `Survey` - Survey\n* `Content` - Content\n* `Feedback` - Feedback\n* `Perform` - Perform\n* `Grow` - Grow"),
  "seats": z.number().int().gte(-2147483648).lte(2147483647),
  "price_per_seat": z.number().int().gte(-2147483648).lte(2147483647),
  "subscribed_at": z.string().datetime({ offset: true }).nullable().optional(),
  "expired_at": z.string().datetime({ offset: true }).nullable().optional(),
  "note": z.string().optional(),
  "team": z.number().int().nullable().optional()
}