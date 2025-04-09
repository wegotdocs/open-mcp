import { z } from "zod"

export const inputParams = {
  "agent_uuid": z.string().describe("A unique identifier for an agent."),
  "knowledge_base_uuid": z.string().describe("A unique identifier for a knowledge base.")
}