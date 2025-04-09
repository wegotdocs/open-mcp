import { z } from "zod"

export const inputParams = {
  "description": z.string().max(4000).describe("The description of the notification scheme.").optional(),
  "name": z.string().max(255).describe("The name of the notification scheme. Must be unique (case-insensitive)."),
  "notificationSchemeEvents": z.array(z.object({ "event": z.string(), "notifications": z.array(z.object({ "notificationType": z.string().describe("The notification type, e.g `CurrentAssignee`, `Group`, `EmailAddress`."), "parameter": z.string().describe("The value corresponding to the specified notification type.").optional() }).catchall(z.any()).describe("Details of a notification within a notification scheme.")).describe("The list of notifications mapped to a specified event.") }).catchall(z.any()).describe("Details of a notification scheme event.")).describe("The list of notifications which should be added to the notification scheme.").optional()
}