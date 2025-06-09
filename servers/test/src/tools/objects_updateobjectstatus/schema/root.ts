import { z } from "zod"

export const inputParamsSchema = {
  "locale": z.string(),
  "organizationId": z.number().int(),
  "id": z.number(),
  "is_active": z.boolean()
}