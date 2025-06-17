import { z } from "zod"

export const inputParamsSchema = {
  "agent_id": z.string().uuid(),
  "discovery_type": z.string(),
  "payload": z.record(z.any()).nullable()
}