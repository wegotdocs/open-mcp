import { z } from "zod"

export const inputParams = {
  "id": z.string(),
  "b_id": z.number().int().readonly().optional(),
  "name": z.string().max(100).optional(),
  "bio": z.string().nullable().optional(),
  "created_at": z.string().datetime({ offset: true }).optional(),
  "image": z.string().url().nullable().optional(),
  "sync_enabled": z.boolean().optional(),
  "sharing": z.enum(["public","unlisted","invite"]).describe("* `public` - Public\n* `unlisted` - Unlisted\n* `invite` - Invite Only").optional(),
  "is_locked": z.boolean().readonly().optional(),
  "website": z.string().url().max(200).nullable().optional(),
  "songs": z.string().readonly().optional()
}