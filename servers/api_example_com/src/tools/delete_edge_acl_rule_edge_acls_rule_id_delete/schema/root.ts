import { z } from "zod"

export const inputParamsSchema = {
  "rule_id": z.number().int()
}