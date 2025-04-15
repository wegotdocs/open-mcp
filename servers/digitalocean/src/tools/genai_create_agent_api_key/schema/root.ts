import { z } from "zod"

export const inputParamsSchema = {
  "agent_uuid": z.string().describe("Agent id"),
  "b_agent_uuid": z.string().describe("Agent id").optional(),
  "name": z.string().describe("A human friendly name to identify the key").optional()
}