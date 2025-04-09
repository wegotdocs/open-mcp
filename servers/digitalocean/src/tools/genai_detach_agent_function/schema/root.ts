import { z } from "zod"

export const inputParams = {
  "agent_uuid": z.string().describe("The id of the agent the function route belongs to."),
  "function_uuid": z.string().describe("The function route to be destroyed. This does not destroy the function itself.")
}