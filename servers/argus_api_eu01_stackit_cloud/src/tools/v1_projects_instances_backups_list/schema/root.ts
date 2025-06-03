import { z } from "zod"

export const inputParamsSchema = {
  "instanceId": z.string(),
  "projectId": z.string(),
  "backupTarget": z.array(z.enum(["alertConfig","alertRules","scrapeConfig","grafana"])).describe("List of backup targets").optional(),
  "Authorization": z.string().describe("Accepts technical credentials and api gateway access.")
}