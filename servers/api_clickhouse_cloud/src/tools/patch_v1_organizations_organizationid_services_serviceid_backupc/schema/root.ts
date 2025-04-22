import { z } from "zod"

export const inputParamsSchema = {
  "organizationId": z.string().uuid().describe("ID of the organization that owns the service."),
  "serviceId": z.string().uuid().describe("ID of the service."),
  "backupPeriodInHours": z.number().describe("The interval in hours between each backup.").optional(),
  "backupRetentionPeriodInHours": z.number().describe("The minimum duration in hours for which the backups are available.").optional(),
  "backupStartTime": z.string().describe("The time in HH:MM format for the backups to be performed (evaluated in UTC timezone). When defined the backup period resets to every 24 hours.").optional()
}