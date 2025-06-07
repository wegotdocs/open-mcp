import { z } from "zod"

export const inputParamsSchema = {
  "agent_id": z.string(),
  "reports": z.array(z.record(z.any())),
  "timestamp": z.string(),
  "cluster": z.string()
}