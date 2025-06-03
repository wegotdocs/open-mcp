import { z } from "zod"

export const inputParamsSchema = {
  "backupDate": z.string(),
  "instanceId": z.string(),
  "projectId": z.string(),
  "restoreTarget": z.enum(["alertConfig","alertRules","scrapeConfig","grafana"]).describe("List of restore targets"),
  "Authorization": z.string().describe("Accepts technical credentials and api gateway access.")
}