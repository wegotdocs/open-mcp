import { z } from "zod"

export const inputParamsSchema = {
  "target_id": z.string(),
  "target_resource": z.string(),
  "valid_until": z.string().datetime({ offset: true }),
  "token_name": z.string()
}