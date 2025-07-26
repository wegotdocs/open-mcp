import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this Answered Engagement Survey."),
  "prefetch": z.array(z.enum(["assignee","engagement","responder","survey"])).describe("List of fields for which to prefetch model instances and add those to the response").optional()
}