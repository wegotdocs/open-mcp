import { z } from "zod"

export const inputParamsSchema = {
  "groupName": z.string(),
  "instanceId": z.string(),
  "projectId": z.string(),
  "alertRecord": z.array(z.string()).describe("Name of the records that should be deleted"),
  "Authorization": z.string().describe("Accepts technical credentials and api gateway access.")
}