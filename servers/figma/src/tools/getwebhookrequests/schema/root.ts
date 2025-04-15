import { z } from "zod"

export const inputParamsSchema = {
  "webhook_id": z.string().describe("The id of the webhook subscription you want to see events from")
}