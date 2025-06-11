import { z } from "zod"

export const inputParamsSchema = {
  "policy_id": z.number().int(),
  "condition_id": z.string().uuid()
}