import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this jir a_ project."),
  "prefetch": z.array(z.enum(["engagement","jira_instance","product"])).describe("List of fields for which to prefetch model instances and add those to the response").optional()
}