import { z } from "zod"

export const inputParams = {
  "id": z.number().int().readonly(),
  "name": z.string().max(100),
  "bio": z.string().nullable().optional(),
  "created_at": z.string().datetime({ offset: true }).optional(),
  "image": z.string().url().nullable().optional(),
  "sync_enabled": z.boolean().optional(),
  "sharing": z.enum(["public","unlisted","invite"]).describe("* `public` - Public\n* `unlisted` - Unlisted\n* `invite` - Invite Only").optional(),
  "is_locked": z.boolean().readonly(),
  "website": z.string().url().max(200).nullable().optional(),
  "songs": z.string().readonly()
}