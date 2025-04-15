import { z } from "zod"

export const inputParamsSchema = {
  "email": z.array(z.string()).describe("An email to notify on an alert trigger."),
  "slack": z.array(z.object({ "channel": z.string().describe("Slack channel to notify of an alert trigger."), "url": z.string().describe("Slack Webhook URL.") })).describe("Slack integration details.")
}