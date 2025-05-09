import { z } from "zod"

export const inputParamsSchema = {
  "organization_id": z.string(),
  "plan": z.enum(["cloud_v0_hobby","cloud_v0_pro","cloud_v0_humanity_labs","cloud_v0_x_labs","cloud_v0_agenta_ai"]),
  "success_url": z.string()
}