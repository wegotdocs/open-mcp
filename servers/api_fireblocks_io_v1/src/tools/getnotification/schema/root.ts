import { z } from "zod"

export const inputParamsSchema = {
  "webhookId": z.string().describe("The ID of the webhook to fetch"),
  "notificationId": z.string().describe("The ID of the notification to fetch"),
  "includeData": z.boolean().describe("Include the data of the notification").optional()
}