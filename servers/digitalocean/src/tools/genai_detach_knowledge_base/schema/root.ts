import { z } from "zod"

export const inputParamsSchema = {
  "agent_uuid": z.string().describe("Agent id"),
  "knowledge_base_uuid": z.string().describe("Knowledge base id")
}