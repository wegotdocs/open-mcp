import { z } from "zod"

export const inputParamsSchema = {
  "vps_id": z.number().int(),
  "power_type": z.enum(["start_vps","stop_vps","restart_vps"])
}