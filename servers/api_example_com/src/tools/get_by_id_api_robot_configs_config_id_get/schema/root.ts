import { z } from "zod"

export const inputParamsSchema = {
  "config_id": z.number().int()
}