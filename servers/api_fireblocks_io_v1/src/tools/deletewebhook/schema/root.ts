import { z } from "zod"

export const inputParamsSchema = {
  "webhookId": z.string().uuid().describe("The unique identifier of the webhook")
}