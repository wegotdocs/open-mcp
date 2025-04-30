import { z } from "zod"

export const inputParamsSchema = {
  "webhookURL": z.string().describe("The webhook URL to send the Slack messages to.")
}