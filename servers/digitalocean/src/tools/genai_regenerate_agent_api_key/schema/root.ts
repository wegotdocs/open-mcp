import { z } from "zod"

export const inputParamsSchema = {
  "agent_uuid": z.string().describe("Agent id"),
  "api_key_uuid": z.string().describe("Api key id")
}