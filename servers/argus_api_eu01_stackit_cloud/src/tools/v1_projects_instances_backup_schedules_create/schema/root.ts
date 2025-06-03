import { z } from "zod"

export const inputParamsSchema = {
  "instanceId": z.string(),
  "projectId": z.string(),
  "backupTarget": z.array(z.enum(["alertConfig","alertRules","scrapeConfig","grafana"])).describe("List of backup targets").optional(),
  "schedule": z.string().max(100).describe("The schedule for how often to create a backup.\n`Additional Validators:`\n* must be a valid cronjob format\n* must run less than hourly"),
  "Authorization": z.string().describe("Accepts technical credentials and api gateway access.")
}