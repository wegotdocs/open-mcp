import { z } from "zod"

export const inputParamsSchema = {
  "completion_id": z.string().describe("The ID of the chat completion to retrieve.")
}