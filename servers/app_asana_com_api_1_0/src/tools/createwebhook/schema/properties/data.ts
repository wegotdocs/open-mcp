import { z } from "zod"

export const inputParamsSchema = {
  "resource": z.string().describe("A resource ID to subscribe to. Many Asana resources are valid to create webhooks on, but higher-level resources require filters."),
  "target": z.string().url().describe("The URL to receive the HTTP POST. The full URL will be used to deliver events from this webhook (including parameters) which allows encoding of application-specific state when the webhook is created."),
  "filters": z.array(z.string()).describe("An array of WebhookFilter objects to specify a whitelist of filters to apply to events from this webhook. If a webhook event passes any of the filters the event will be delivered; otherwise no event will be sent to the receiving server.").optional()
}