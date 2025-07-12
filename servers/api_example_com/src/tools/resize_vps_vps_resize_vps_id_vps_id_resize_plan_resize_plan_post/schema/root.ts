import { z } from "zod"

export const inputParamsSchema = {
  "vps_id": z.number().int(),
  "resize_plan": z.string()
}