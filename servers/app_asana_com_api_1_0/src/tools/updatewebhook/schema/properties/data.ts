import { z } from "zod"

export const inputParamsSchema = {
  "filters": z.array(z.string()).describe("An array of WebhookFilter objects to specify a whitelist of filters to apply to events from this webhook. If a webhook event passes any of the filters the event will be delivered; otherwise no event will be sent to the receiving server.").optional()
}