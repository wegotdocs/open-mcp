import { z } from "zod"

export const inputParamsSchema = {
  "route_id": z.number().int()
}