import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The ID of the notification scheme."),
  "notificationSchemeEvents": z.array(z.object({ "event": z.string(), "notifications": z.array(z.object({ "notificationType": z.string().describe("The notification type, e.g `CurrentAssignee`, `Group`, `EmailAddress`."), "parameter": z.string().describe("The value corresponding to the specified notification type.").optional() }).catchall(z.any()).describe("Details of a notification within a notification scheme.")).describe("The list of notifications mapped to a specified event.") }).catchall(z.any()).describe("Details of a notification scheme event.")).describe("The list of notifications which should be added to the notification scheme.")
}