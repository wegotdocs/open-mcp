import { z } from "zod"

export const inputParamsSchema = {
  "attack_id": z.number().int()
}