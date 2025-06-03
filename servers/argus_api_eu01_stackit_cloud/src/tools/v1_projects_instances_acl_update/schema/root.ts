import { z } from "zod"

export const inputParamsSchema = {
  "instanceId": z.string(),
  "projectId": z.string(),
  "acl": z.array(z.string().max(100).describe("cidr correct format")).describe("list of cidr"),
  "Authorization": z.string().describe("Accepts technical credentials and api gateway access.")
}