import { z } from "zod"

export const inputParams = {
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "day": z.string().describe("The day of the week on which to apply maintenance updates."),
  "hour": z.string().describe("The hour in UTC at which maintenance updates will be applied in 24 hour format."),
  "pending": z.boolean().describe("A boolean value indicating whether any maintenance is scheduled to be performed in the next window.").readonly().optional(),
  "description": z.array(z.string()).describe("A list of strings, each containing information about a pending maintenance update.").readonly().optional()
}