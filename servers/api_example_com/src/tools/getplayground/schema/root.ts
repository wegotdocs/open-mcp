import { z } from "zod"

export const inputParamsSchema = {
  "prompt": z.string().min(1).describe("Prompt to be used in the conversation"),
  "connectionId": z.string().nullable().describe("Connection Id for streaming").optional()
}