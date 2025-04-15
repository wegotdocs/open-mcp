import { z } from "zod"

export const inputParams = {
  "plan": z.enum(["cloud_v0_hobby","cloud_v0_pro","cloud_v0_humanity_labs","cloud_v0_x_labs","cloud_v0_agenta_ai"])
}