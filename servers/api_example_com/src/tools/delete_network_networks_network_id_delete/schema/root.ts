import { z } from "zod"

export const inputParamsSchema = {
  "network_id": z.number().int()
}