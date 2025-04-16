import { z } from "zod"

export const inputParamsSchema = {
  "thread_id": z.string().describe("The ID of the [thread](/docs/api-reference/threads) to which this message belongs."),
  "message_id": z.string().describe("The ID of the message to retrieve.")
}