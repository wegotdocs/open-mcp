import { z } from "zod"

export const inputParams = {
  "notificationSchemeId": z.string().describe("The ID of the notification scheme."),
  "notificationId": z.string().describe("The ID of the notification.")
}