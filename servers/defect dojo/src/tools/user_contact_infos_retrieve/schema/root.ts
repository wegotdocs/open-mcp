import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this user contact info."),
  "prefetch": z.array(z.literal("user")).describe("List of fields for which to prefetch model instances and add those to the response").optional()
}