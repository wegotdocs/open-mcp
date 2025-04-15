import { z } from "zod"

export const inputParamsSchema = {
  "agent_uuid": z.string().describe("A unique identifier for your agent."),
  "api_key_uuid": z.string().describe("API key for an agent.")
}