import { z } from "zod"

export const inputParamsSchema = {
  "vps_id": z.number().int(),
  "template_name": z.string()
}