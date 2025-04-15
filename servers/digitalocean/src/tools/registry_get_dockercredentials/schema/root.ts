import { z } from "zod"

export const inputParamsSchema = {
  "expiry_seconds": z.number().int().gte(0).describe("The duration in seconds that the returned registry credentials will be valid. If not set or 0, the credentials will not expire.").optional(),
  "read_write": z.boolean().describe("By default, the registry credentials allow for read-only access. Set this query parameter to `true` to obtain read-write credentials.").optional()
}