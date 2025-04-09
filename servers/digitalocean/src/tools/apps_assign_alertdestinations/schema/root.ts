import { z } from "zod"

export const inputParams = {
  "app_id": z.string().describe("The app ID"),
  "alert_id": z.string().describe("The alert ID"),
  "emails": z.array(z.string()).optional(),
  "slack_webhooks": z.array(z.object({ "url": z.string().optional(), "channel": z.string().optional() })).optional()
}